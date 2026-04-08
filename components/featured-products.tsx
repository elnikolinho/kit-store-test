import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const featuredProducts = [
  {
    id: 1,
    name: "Coming Soon",
    team: "TBA",
    year: "----",
    price: 0,
    image: null,
    category: "jerseys"
  },
]

export function FeaturedProducts() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs tracking-engravers text-accent font-semibold mb-2">CURATED SELECTION</p>
            <h2 className="font-serif text-3xl sm:text-4xl tracking-wide-custom text-foreground font-bold">
              FEATURED KITS
            </h2>
          </div>
          <Link 
            href="/shop/jerseys" 
            className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            VIEW ALL
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div 
              key={product.id} 
              className="group"
            >
              <div className="aspect-square relative bg-secondary rounded overflow-hidden mb-4 flex items-center justify-center">
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="text-center p-4">
                    <p className="text-muted-foreground text-sm tracking-wide-custom">COMING SOON</p>
                  </div>
                )}
              </div>
              <div className="space-y-1">
                <p className="text-xs tracking-wide text-muted-foreground">{product.year !== "----" ? product.year : ""}</p>
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

        {/* Mobile view all link */}
        <div className="mt-8 sm:hidden text-center">
          <Link 
            href="/shop/jerseys" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            VIEW ALL JERSEYS
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
