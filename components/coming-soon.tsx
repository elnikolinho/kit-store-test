import { Clock } from "lucide-react"

interface ComingSoonProps {
  title?: string
  message?: string
}

export function ComingSoon({ 
  title = "COMING SOON", 
  message = "We're working on something great. Check back soon." 
}: ComingSoonProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <Clock className="h-12 w-12 text-muted-foreground/40 mb-6" />
      <h2 className="font-serif text-xl tracking-wide-custom text-foreground mb-3">
        {title}
      </h2>
      <p className="max-w-md text-muted-foreground text-sm">
        {message}
      </p>
    </div>
  )
}

export function ComingSoonBadge() {
  return (
    <span className="text-[10px] tracking-engravers text-accent font-semibold bg-accent/10 px-2 py-1 rounded">
      COMING SOON
    </span>
  )
}
