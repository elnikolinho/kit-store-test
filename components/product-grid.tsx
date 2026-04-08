import Link from "next/link"
import Image from "next/image"

interface Product {
  id: number
  name: string
  team: string
  year: string
  price: number
  image: string | null
  category: string
}

interface ProductGridProps {
  products: Product[]
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div 
          key={product.id} 
          className="group"
        >
          <div className="aspect-square relative bg-secondary rounded overflow-hidden mb-4 flex items-center justify-center">
            {product.image ? (
              <Link href={`/shop/${product.category}/${product.id}`} className="contents">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/10 transition-colors" />
              </Link>
            ) : (
              <div className="text-center p-4">
                <p className="text-muted-foreground text-sm tracking-wide-custom">COMING SOON</p>
              </div>
            )}
          </div>
          <div className="space-y-1">
            {product.year && (
              <p className="text-xs tracking-wide text-muted-foreground">{product.year}</p>
            )}
            <h3 className="text-sm text-foreground">
              {product.name}
            </h3>
            {product.price > 0 && (
              <p className="text-sm text-accent font-medium">${product.price}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
