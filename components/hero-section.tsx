import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { features } from "@/lib/config"

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute top-32 right-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent/3 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-1ewP3jD3oyXi9relBeKaPCTSUDPr2A.png"
            alt="Comeback Kits"
            width={320}
            height={320}
            className="mx-auto w-56 sm:w-64 md:w-80 h-auto"
            unoptimized
            priority
          />
        </div>

        <p className="font-serif text-lg sm:text-xl md:text-2xl tracking-wide-custom text-foreground mb-10">
          LEGENDS NEVER FADE
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/shop/jerseys">
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-sans text-sm font-semibold tracking-wide-custom px-8"
            >
              SHOP JERSEYS
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/repair">
            <Button 
              variant="outline" 
              size="lg"
              className="border-foreground text-foreground hover:bg-foreground hover:text-background font-sans text-sm font-semibold tracking-wide-custom px-8"
            >
              REPAIR SERVICE
              {!features.repair && (
                <span className="ml-2 text-[10px] opacity-60">COMING SOON</span>
              )}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
