import Header from "./header"
import HeroSection from "./hero-section"
import HowItWorks from "./how-it-works"
import Features from "./features"
import Testimonials from "./testimonials"
import FAQ from "./faq"
import CTA from "./cta"
import Footer from "./footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <HowItWorks />
      <Features />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}
