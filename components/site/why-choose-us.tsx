import {
  BadgeCheck,
  Clock,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Wallet,
  type LucideIcon,
} from 'lucide-react'
import { SectionHeading } from './section-heading'

const aiCapabilities: { title: string; description: string }[] = [
  {
    title: 'Sales forecasting',
    description: 'Predicts tomorrow’s busy hours and best-sellers so you prep and staff the right amount.',
  },
  {
    title: 'Smart upsell prompts',
    description: 'Suggests add-ons at checkout based on what customers usually buy together.',
  },
  {
    title: 'Auto restock alerts',
    description: 'Learns how fast each item sells and tells you what to reorder before it runs out.',
  },
  {
    title: 'Promo recommendations',
    description: 'Spots slow hours and slow items, then recommends discounts that bring traffic back.',
  },
]

const sampleInsights: { label: string; value: string }[] = [
  { label: 'Pair Iced Latte with Croissant', value: '+18% basket' },
  { label: 'Restock Arabica beans by Friday', value: '2 days left' },
  { label: 'Run 2–4 PM happy hour promo', value: '+Rp 1.2 jt/wk' },
]

const reasons: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Wallet,
    title: 'Built for Indonesia',
    description: 'QRIS, e-wallets, and Virtual Accounts work out of the box, with rupiah pricing and local tax settings.',
  },
  {
    icon: Clock,
    title: 'Live in 48 hours',
    description: 'From signup to first sale in two days, including hardware delivery and on-site setup.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure by default',
    description: 'Encrypted transactions, role-based staff access, and automatic cloud backups for every outlet.',
  },
  {
    icon: BadgeCheck,
    title: 'Try before you pay',
    description: 'Every plan starts with a free trial, so you can test it in your own store with zero risk.',
  },
]

export function WhyChooseUs() {
  return (
    <section id="why-us" aria-labelledby="why-us-title" className="bg-muted/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          id="why-us-title"
          eyebrow="Why choose us"
          title="A point of sale that helps you sell more, not just ring up."
          description="BANGOJAN-PoS is AI assisted. It studies your sales every day and turns the numbers into clear, practical actions that grow revenue."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          <article className="flex flex-col gap-8 rounded-2xl bg-primary p-7 text-primary-foreground md:p-10 lg:col-span-3">
            <div className="flex flex-col gap-4">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-primary-foreground/15 px-3 py-1 text-sm font-medium">
                <Sparkles className="size-4" aria-hidden="true" />
                AI Assisted
              </span>
              <h3 className="text-balance text-2xl font-semibold tracking-tight md:text-3xl">
                Your built-in sales advisor, working every shift.
              </h3>
              <p className="max-w-xl leading-relaxed text-primary-foreground/80">
                No spreadsheets or analysts needed. Our AI reads your transactions, inventory, and peak hours,
                then tells you exactly what to do next to increase sales.
              </p>
            </div>

            <ul className="grid gap-5 sm:grid-cols-2">
              {aiCapabilities.map((item) => (
                <li key={item.title} className="flex gap-3">
                  <TrendingUp className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-sm leading-relaxed text-primary-foreground/75">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="rounded-xl bg-background p-5 text-foreground">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Lightbulb className="size-4 text-primary" aria-hidden="true" />
                {"Today's AI insights"}
              </div>
              <ul className="mt-4 flex flex-col divide-y divide-border">
                {sampleInsights.map((insight) => (
                  <li key={insight.label} className="flex items-center justify-between gap-4 py-3 text-sm">
                    <span className="text-muted-foreground">{insight.label}</span>
                    <span className="shrink-0 font-semibold text-primary">{insight.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <ul className="grid gap-6 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1">
            {reasons.map((reason) => (
              <li key={reason.title} className="flex gap-4 rounded-2xl border border-border bg-card p-6">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted text-primary">
                  <reason.icon className="size-5" aria-hidden="true" />
                </span>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-semibold tracking-tight">{reason.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{reason.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
