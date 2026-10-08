import { MessageCircle } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Logo } from './logo'

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#why-us', label: 'Why us' },
  { href: '#payments', label: 'Payments' },
  { href: '#industries', label: 'Industries' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
]

const whatsappHref = `https://wa.me/62895385085358?text=${encodeURIComponent(
  'Halo BANGOJAN-PoS, saya ingin tahu lebih lanjut tentang layanan Point of Sales Anda.',
)}`

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4 md:px-6">
        <a href="#top" className="flex items-center gap-2" aria-label="BANGOJAN-PoS home">
          <Logo />
        </a>
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-7 text-sm text-muted-foreground">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-foreground">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact BANGOJAN-PoS on WhatsApp"
            className={cn(
              buttonVariants({ variant: 'outline', size: 'lg' }),
              'gap-2 border-[#25D366]/40 px-3 text-foreground hover:border-[#25D366] hover:bg-[#25D366]/10',
            )}
          >
            <MessageCircle className="size-4 text-[#1DA851]" aria-hidden="true" />
            Contact us
          </a>
          <a href="#free-trial" className={cn(buttonVariants({ size: 'lg' }), 'px-4')}>
            Start free trial
          </a>
        </div>
      </div>
    </header>
  )
}
