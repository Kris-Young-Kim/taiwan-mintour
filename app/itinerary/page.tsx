import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ItineraryHeader from "@/components/itinerary/itinerary-header"
import DayDetails from "@/components/itinerary/day-details"
import MealDetails from "@/components/itinerary/meal-details"
import HotelDetails from "@/components/itinerary/hotel-details"
import IncludeExclude from "@/components/itinerary/include-exclude"
import TravelTips from "@/components/itinerary/travel-tips"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "상세 일정 - 민투어 대만 여행",
  description: "글로벌트리브 로타리 세계대회 특별 투어 상세 일정 안내. 타이베이 국립고궁박물관, 101빌딩, 단수이 일정",
}

export default function ItineraryPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <ItineraryHeader />
        <DayDetails />
        <MealDetails />
        <HotelDetails />
        <IncludeExclude />
        <TravelTips />

        {/* Final CTA */}
        <section className="py-16 sm:py-24 border-t border-border bg-primary/5">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold">일정이 마음에 드셨나요?</h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                지금 바로 예약하고 특별한 대만 여행을 시작하세요
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/booking">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 w-full sm:w-auto">
                    지금 예약하기
                    <ArrowRight size={18} />
                  </Button>
                </Link>
                <a href="tel:033-742-8053">
                  <Button
                    size="lg"
                    variant="outline"
                    className="gap-2 w-full sm:w-auto"
                  >
                    <MessageCircle size={18} />
                    궁금한 점 문의하기
                  </Button>
                </a>
              </div>
              <div className="pt-6 border-t border-border/50 mt-6">
                <p className="text-sm text-foreground/60 mb-2">고객센터</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
                  <a href="tel:033-742-8053" className="text-foreground/80 hover:text-primary">
                    📞 033-742-8053
                  </a>
                  <a href="mailto:mintour@gmail.com" className="text-foreground/80 hover:text-primary">
                    ✉️ mintour@gmail.com
                  </a>
                  <span className="text-foreground/80">💬 카카오톡: @MINTOUR</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
