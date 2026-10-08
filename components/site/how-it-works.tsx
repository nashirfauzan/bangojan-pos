import Image from 'next/image'
import { SectionHeading } from './section-heading'

const steps = [
  {
    title: 'Free consultation',
    description:
      'Tell us how you sell. We map your workflow, recommend hardware, and send a fixed quote within one business day.',
  },
  {
    title: 'Configuration',
    description:
      'Our team builds your menu or catalog, staff roles, taxes, tipping, and integrations before anything ships.',
  },
  {
    title: 'Install & train',
    description:
      'A technician installs on-site and trains your staff in a hands-on session — usually under two hours.',
  },
  {
    title: 'Ongoing support',
    description:
      'Software updates, hardware swaps, and quarterly check-ins keep your system fast as your business grows.',
  },
]

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-title"
      className="bg-primary py-20 text-primary-foreground md:py-28"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 md:px-6 lg:grid-cols-2">
        <div>
          <SectionHeading
            id="how-title"
            eyebrow="How it works"
            title="From first call to first sale in about 48 hours."
            className="[&_p:first-child]:text-accent [&_p:last-child]:text-primary-foreground/75"
            description="No DIY setup guides. A dedicated onboarding specialist owns your launch end to end."
          />
          <ol className="mt-10 flex flex-col">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="grid grid-cols-[auto_1fr] gap-5 border-t border-primary-foreground/15 py-6 last:pb-0"
              >
                <span className="font-mono text-sm text-accent">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="mt-1.5 leading-relaxed text-primary-foreground/75">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="overflow-hidden rounded-3xl border border-primary-foreground/15">
          <Image
            src="/images/install-tech.png"
            alt="BANGOJAN-PoS technician installing a card reader at a boutique checkout counter"
            width={1024}
            height={1024}
            className="aspect-[4/5] h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
