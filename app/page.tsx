import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { DemoVideo } from '@/components/demo-video'
import { Stats } from '@/components/stats'
import { Benefits } from '@/components/benefits'
import { HowItWorks } from '@/components/how-it-works'
import { Faq } from '@/components/faq'
import { ContactSection } from '@/components/contact-section'
import { SiteFooter } from '@/components/site-footer'

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <DemoVideo />
        <Stats />
        <Benefits />
        <HowItWorks />
        <Faq />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
