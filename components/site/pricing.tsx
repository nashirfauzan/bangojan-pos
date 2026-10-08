import { ArrowRight, Check, Gift } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { SectionHeading } from './section-heading'

const trialSteps = [
  { day: 'Day 1', title: 'Sign up', text: 'We set up your account and menu remotely.' },
  { day: 'Day 1–14', title: 'Test everything', text: 'Run real shifts, QRIS, and reports.' },
  { day: 'Day 14', title: 'Pick a plan', text: 'Subscribe, or cancel with nothing to pay.' },
]

const plans = [
  {
    name: 'Starter',
    price: 'Rp299rb',
    description: 'For single-register shops and cafés getting started.',
    rate: 'MDR QRIS 0.3% · Card 2.0%',
    features: ['1 terminal + card reader', 'Remote setup & training', 'Sales & inventory reports', 'Email and chat support'],
    featured: false,
  },
  {
    name: 'Growth',
    price: 'Rp799rb',
    description: 'For busy restaurants and stores with a full team.',
    rate: 'MDR QRIS 0.3% · Card 1.8%',
    features: [
      'Up to 3 terminals + printers',
      'On-site installation & training',
      'Staff roles, timeclock & tips',
      'Online ordering & loyalty',
      '24/7 phone support',
    ],
    featured: true,
  },
  {
    name: 'Multi-location',
    price: 'Custom',
    description: 'For groups and franchises running several sites.',
    rate: 'Volume-based MDR pricing',
    features: [
      'Unlimited terminals & locations',
      'Centralized menu & catalog',
      'Dedicated account manager',
      'Custom integrations & API',
      'Priority hardware replacement',
    ],
    featured: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" aria-labelledby="pricing-title" className="border-t border-border bg-card py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          id="pricing-title"
          align="center"
          eyebrow="Pricing"
          title="Try it free. Subscribe when you're sure."
          description="Every plan starts with a 14-day free trial and includes software, hardware warranty, updates, and support. Cancel anytime."
        />

        <div
          id="free-trial"
          className="mt-14 scroll-mt-24 rounded-2xl border border-primary/30 bg-background p-6 md:p-8"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-md">
              <p className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-accent-foreground">
                <Gift className="size-3.5" aria-hidden="true" />
                Free trial program
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                14 days of BANGOJAN-PoS, on us.
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                Test every feature with your real menu and staff before paying a single rupiah. No
                credit card required.
              </p>
            </div>
            <ol className="grid flex-1 gap-4 sm:grid-cols-3 lg:max-w-xl">
              {trialSteps.map((step) => (
                <li key={step.day} className="flex flex-col gap-1 rounded-xl border border-border bg-card p-4">
                  <span className="font-mono text-xs uppercase tracking-wider text-primary">{step.day}</span>
                  <span className="font-medium">{step.title}</span>
                  <span className="text-sm text-muted-foreground">{step.text}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="mt-6 flex flex-col gap-3 border-t border-dashed border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">
              Includes QRIS & e-wallet test payments, inventory, reports, and full support.
            </p>
            <a
              href="mailto:contact@bangojan.com?subject=BANGOJAN-PoS%20free%20trial%20request"
              className={cn(buttonVariants({ size: 'lg' }), 'h-11 px-5 text-base')}
            >
              Start your free trial
              <ArrowRight data-icon="inline-end" />
            </a>
          </div>
        </div>

        <ul className="mt-10 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <li
              key={plan.name}
              className={cn(
                'relative flex flex-col rounded-2xl border p-8',
                plan.featured
                  ? 'border-primary bg-primary text-primary-foreground shadow-xl shadow-primary/20'
                  : 'border-border bg-background',
              )}
            >
              {plan.featured ? (
                <span className="absolute -top-3 left-8 rounded-full bg-accent px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-accent-foreground">
                  Most popular
                </span>
              ) : null}
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <p className={cn('mt-2 text-sm', plan.featured ? 'text-primary-foreground/75' : 'text-muted-foreground')}>
                {plan.description}
              </p>
              <p className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight">{plan.price}</span>
                {plan.price !== 'Custom' ? (
                  <span className={plan.featured ? 'text-primary-foreground/75' : 'text-muted-foreground'}>
                    /mo per location
                  </span>
                ) : null}
              </p>
              <p
                className={cn(
                  'mt-2 font-mono text-xs',
                  plan.featured ? 'text-accent' : 'text-primary',
                )}
              >
                {plan.rate}
              </p>
              <ul className="mt-8 flex flex-1 flex-col gap-3 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check
                      className={cn('mt-0.5 size-4 shrink-0', plan.featured ? 'text-accent' : 'text-primary')}
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={cn(
                  buttonVariants({ variant: plan.featured ? 'secondary' : 'outline', size: 'lg' }),
                  'mt-8 h-11 w-full text-base',
                )}
              >
                {plan.price === 'Custom' ? 'Talk to sales' : `Try ${plan.name} free`}
              </a>
              {plan.price !== 'Custom' ? (
                <p
                  className={cn(
                    'mt-3 text-center text-xs',
                    plan.featured ? 'text-primary-foreground/75' : 'text-muted-foreground',
                  )}
                >
                  14 days free, then {plan.price}/mo
                </p>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
