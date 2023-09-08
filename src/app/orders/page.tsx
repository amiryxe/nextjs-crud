'use client'

import { useQuery } from '@tanstack/react-query'

export default function Orders() {
  const { data, isLoading, status, error } = useQuery({
    queryKey: ['orders'],
    queryFn: async () => {
      fetch('http://localhost:3000/api/orders').then((res) => res.json())
    },
  })

  console.log(data)
  console.log(error)

  return (
    <div>
      <h1>List of Orders</h1>

      {status === 'error' && (
        <p className="bg-red-200 border text-red-950 border-red-400 p-4 m-4 rounded-lg">
          You don't have access
        </p>
      )}
    </div>
  )
}
