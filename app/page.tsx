import { SiteHeader } from '@/components/site/site-header'
import { Hero } from '@/components/site/hero'
import { StatsStrip } from '@/components/site/stats-strip'
import { Services } from '@/components/site/services'
import { WhyChooseUs } from '@/components/site/why-choose-us'
import { PaymentMethods } from '@/components/site/payment-methods'
import { HowItWorks } from '@/components/site/how-it-works'
import { Industries } from '@/components/site/industries'
import { Pricing } from '@/components/site/pricing'
import { Testimonials } from '@/components/site/testimonials'
import { Faq } from '@/components/site/faq'
import { ContactCta } from '@/components/site/contact-cta'
import { SiteFooter } from '@/components/site/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <StatsStrip />
        <Services />
        <WhyChooseUs />
        <PaymentMethods />
        <HowItWorks />
        <Industries />
        <Pricing />
        <Testimonials />
        <Faq />
        <ContactCta />
      </main>
      <SiteFooter />
    </>
  )
}
