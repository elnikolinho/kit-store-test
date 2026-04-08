import { ProductGrid } from "@/components/product-grid"
import { ShopFilters } from "@/components/shop-filters"

const jerseyProducts = [
  { id: 1, name: "Coming Soon", team: "TBA", year: "", price: 0, image: null, category: "jerseys" },
]

export default function JerseysPage() {
  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Page header */}
        <div className="mb-12">
          <p className="text-xs tracking-engravers text-accent font-semibold mb-2">COLLECTION</p>
          <h1 className="font-serif text-3xl sm:text-4xl tracking-wide-custom text-foreground font-bold mb-4">
            JERSEYS
          </h1>
          <p className="max-w-2xl text-muted-foreground">
            Authentic vintage jerseys from football&apos;s most iconic moments. Each piece carefully sourced and verified for authenticity.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters sidebar */}
          <aside className="w-full lg:w-64 shrink-0">
            <ShopFilters />
          </aside>

          {/* Products grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-muted-foreground">
                Products coming soon
              </p>
            </div>
            <ProductGrid products={jerseyProducts} />
          </div>
        </div>
      </div>
    </div>
  )
}
