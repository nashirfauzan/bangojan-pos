import { SectionHeading } from './section-heading'

const testimonials = [
  {
    quote:
      'We switched on a Monday and were taking orders by Wednesday lunch. The technician even reorganized our kitchen printer routing — tickets are faster than ever.',
    name: 'Maya Okafor',
    role: 'Owner, Little Ember Bistro',
  },
  {
    quote:
      'Our card reader died during a Saturday rush. I called, a real person picked up, and a replacement was on my counter the next morning. That alone is worth it.',
    name: 'Daniel Reyes',
    role: 'Manager, Fieldhouse Outfitters',
  },
  {
    quote:
      'Managing stock across three stores used to be a spreadsheet nightmare. Now I see everything in one dashboard and reorder alerts land in my inbox.',
    name: 'Priya Natarajan',
    role: 'Founder, Sprout & Stem Markets',
  },
]

export function Testimonials() {
  return (
    <section aria-labelledby="testimonials-title" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading id="testimonials-title" eyebrow="Customer stories" title="Owners who stopped worrying about checkout." />
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <li key={t.name}>
              <figure className="flex h-full flex-col justify-between gap-8 rounded-2xl border border-border bg-card p-7">
                <blockquote className="text-pretty leading-relaxed">
                  <p>{`“${t.quote}”`}</p>
                </blockquote>
                <figcaption className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="flex size-10 items-center justify-center rounded-full bg-muted font-mono text-sm font-medium text-primary"
                  >
                    {t.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </span>
                  <span>
                    <span className="block font-semibold">{t.name}</span>
                    <span className="block text-sm text-muted-foreground">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
