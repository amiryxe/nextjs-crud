'use client'

import { OrderType } from '@/types/types'
import { useQuery } from '@tanstack/react-query'

export default function Orders() {
  const { data, isLoading, status } = useQuery({
    queryKey: ['orders'],
    queryFn: async () => {
      const res = await fetch('http://localhost:3000/api/orders')
      return res.json() as Promise<OrderType[]>
    },
  })

  if (isLoading) return 'Loading...'

  return (
    <div>
      <h1>List of Orders</h1>
      {data?.map((item) => (
        <div className="border p-6 m-6 rounded-md shadow-gray-700 shadow-md" key={item.id}>
          <h3>Price: {item.price}</h3>
          <p>Status: {item.status}</p>
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
