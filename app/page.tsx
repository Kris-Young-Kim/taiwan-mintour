import Header from "@/components/header"
import Hero from "@/components/hero"
import PriceSection from "@/components/price-section"
import ItineraryPreview from "@/components/itinerary-preview"
import Highlights from "@/components/highlights"
import Hotel from "@/components/hotel"
import Testimonials from "@/components/testimonials"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <PriceSection />
      <ItineraryPreview />
      <Highlights />
      <Hotel />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
