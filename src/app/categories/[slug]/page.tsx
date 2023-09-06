import { ProductType } from '@/types/types'

const getData = async (category: string) => {
  const res = await fetch(`http://localhost:3000/api/product/${category}`)

  return res.json()
}

type Props = {
  params: { category: string }
}

export default async function CategoryPage({ params }: Props) {
  const products: ProductType[] = await getData(params.category)

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
