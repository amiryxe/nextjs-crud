import { CategoryType } from '@/types/types'
import Link from 'next/link'

const getData = async () => {
  const res = await fetch('http://localhost:3000/api/categories', {
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Failed')
  }

  return res.json()
}

export default async function Categories() {
  const categories: CategoryType[] = await getData()

  return (
    <div>
      <h1 className="text-lg font-black">List of Categories</h1>

      {categories.map((category) => (
        <Link
          key={category.id}
          href={'/categories/' + category.slug}
          className="border rounded-md p-4 m-4 block hover:bg-slate-800"
        >
          <h3>{category.title}</h3>
          <p>{category.desc}</p>
        </Link>
      ))}
    </div>
  )
}
