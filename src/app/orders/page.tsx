'use client'

import { useQuery } from '@tanstack/react-query'

export default function Orders() {
  const { data, isLoading } = useQuery({
    queryKey: ['orders'],
    queryFn: async () => {
      const res = await fetch('http://localhost:3000/api/orders')
      const data = await res.json()
      return data
    },
  })

  console.log(data)

  return (
    <div>
      <h1>List of Orders</h1>
    </div>
  )
}
