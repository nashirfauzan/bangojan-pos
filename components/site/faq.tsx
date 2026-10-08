import { Plus } from 'lucide-react'
import { SectionHeading } from './section-heading'

const faqs = [
  {
    q: 'How does the free trial work?',
    a: 'Every new account gets 14 days of full BANGOJAN-PoS access with no credit card required. Use the software, accept test transactions including QRIS, and invite your staff. When the trial ends you choose a plan to subscribe — or simply walk away with nothing to pay.',
  },
  {
    q: 'Can I keep my existing hardware?',
    a: 'Often, yes. We support most major receipt printers, cash drawers, and barcode scanners. During your consultation we audit your current equipment and only replace what is incompatible.',
  },
  {
    q: 'Is there a contract or cancellation fee?',
    a: 'No. Plans are month-to-month. If you purchased hardware it is yours to keep; leased hardware is simply returned with a prepaid shipping label.',
  },
  {
    q: 'What happens if the internet goes down?',
    a: 'Terminals keep working in offline mode and securely store card transactions, then sync automatically when the connection returns. Growth plans include optional LTE backup.',
  },
  {
    q: 'How do you migrate my menu or product catalog?',
    a: 'Send us an export, spreadsheet, or even photos of your menu. Our onboarding team builds everything — items, modifiers, taxes, and pricing — and you approve it before launch.',
  },
  {
    q: 'Are payments secure and PCI compliant?',
    a: 'Yes. Every reader uses end-to-end encryption and tokenization, and BANGOJAN-PoS maintains PCI DSS Level 1 compliance, so card data never touches your network.',
  },
]

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="border-t border-border py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:px-6 lg:grid-cols-[1fr_1.5fr]">
        <SectionHeading
          id="faq-title"
          eyebrow="FAQ"
          title="Questions, answered."
          description="Still curious? Our team is happy to walk you through anything on a quick call."
        />
        <div className="divide-y divide-border border-y border-border">
          {faqs.map((faq) => (
            <details key={faq.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-lg font-medium [&::-webkit-details-marker]:hidden">
                {faq.q}
                <Plus
                  className="size-5 shrink-0 text-primary transition-transform group-open:rotate-45"
                  aria-hidden="true"
                />
              </summary>
              <p className="mt-3 max-w-prose leading-relaxed text-muted-foreground">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
