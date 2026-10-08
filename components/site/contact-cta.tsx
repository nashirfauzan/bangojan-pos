import { Mail, MapPin, Phone } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const contacts = [
  { icon: Phone, label: 'Call sales', value: '+62 895-3850-85358', href: 'tel:+62895385085358' },
  { icon: Mail, label: 'Email us', value: 'contact@bangojan.com', href: 'mailto:contact@bangojan.com' },
  { icon: MapPin, label: 'Service area', value: 'Nationwide, with local techs in 120+ cities' },
]

export function ContactCta() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="px-4 pb-20 md:px-6 md:pb-28">
      <div className="mx-auto grid max-w-6xl gap-10 overflow-hidden rounded-3xl bg-foreground p-8 text-background md:p-14 lg:grid-cols-[1.3fr_1fr] lg:items-end">
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-accent">Get started</p>
          <h2 id="contact-title" className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-5xl">
            Ready for a checkout that just works?
          </h2>
          <p className="mt-4 max-w-lg text-pretty text-lg leading-relaxed text-background/70">
            Start your 14-day BANGOJAN-PoS free trial today. Test every feature with your own team,
            then subscribe only when you&apos;re sure — no credit card, no obligation.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:contact@bangojan.com?subject=BANGOJAN-PoS%20free%20trial%20request"
              className={cn(
                buttonVariants({ size: 'lg' }),
                'h-11 bg-accent px-5 text-base text-accent-foreground [a]:hover:bg-accent/85',
              )}
            >
              Start free trial
            </a>
            <a
              href="tel:+62895385085358"
              className={cn(
                buttonVariants({ variant: 'outline', size: 'lg' }),
                'h-11 border-background/25 bg-transparent px-5 text-base text-background hover:bg-background/10 hover:text-background',
              )}
            >
              Call +62 895-3850-85358
            </a>
          </div>
        </div>
        <ul className="flex flex-col gap-5 border-t border-background/15 pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
          {contacts.map((c) => {
            const content = (
              <>
                <c.icon className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
                <span>
                  <span className="block text-sm text-background/60">{c.label}</span>
                  <span className="block font-medium">{c.value}</span>
                </span>
              </>
            )
            return (
              <li key={c.label}>
                {c.href ? (
                  <a href={c.href} className="flex items-start gap-3 hover:underline">
                    {content}
                  </a>
                ) : (
                  <div className="flex items-start gap-3">{content}</div>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
