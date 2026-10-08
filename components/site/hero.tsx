import Image from 'next/image'
import { ArrowRight, Check } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const highlights = ['14-day free trial', 'No credit card required', '24/7 local support']

const receiptLines = [
  { label: 'Orders', value: '184' },
  { label: 'Avg. ticket', value: 'Rp68.500' },
  { label: 'Card', value: '91%' },
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pt-14 pb-20 md:px-6 md:pt-20 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
            Point of sale, fully handled
          </p>
          <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            We set up, run, and support your checkout.{' '}
            <span className="relative whitespace-nowrap">
              <span className="relative z-10">You just sell.</span>
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-1 -z-0 h-3 rounded-sm bg-accent md:h-4"
              />
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            BANGOJAN-PoS is a full-service point of sale partner for restaurants, cafés, and shops. We
            bring the hardware, configure your menu or catalog, connect payments, and stay on call
            long after launch day. Try it free before you subscribe.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#free-trial" className={cn(buttonVariants({ size: 'lg' }), 'h-11 px-5 text-base')}>
              Start 14-day free trial
              <ArrowRight data-icon="inline-end" />
            </a>
            <a
              href="#pricing"
              className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'h-11 px-5 text-base')}
            >
              See pricing
            </a>
          </div>
          <ul className="mt-8 flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:gap-x-6">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <Check className="size-4 text-primary" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-border bg-muted">
            <Image
              src="/images/hero-terminal.png"
              alt="BANGOJAN-PoS point of sale terminal with card reader and receipt printer on a café counter"
              width={1024}
              height={1024}
              priority
              className="aspect-[4/5] h-auto w-full object-cover sm:aspect-square"
            />
          </div>
          <div className="absolute -bottom-6 left-4 w-56 rounded-xl border border-border bg-card p-4 font-mono text-xs shadow-xl shadow-foreground/10 sm:-left-6">
            <div className="flex items-center justify-between text-muted-foreground">
              <span>TODAY</span>
              <span className="flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
                LIVE
              </span>
            </div>
            <p className="mt-2 text-2xl font-semibold tracking-tight text-foreground">Rp12.845.600</p>
            <div className="my-3 border-t border-dashed border-border" />
            <dl className="flex flex-col gap-1.5">
              {receiptLines.map((line) => (
                <div key={line.label} className="flex justify-between">
                  <dt className="text-muted-foreground">{line.label}</dt>
                  <dd className="text-foreground">{line.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
