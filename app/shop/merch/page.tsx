import { ProductGrid } from "@/components/product-grid"
import { ShopFilters } from "@/components/shop-filters"

const merchProducts = [
  { id: 101, name: "Comeback Kits Classic Tee", team: "Comeback Kits", year: "2024", price: 45, image: "/images/products/ck-tee.jpg", category: "merch" },
  { id: 102, name: "Retro Football Hoodie", team: "Comeback Kits", year: "2024", price: 85, image: "/images/products/ck-hoodie.jpg", category: "merch" },
  { id: 103, name: "Comeback Kits Cap", team: "Comeback Kits", year: "2024", price: 35, image: "/images/products/ck-cap.jpg", category: "merch" },
  { id: 104, name: "Vintage Logo Crewneck", team: "Comeback Kits", year: "2024", price: 75, image: "/images/products/ck-crewneck.jpg", category: "merch" },
  { id: 105, name: "Kit Collector Tote", team: "Comeback Kits", year: "2024", price: 28, image: "/images/products/ck-tote.jpg", category: "merch" },
  { id: 106, name: "Heritage Beanie", team: "Comeback Kits", year: "2024", price: 32, image: "/images/products/ck-beanie.jpg", category: "merch" },
]

export default function MerchPage() {
  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Page header */}
        <div className="mb-12">
          <p className="text-xs tracking-engravers text-muted-foreground mb-2">COLLECTION</p>
          <h1 className="font-serif text-3xl sm:text-4xl tracking-wide-custom text-foreground mb-4">
            MERCHANDISE
          </h1>
          <p className="max-w-2xl text-muted-foreground">
            Rep the brand with our exclusive Comeback Kits merchandise. Premium quality apparel and accessories for kit collectors.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters sidebar */}
          <aside className="w-full lg:w-64 shrink-0">
            <ShopFilters type="merch" />
          </aside>

          {/* Products grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-muted-foreground">
                {merchProducts.length} products
              </p>
            </div>
            <ProductGrid products={merchProducts} />
          </div>
        </div>
      </div>
    </div>
  )
}
