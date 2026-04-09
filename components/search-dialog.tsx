"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import Link from "next/link"

interface SearchDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

// Product data for search - will be populated when products are added
const mockProducts: { id: number; name: string; category: string; price: number }[] = []

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const [query, setQuery] = useState("")

  const filteredProducts = query.length > 0
    ? mockProducts.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
      )
    : []

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg bg-card border-border">
        <DialogHeader>
          <DialogTitle className="font-serif tracking-wide-custom text-foreground">SEARCH</DialogTitle>
        </DialogHeader>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search jerseys..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10 bg-input border-border text-foreground placeholder:text-muted-foreground"
          />
        </div>

        {filteredProducts.length > 0 && (
          <div className="mt-4 max-h-64 overflow-y-auto">
            <div className="space-y-2">
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/shop/${product.category}/${product.id}`}
                  onClick={() => onOpenChange(false)}
                  className="flex items-center justify-between p-3 rounded bg-secondary hover:bg-muted transition-colors"
                >
                  <div>
                    <p className="text-sm text-foreground">{product.name}</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">
                      {product.category}
                    </p>
                  </div>
                  <span className="text-sm text-accent">${product.price}</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {query.length > 0 && filteredProducts.length === 0 && (
          <p className="mt-4 text-sm text-muted-foreground text-center">
            No results found for &quot;{query}&quot;
          </p>
        )}

        {query.length === 0 && (
          <div className="mt-4 text-center">
            <p className="text-sm text-muted-foreground">
              Products coming soon
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
