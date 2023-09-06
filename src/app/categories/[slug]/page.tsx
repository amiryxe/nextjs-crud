import { ProductType } from '@/types/types'

const getData = async (category: string) => {
  const res = await fetch(`http://localhost:3000/api/products?cat=${category}`, {
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Failed')
  }

  return res.json()
}

type Props = {
  params: { slug: string }
}

export default async function CategoryPage({ params }: Props) {
  const products: ProductType[] = await getData(params.slug)

  return (
    <div className="border rounded-lg p-6">
      {products.map((product) => (
        <div key={product.id} className="border">
          <h3>{product.title}</h3>
          <p>{product.desc}</p>
          <strong>{product.price}</strong>
        </div>
      ))}
    </div>
  )
}
