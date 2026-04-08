"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Minus, Plus, X, ArrowRight, ShoppingBag } from "lucide-react"

// Mock cart items
const initialCartItems = [
  { 
    id: 1, 
    name: "1998 France Home", 
    size: "L",
    price: 189, 
    image: "/images/products/france-98.jpg",
    quantity: 1
  },
  { 
    id: 101, 
    name: "Comeback Kits Classic Tee", 
    size: "M",
    price: 45, 
    image: "/images/products/ck-tee.jpg",
    quantity: 2
  },
]

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems)

  const updateQuantity = (id: number, change: number) => {
    setCartItems(items => 
      items.map(item => 
        item.id === id 
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    )
  }

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const shipping = subtotal > 150 ? 0 : 15
  const total = subtotal + shipping

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <div className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-3xl sm:text-4xl tracking-wide-custom text-foreground mb-8">
              YOUR CART
            </h1>

            {cartItems.length === 0 ? (
              <div className="text-center py-20">
                <ShoppingBag className="h-16 w-16 text-muted-foreground mx-auto mb-6" />
                <h2 className="font-serif text-xl tracking-wide-custom text-foreground mb-4">
                  YOUR CART IS EMPTY
                </h2>
                <p className="text-muted-foreground mb-8">
                  Looks like you haven&apos;t added anything yet.
                </p>
                <Link href="/shop/vintage">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm tracking-wide-custom">
                    SHOP VINTAGE
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Cart items */}
                <div className="lg:col-span-2">
                  <div className="space-y-6">
                    {cartItems.map((item) => (
                      <div 
                        key={item.id}
                        className="flex gap-4 p-4 bg-card rounded border border-border"
                      >
                        {/* Image */}
                        <div className="w-24 h-24 relative bg-secondary rounded overflow-hidden shrink-0">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>

                        {/* Details */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <h3 className="text-sm text-foreground font-medium">{item.name}</h3>
                              <p className="text-xs text-muted-foreground mt-1">Size: {item.size}</p>
                            </div>
                            <button 
                              onClick={() => removeItem(item.id)}
                              className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </div>

                          <div className="flex items-center justify-between mt-4">
                            {/* Quantity */}
                            <div className="flex items-center gap-2">
                              <button 
                                onClick={() => updateQuantity(item.id, -1)}
                                className="p-1 border border-border rounded hover:bg-secondary transition-colors"
                              >
                                <Minus className="h-3 w-3" />
                              </button>
                              <span className="w-8 text-center text-sm text-foreground">
                                {item.quantity}
                              </span>
                              <button 
                                onClick={() => updateQuantity(item.id, 1)}
                                className="p-1 border border-border rounded hover:bg-secondary transition-colors"
                              >
                                <Plus className="h-3 w-3" />
                              </button>
                            </div>

                            {/* Price */}
                            <p className="text-sm text-accent font-medium">
                              ${item.price * item.quantity}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Order summary */}
                <div className="lg:col-span-1">
                  <div className="bg-card rounded border border-border p-6 sticky top-24">
                    <h2 className="font-serif text-lg tracking-wide-custom text-foreground mb-6">
                      ORDER SUMMARY
                    </h2>

                    <div className="space-y-4 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span className="text-foreground">${subtotal}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Shipping</span>
                        <span className="text-foreground">
                          {shipping === 0 ? "FREE" : `$${shipping}`}
                        </span>
                      </div>
                      {shipping > 0 && (
                        <p className="text-xs text-muted-foreground">
                          Free shipping on orders over $150
                        </p>
                      )}
                      <div className="pt-4 border-t border-border">
                        <div className="flex justify-between text-base">
                          <span className="text-foreground font-medium">Total</span>
                          <span className="text-accent font-medium">${total}</span>
                        </div>
                      </div>
                    </div>

                    <Button 
                      className="w-full mt-6 bg-primary text-primary-foreground hover:bg-primary/90 text-sm tracking-wide-custom h-12"
                    >
                      CHECKOUT
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>

                    <p className="text-xs text-muted-foreground text-center mt-4">
                      Secure checkout powered by Stripe
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
