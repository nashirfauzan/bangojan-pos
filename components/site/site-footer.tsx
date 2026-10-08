import { Logo } from './logo'

const columns = [
  {
    title: 'Services',
    links: [
      { label: 'POS hardware', href: '#services' },
      { label: 'Installation', href: '#how-it-works' },
      { label: 'Payment processing', href: '#payments' },
      { label: 'Support', href: '#services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Industries', href: '#industries' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Contact', href: '#contact' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-[2fr_1fr_1fr] md:px-6">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Full-service point of sale for restaurants, cafés, and retailers. Set up, supported, and
            always on.
          </p>
        </div>
        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h2 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{col.title}</h2>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-primary">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-4 py-6 font-mono text-xs text-muted-foreground md:px-6">
          {`© ${new Date().getFullYear()} BANGOJAN-PoS. All rights reserved.`}
        </p>
      </div>
    </footer>
  )
}
