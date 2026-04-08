"use client"

import { useState } from "react"
import { ShoppingBag, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Product {
  id: number
  name: string
  price: number
}

interface AddToCartButtonProps {
  product: Product
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const [added, setAdded] = useState(false)

  const handleAddToCart = () => {
    // In production, this would update cart state/context
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <Button
      onClick={handleAddToCart}
      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-sm tracking-wide-custom h-12"
      disabled={added}
    >
      {added ? (
        <>
          <Check className="mr-2 h-4 w-4" />
          ADDED TO CART
        </>
      ) : (
        <>
          <ShoppingBag className="mr-2 h-4 w-4" />
          ADD TO CART - ${product.price}
        </>
      )}
    </Button>
  )
}
