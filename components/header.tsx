"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Search, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SearchDialog } from "@/components/search-dialog"
import { features } from "@/lib/config"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  const navLinks = [
    { href: "/shop/jerseys", label: "JERSEYS", comingSoon: !features.shop },
    { href: "/shop/merch", label: "MERCH", comingSoon: !features.merch },
    { href: "/repair", label: "REPAIR", comingSoon: !features.repair },
  ]

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-accent/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 items-center">
            <Link href="/" className="flex items-center w-40">
              <span className="font-serif text-base tracking-wide-custom font-bold text-foreground">
                COMEBACK KITS
              </span>
            </Link>

            <nav className="hidden md:flex items-center justify-center gap-8 flex-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm tracking-wide-custom text-muted-foreground hover:text-accent transition-colors flex items-center gap-1.5"
                >
                  {link.label}
                  {link.comingSoon && (
                    <span className="text-[9px] tracking-engravers text-accent/70 font-semibold">SOON</span>
                  )}
                </Link>
              ))}
            </nav>

            <div className="flex items-center justify-end gap-3 w-40">
              <Button
                variant="ghost"
                size="icon"
                className="text-foreground"
                onClick={() => setSearchOpen(true)}
              >
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
              
              <Link href="/cart">
                <Button variant="ghost" size="icon" className="text-foreground relative">
                  <ShoppingBag className="h-5 w-5" />
                  <span className="sr-only">Cart</span>
                </Button>
              </Link>

              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-foreground"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                <span className="sr-only">Menu</span>
              </Button>
            </div>
          </div>

          {mobileMenuOpen && (
            <nav className="md:hidden py-4 border-t border-border">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm tracking-wide-custom text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                    {link.comingSoon && (
                      <span className="text-[9px] tracking-engravers text-accent/70 font-semibold">SOON</span>
                    )}
                  </Link>
                ))}
              </div>
            </nav>
          )}
        </div>
      </header>

      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  )
}
