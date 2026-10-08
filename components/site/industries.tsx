import { Coffee, Scissors, ShoppingBag, Store, Truck, UtensilsCrossed, type LucideIcon } from 'lucide-react'
import { SectionHeading } from './section-heading'

const industries: { icon: LucideIcon; name: string; features: string }[] = [
  { icon: UtensilsCrossed, name: 'Full-service restaurants', features: 'Table maps, coursing, split checks, kitchen displays' },
  { icon: Coffee, name: 'Cafés & quick service', features: 'Fast keypad ordering, loyalty, online ordering' },
  { icon: ShoppingBag, name: 'Retail boutiques', features: 'Barcode scanning, variants, multi-location stock' },
  { icon: Store, name: 'Grocery & convenience', features: 'Scales, age verification, EBT-ready payments' },
  { icon: Scissors, name: 'Salons & services', features: 'Appointments, staff commissions, tipping' },
  { icon: Truck, name: 'Food trucks & pop-ups', features: 'Offline mode, mobile readers, LTE backup' },
]

export function Industries() {
  return (
    <section id="industries" aria-labelledby="industries-title" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          id="industries-title"
          eyebrow="Who we serve"
          title="Configured for the way your business actually runs."
        />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <li
              key={industry.name}
              className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent/60 text-accent-foreground transition-colors group-hover:bg-accent">
                <industry.icon className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-semibold tracking-tight">{industry.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{industry.features}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
