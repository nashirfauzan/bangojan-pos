const stats = [
  { value: '2,400+', label: 'Businesses running on BANGOJAN-PoS' },
  { value: '48 hrs', label: 'Average time from signup to live' },
  { value: '99.98%', label: 'Payment uptime last 12 months' },
  { value: '< 90 sec', label: 'Median support answer time' },
]

export function StatsStrip() {
  return (
    <section aria-label="BANGOJAN-PoS by the numbers" className="border-y border-border bg-card">
      <dl className="mx-auto grid max-w-6xl grid-cols-2 px-4 md:grid-cols-4 md:px-6">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex flex-col gap-1 py-8 ${i % 2 === 1 ? 'pl-6' : 'pr-6'} md:px-6 md:first:pl-0 ${
              i > 0 ? 'md:border-l md:border-border' : ''
            } ${i >= 2 ? 'border-t border-border md:border-t-0' : ''}`}
          >
            <dt className="order-2 text-sm text-muted-foreground">{stat.label}</dt>
            <dd className="order-1 font-mono text-3xl font-semibold tracking-tight">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
