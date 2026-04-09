import Link from "next/link"
import Image from "next/image"
import { Instagram } from "lucide-react"
import { features } from "@/lib/config"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-1ewP3jD3oyXi9relBeKaPCTSUDPr2A.png"
                alt="Comeback Kits"
                width={120}
                height={120}
                className="h-16 w-auto mb-2"
                unoptimized
              />
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Premium vintage jerseys and expert repair services. Bringing classic kits back to life.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-xs tracking-engravers text-foreground mb-4">SHOP</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/shop/jerseys" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Jerseys {!features.shop && <span className="text-xs opacity-60">(Coming Soon)</span>}
                </Link>
              </li>
              <li>
                <Link href="/shop/merch" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Merchandise {!features.merch && <span className="text-xs opacity-60">(Coming Soon)</span>}
                </Link>
              </li>
              <li>
                <Link href="/repair" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Repair & Reprint {!features.repair && <span className="text-xs opacity-60">(Coming Soon)</span>}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-xs tracking-engravers text-foreground mb-4">SUPPORT</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Shipping Info
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-xs tracking-engravers text-foreground mb-4">LEGAL</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Returns Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} Comeback Kits. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/comeback.kits"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
