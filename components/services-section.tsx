import Link from "next/link"
import { ArrowRight, Wrench, Printer, Sparkles } from "lucide-react"

const services = [
  {
    icon: Wrench,
    title: "JERSEY REPAIR",
    description: "Expert restoration of tears, holes, and worn fabric. We bring your treasured jerseys back to wearable condition.",
    href: "/repair"
  },
  {
    icon: Printer,
    title: "NAME & NUMBER REPRINT",
    description: "Faded letters and numbers restored with authentic materials and techniques. Like-new printing guaranteed.",
    href: "/repair"
  },
  {
    icon: Sparkles,
    title: "FULL RESTORATION",
    description: "Complete jersey makeover including cleaning, repair, and reprinting. The ultimate comeback for your kit.",
    href: "/repair"
  }
]

export function ServicesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-engravers text-accent font-semibold mb-2">RESTORATION SERVICES</p>
          <h2 className="font-serif text-3xl sm:text-4xl tracking-wide-custom text-foreground font-bold mb-4">
            BRING IT BACK
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground">
            Got a classic jersey that&apos;s seen better days? Our expert team specializes in breathing new life into vintage kits.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link 
              key={service.title}
              href={service.href}
              className="group p-8 bg-card rounded border border-border hover:border-accent/50 transition-colors"
            >
              <service.icon className="h-8 w-8 text-accent mb-6" />
              <h3 className="font-serif text-sm tracking-engravers text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>
              <span className="inline-flex items-center gap-2 text-xs text-muted-foreground group-hover:text-accent transition-colors">
                LEARN MORE
                <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link href="/repair">
            <span className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground text-sm tracking-wide-custom hover:bg-accent/90 transition-colors rounded">
              REQUEST A REPAIR
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
