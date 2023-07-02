import { dummyProducts } from '@/data/dummyData'
import ProductCard from '@/components/ProductCard'

export default function Home() {
  return (
    <main>
      <h1 className='h-1 p-5 text-center'>Your one stop store</h1>
      <div className='p-4 flex flex-wrap gap-4'>
        {dummyProducts.map(product =>{
          return(
            <div>
              <ProductCard product={product} key={product.id}></ProductCard>
            </div>
          )
        })}
      </div>
    </main>
  )
}
