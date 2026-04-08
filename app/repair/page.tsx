import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RepairForm } from "@/components/repair-form"
import { Wrench, Printer, Sparkles, Clock, CheckCircle, Shield } from "lucide-react"

const services = [
  {
    icon: Wrench,
    title: "JERSEY REPAIR",
    description: "Fix tears, holes, loose stitching, and worn fabric",
    price: "From $35"
  },
  {
    icon: Printer,
    title: "NAME & NUMBER REPRINT",
    description: "Restore faded or damaged printing with authentic materials",
    price: "From $45"
  },
  {
    icon: Sparkles,
    title: "FULL RESTORATION",
    description: "Complete service including cleaning, repair, and reprinting",
    price: "From $95"
  }
]

const benefits = [
  {
    icon: Clock,
    title: "FAST TURNAROUND",
    description: "Most repairs completed within 7-14 business days"
  },
  {
    icon: CheckCircle,
    title: "QUALITY GUARANTEE",
    description: "100% satisfaction guaranteed or your money back"
  },
  {
    icon: Shield,
    title: "INSURED SHIPPING",
    description: "Your jersey is fully insured during transit"
  }
]

export default function RepairPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        {/* Hero section */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs tracking-engravers text-muted-foreground mb-2">RESTORATION SERVICES</p>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-wide-custom text-foreground mb-6">
                REPAIR & REPRINT
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Got a treasured jersey that&apos;s seen better days? Our expert restoration team specializes in bringing vintage and classic kits back to their former glory.
              </p>
            </div>
          </div>
        </section>

        {/* Services section */}
        <section className="py-16 bg-secondary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <p className="text-xs tracking-engravers text-muted-foreground mb-2">WHAT WE OFFER</p>
              <h2 className="font-serif text-2xl sm:text-3xl tracking-wide-custom text-foreground">
                OUR SERVICES
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((service) => (
                <div 
                  key={service.title}
                  className="p-8 bg-card rounded border border-border"
                >
                  <service.icon className="h-8 w-8 text-accent mb-6" />
                  <h3 className="font-serif text-sm tracking-engravers text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <p className="text-accent font-medium">{service.price}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits section */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="text-center">
                  <benefit.icon className="h-8 w-8 text-accent mx-auto mb-4" />
                  <h3 className="font-serif text-xs tracking-engravers text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Request form section */}
        <section className="py-16 bg-card border-t border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-xs tracking-engravers text-muted-foreground mb-2">GET STARTED</p>
                <h2 className="font-serif text-2xl sm:text-3xl tracking-wide-custom text-foreground mb-4">
                  REQUEST A REPAIR
                </h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we&apos;ll get back to you with a quote within 24 hours.
                </p>
              </div>

              <RepairForm />
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 bg-secondary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-xs tracking-engravers text-muted-foreground mb-2">PROCESS</p>
              <h2 className="font-serif text-2xl sm:text-3xl tracking-wide-custom text-foreground">
                HOW IT WORKS
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "SUBMIT REQUEST", description: "Fill out the form with photos and details of your jersey" },
                { step: "02", title: "GET A QUOTE", description: "We'll assess the work needed and send you a detailed quote" },
                { step: "03", title: "SHIP YOUR JERSEY", description: "Send us your jersey using our prepaid insured label" },
                { step: "04", title: "RECEIVE RESTORED", description: "Get your jersey back looking better than ever" }
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <span className="font-serif text-3xl text-accent">{item.step}</span>
                  <h3 className="font-serif text-xs tracking-engravers text-foreground mt-4 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
