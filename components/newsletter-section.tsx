"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail("")
    }
  }

  return (
    <section className="py-20 bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-xs tracking-engravers text-accent font-semibold mb-2">STAY UPDATED</p>
          <h2 className="font-serif text-3xl sm:text-4xl tracking-wide-custom text-foreground font-bold mb-4">
            JOIN THE KIT LIST
          </h2>
          <p className="text-muted-foreground mb-8">
            Be the first to know about new vintage arrivals, exclusive drops, and restoration tips.
          </p>

          {submitted ? (
            <div className="p-4 bg-secondary rounded">
              <p className="text-sm text-foreground">
                Thanks for subscribing! Check your inbox soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-input border-border text-foreground placeholder:text-muted-foreground"
              />
              <Button 
                type="submit"
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-sm font-semibold tracking-wide-custom"
              >
                SUBSCRIBE
              </Button>
            </form>
          )}

          <p className="mt-4 text-xs text-muted-foreground">
            No spam, unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  )
}
