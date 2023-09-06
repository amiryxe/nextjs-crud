import { ProductType } from '@/types/types'

const getData = async () => {
  const res = await fetch('http://localhost:3000/api/products', {
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Failed')
  }

  return res.json()
}

export default async function CategoryPage() {
  const featuredProducts: ProductType[] = await getData()

  return (
    <div className="border rounded-lg p-6">
      <h2>Featured Products: </h2>

      {featuredProducts.map((product) => (
        <div key={product.id} className="border m-4 p-3 rounded-md">
          <h3>{product.title}</h3>
          <p>{product.desc}</p>
          <strong>{product.price}</strong>
        </div>
      ))}
    </div>
  )
}
