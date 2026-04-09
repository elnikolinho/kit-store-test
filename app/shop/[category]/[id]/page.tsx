import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { AddToCartButton } from "@/components/add-to-cart-button"
import { ProductGrid } from "@/components/product-grid"
import { ComingSoon } from "@/components/coming-soon"
import { features } from "@/lib/config"

const allProducts = [
  { id: 1, name: "1998 France Home", team: "France", year: "1998", price: 189, image: "/images/products/france-98.jpg", category: "vintage", description: "The iconic home jersey worn during France's triumphant 1998 World Cup campaign on home soil. Features the classic blue with subtle geometric pattern and the famous rooster crest.", sizes: ["M", "L", "XL"], condition: "Excellent - Minor wear consistent with age" },
  { id: 2, name: "1994 Brazil Away", team: "Brazil", year: "1994", price: 165, image: "/images/products/brazil-94.jpg", category: "vintage", description: "Brazil's stunning away kit from their 1994 World Cup winning campaign in the USA. A rare piece of Brazilian football history.", sizes: ["S", "M", "L"], condition: "Very Good - Some light fading" },
  { id: 3, name: "2006 Italy Home", team: "Italy", year: "2006", price: 199, image: "/images/products/italy-06.jpg", category: "vintage", description: "The beautiful Azzurri home jersey from their 2006 World Cup triumph in Germany. Deep blue with gold accents.", sizes: ["M", "L"], condition: "Excellent - Like new" },
  { id: 4, name: "1999 Man United Home", team: "Manchester United", year: "1999", price: 225, image: "/images/products/manutd-99.jpg", category: "vintage", description: "The legendary treble-winning jersey. This historic kit saw Manchester United complete an unprecedented domestic and European treble.", sizes: ["L", "XL"], condition: "Excellent - Well preserved" },
  { id: 5, name: "2002 Real Madrid Centenary", team: "Real Madrid", year: "2002", price: 210, image: "/images/products/realmadrid-02.jpg", category: "vintage", description: "Real Madrid's special centenary jersey celebrating 100 years of Los Blancos. Pure white elegance with gold detailing.", sizes: ["M", "L", "XL"], condition: "Very Good" },
  { id: 6, name: "1990 Germany Home", team: "Germany", year: "1990", price: 195, image: "/images/products/germany-90.jpg", category: "vintage", description: "Germany's World Cup winning jersey from Italia '90. The iconic design with the German flag colors.", sizes: ["M", "L"], condition: "Good - Some wear" },
  { id: 7, name: "2005 AC Milan Home", team: "AC Milan", year: "2005", price: 185, image: "/images/products/milan-05.jpg", category: "vintage", description: "The classic Rossoneri stripes from the 2005 Champions League final season. Timeless Italian style.", sizes: ["S", "M", "L"], condition: "Excellent" },
  { id: 8, name: "1986 Argentina Home", team: "Argentina", year: "1986", price: 299, image: "/images/products/argentina-86.jpg", category: "vintage", description: "The legendary jersey from Argentina's 1986 World Cup triumph. A piece of football history worn during the 'Hand of God' and 'Goal of the Century' matches.", sizes: ["M"], condition: "Good - Vintage wear consistent with age" },
  { id: 101, name: "Comeback Kits Classic Tee", team: "Comeback Kits", year: "2024", price: 45, image: "/images/products/ck-tee.jpg", category: "merch", description: "Premium cotton t-shirt featuring our classic Comeback Kits logo. Comfortable fit, perfect for any kit collector.", sizes: ["S", "M", "L", "XL", "XXL"], condition: "New" },
  { id: 102, name: "Retro Football Hoodie", team: "Comeback Kits", year: "2024", price: 85, image: "/images/products/ck-hoodie.jpg", category: "merch", description: "Heavyweight cotton blend hoodie with embroidered vintage-style logo. Stay warm while showing your love for classic kits.", sizes: ["S", "M", "L", "XL", "XXL"], condition: "New" },
  { id: 103, name: "Comeback Kits Cap", team: "Comeback Kits", year: "2024", price: 35, image: "/images/products/ck-cap.jpg", category: "merch", description: "Adjustable snapback cap with embroidered logo. One size fits all.", sizes: ["One Size"], condition: "New" },
  { id: 104, name: "Vintage Logo Crewneck", team: "Comeback Kits", year: "2024", price: 75, image: "/images/products/ck-crewneck.jpg", category: "merch", description: "Classic crewneck sweatshirt with our vintage-inspired logo. Premium quality for everyday wear.", sizes: ["S", "M", "L", "XL"], condition: "New" },
  { id: 105, name: "Kit Collector Tote", team: "Comeback Kits", year: "2024", price: 28, image: "/images/products/ck-tote.jpg", category: "merch", description: "Sturdy canvas tote bag, perfect for carrying your kit collection finds. Screenprinted logo.", sizes: ["One Size"], condition: "New" },
  { id: 106, name: "Heritage Beanie", team: "Comeback Kits", year: "2024", price: 32, image: "/images/products/ck-beanie.jpg", category: "merch", description: "Warm knit beanie with small embroidered logo. Perfect for matchday in cold weather.", sizes: ["One Size"], condition: "New" },
]

interface ProductPageProps {
  params: Promise<{
    category: string
    id: string
  }>
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { category, id } = await params

  const isEnabled = (category === "merch" && features.merch) || (category !== "merch" && features.shop)

  if (!isEnabled) {
    return (
      <div className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link 
            href={`/shop/${category}`}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to {category === "merch" ? "Merchandise" : "Jerseys"}
          </Link>
          <ComingSoon message="This product is not available yet. Check back soon." />
        </div>
      </div>
    )
  }

  const product = allProducts.find(p => p.id === parseInt(id))

  if (!product) {
    return (
      <div className="py-20 text-center">
        <h1 className="font-serif text-2xl text-foreground mb-4">Product Not Found</h1>
        <Link href={`/shop/${category}`} className="text-accent hover:underline">
          Back to shop
        </Link>
      </div>
    )
  }

  const relatedProducts = allProducts
    .filter(p => p.category === category && p.id !== product.id)
    .slice(0, 4)

  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link 
          href={`/shop/${category}`}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to {category === "vintage" ? "Vintage" : "Merchandise"}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="aspect-square relative bg-card rounded overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div>
            <p className="text-xs tracking-engravers text-muted-foreground mb-2">{product.year}</p>
            <h1 className="font-serif text-2xl sm:text-3xl tracking-wide-custom text-foreground mb-4">
              {product.name}
            </h1>
            <p className="text-2xl text-accent font-medium mb-6">${product.price}</p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              {product.description}
            </p>

            {product.category === "vintage" && (
              <div className="mb-6">
                <p className="text-xs tracking-wide text-foreground mb-2">CONDITION</p>
                <p className="text-sm text-muted-foreground">{product.condition}</p>
              </div>
            )}

            <div className="mb-8">
              <p className="text-xs tracking-wide text-foreground mb-3">
                {product.sizes.length === 1 && product.sizes[0] === "One Size" ? "SIZE" : "AVAILABLE SIZES"}
              </p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className="px-4 py-2 border border-border text-sm text-foreground hover:border-accent hover:text-accent transition-colors rounded"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <AddToCartButton product={product} />

            <div className="mt-8 pt-8 border-t border-border space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Shipping</span>
                <span className="text-foreground">Worldwide available</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Returns</span>
                <Link href="/returns" className="text-accent hover:underline">
                  View policy
                </Link>
              </div>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <h2 className="font-serif text-xl tracking-wide-custom text-foreground mb-8">
              YOU MAY ALSO LIKE
            </h2>
            <ProductGrid products={relatedProducts} />
          </div>
        )}
      </div>
    </div>
  )
}
