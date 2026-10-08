import {
  Banknote,
  Building2,
  Check,
  CreditCard,
  QrCode,
  Smartphone,
  WalletCards,
  type LucideIcon,
} from 'lucide-react'
import { SectionHeading } from './section-heading'

const methods: { icon: LucideIcon; title: string; description: string; brands: string[] }[] = [
  {
    icon: Smartphone,
    title: 'E-wallets',
    description: 'Customers pay straight from the apps they already use every day.',
    brands: ['GoPay', 'OVO', 'DANA', 'ShopeePay', 'LinkAja'],
  },
  {
    icon: Building2,
    title: 'Bank transfer & Virtual Account',
    description: 'Unique VA numbers per order, auto-matched so you never reconcile by hand.',
    brands: ['BCA', 'Mandiri', 'BNI', 'BRI', 'Permata'],
  },
  {
    icon: CreditCard,
    title: 'Debit & credit cards',
    description: 'Tap, chip, or swipe on the same reader, including domestic GPN debit.',
    brands: ['GPN', 'Visa', 'Mastercard', 'JCB'],
  },
  {
    icon: WalletCards,
    title: 'PayLater',
    description: 'Let customers split bigger purchases while you get paid in full.',
    brands: ['Kredivo', 'Akulaku', 'GoPayLater'],
  },
  {
    icon: Banknote,
    title: 'Cash',
    description: 'Cash drawer, change calculation, and end-of-shift counts built in.',
    brands: ['Rupiah'],
  },
]

const qrisPoints = [
  'One QR accepts every QRIS-enabled e-wallet and mobile banking app',
  'Dynamic QR printed per order with the exact amount, so no typos',
  'Payment confirmed on the terminal in seconds, with no screenshots to check',
  'Daily settlement straight to your Indonesian bank account',
]

const QR_SIZE = 21

function isFinderCell(row: number, col: number) {
  const inBox = (r: number, c: number) => row >= r && row < r + 7 && col >= c && col < c + 7
  const box = inBox(0, 0) ? [0, 0] : inBox(0, QR_SIZE - 7) ? [0, QR_SIZE - 7] : inBox(QR_SIZE - 7, 0) ? [QR_SIZE - 7, 0] : null
  if (!box) return null
  const r = row - box[0]
  const c = col - box[1]
  const ring = Math.min(r, c, 6 - r, 6 - c)
  return ring === 0 || ring >= 2
}

const qrCells = Array.from({ length: QR_SIZE * QR_SIZE }, (_, index) => {
  const row = Math.floor(index / QR_SIZE)
  const col = index % QR_SIZE
  const finder = isFinderCell(row, col)
  if (finder !== null) return finder
  return ((row * 7 + col * 13 + row * col * 3) % 5) < 2
})

function QrisCard() {
  return (
    <div className="mx-auto w-full max-w-xs rounded-2xl border border-border bg-card p-5 shadow-xl shadow-foreground/10">
      <div className="flex items-center justify-between">
        <span className="rounded-md bg-foreground px-2 py-1 font-mono text-xs font-semibold tracking-widest text-background">
          QRIS
        </span>
        <span className="font-mono text-xs text-muted-foreground">ORDER #A-1042</span>
      </div>
      <p className="mt-4 text-sm text-muted-foreground">Kopi Senja, Jakarta</p>
      <p className="font-mono text-2xl font-semibold tracking-tight">Rp 87.500</p>
      <div
        role="img"
        aria-label="Sample dynamic QRIS code for an order of Rp 87.500"
        className="mt-4 grid aspect-square w-full gap-0 rounded-lg border border-border bg-background p-3"
        style={{ gridTemplateColumns: `repeat(${QR_SIZE}, minmax(0, 1fr))` }}
      >
        {qrCells.map((filled, index) => (
          <span key={index} className={filled ? 'bg-foreground' : 'bg-transparent'} />
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between rounded-lg bg-muted px-3 py-2 text-sm">
        <span className="text-muted-foreground">Status</span>
        <span className="flex items-center gap-1.5 font-medium text-primary">
          <Check className="size-4" aria-hidden="true" />
          Paid via GoPay
        </span>
      </div>
    </div>
  )
}

export function PaymentMethods() {
  return (
    <section
      id="payments"
      aria-labelledby="payments-title"
      className="border-t border-border bg-card py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          id="payments-title"
          eyebrow="Local payments"
          title="Accept QRIS and every way your customers like to pay."
          description="BANGOJAN-PoS is built for Indonesian checkouts. QRIS, e-wallets, Virtual Accounts, cards, and cash all run through one terminal and land in one report."
        />

        <div className="mt-14 grid items-center gap-10 rounded-3xl border border-border bg-background p-6 md:p-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <span className="flex size-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
              <QrCode className="size-5" aria-hidden="true" />
            </span>
            <h3 className="mt-5 text-2xl font-semibold tracking-tight md:text-3xl">
              QRIS, the national QR standard, ready on day one.
            </h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Registered with Bank Indonesia&apos;s QRIS standard, so a single code works with any
              participating wallet or banking app. Show it on the customer display, print it on the
              receipt, or put a static stand on the counter.
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {qrisPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <Check className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <QrisCard />
        </div>

        <ul className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
          {methods.map((method) => (
            <li key={method.title} className="flex flex-col gap-3 bg-background p-6">
              <span className="flex size-9 items-center justify-center rounded-lg bg-muted text-primary">
                <method.icon className="size-4" aria-hidden="true" />
              </span>
              <h3 className="font-semibold tracking-tight">{method.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{method.description}</p>
              <ul className="mt-auto flex flex-wrap gap-1.5 pt-2" aria-label={`${method.title} providers`}>
                {method.brands.map((brand) => (
                  <li
                    key={brand}
                    className="rounded-md border border-border px-2 py-0.5 font-mono text-xs text-muted-foreground"
                  >
                    {brand}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
