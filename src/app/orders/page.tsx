'use client'

import { OrderType } from '@/types/types'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useSession } from 'next-auth/react'
import { toast } from 'react-toastify'

export default function Orders() {
  const { data: session } = useSession()
  const queryClient = useQueryClient()

  const { data, isLoading, status } = useQuery({
    queryKey: ['orders'],
    queryFn: async () => {
      const res = await fetch('http://localhost:3000/api/orders')
      return res.json() as Promise<OrderType[]>
    },
  })

  const { mutate, isLoading: isLoadingSave } = useMutation(
    ({ status, id }: { status: string; id: string }) => {
      return fetch(`http://localhost:3000/api/orders/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(status),
      })
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['orders'])
      },
    }
  )

  if (isLoading) return 'Loading...'

  const submitHandler = (e: React.FormEvent, id: string) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const input = form.elements[0] as HTMLInputElement
    const status = input.value

    mutate({ status, id })
    toast.success('The order status has been changed!')
  }

  return (
    <div>
      <h1>List of Orders</h1>
      {data?.map((item) => (
        <div className="border p-6 m-6 rounded-md shadow-gray-700 shadow-md" key={item.id}>
          <h3>Price: {item.price}</h3>
          <div>
            Status:{' '}
            {session?.user.isAdmin ? (
              <form className="flex gap-4 mt-4" onSubmit={(e) => submitHandler(e, item.id)}>
                <input
                  type="text"
                  className="p-3 rounded-md flex-1 text-black"
                  placeholder={item.status}
                />
                <button className="bg-green-800 p-3 rounded-md">Save</button>
              </form>
            ) : (
              <span>item.status</span>
            )}
          </div>
        </div>
      ))}

      {status === 'error' && (
        <p className="bg-red-200 border text-red-950 border-red-400 p-4 m-4 rounded-lg">
          You don't have access
        </p>
      )}
    </div>
  )
}
