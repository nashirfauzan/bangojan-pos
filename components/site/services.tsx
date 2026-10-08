import {
  BarChart3,
  CreditCard,
  Headset,
  Monitor,
  PackageSearch,
  Wrench,
  type LucideIcon,
} from 'lucide-react'
import { SectionHeading } from './section-heading'

const services: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Monitor,
    title: 'POS hardware',
    description:
      'Touchscreen terminals, card readers, receipt printers, cash drawers, and kitchen displays — leased or purchased.',
  },
  {
    icon: Wrench,
    title: 'On-site installation',
    description:
      'A certified technician wires, mounts, and tests every device so you open the doors on day one without surprises.',
  },
  {
    icon: CreditCard,
    title: 'Payment processing',
    description:
      'QRIS, e-wallets, Virtual Accounts, and cards on one terminal, with transparent fees and daily settlement.',
  },
  {
    icon: PackageSearch,
    title: 'Menu & inventory setup',
    description:
      'We import your menu or catalog, modifiers, taxes, and stock levels, then set up low-stock alerts.',
  },
  {
    icon: BarChart3,
    title: 'Reporting & insights',
    description:
      'Daily sales, labor, and best-seller reports delivered to your inbox, plus a live dashboard on any device.',
  },
  {
    icon: Headset,
    title: '24/7 support & repairs',
    description:
      'Real people answer in under 90 seconds. If hardware fails, we ship a replacement overnight at no charge.',
  },
]

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          id="services-title"
          eyebrow="What we do"
          title="Everything behind the counter, handled by one team."
          description="Skip the patchwork of hardware vendors, processors, and help desks. BANGOJAN-PoS delivers a complete point of sale service from setup to everyday support."
        />
        <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li key={service.title} className="flex flex-col gap-4 bg-card p-7">
              <span className="flex size-10 items-center justify-center rounded-lg bg-muted text-primary">
                <service.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="text-lg font-semibold tracking-tight">{service.title}</h3>
              <p className="leading-relaxed text-muted-foreground">{service.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
