import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32 lg:py-48">
      {/* Background with image overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/10 -z-10" />
      <div className="absolute inset-0 bg-[url('/taipei-101-night-skyline.jpg')] bg-cover bg-center opacity-15 -z-10" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center gap-6 sm:gap-8">
          {/* Badge */}
          <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-sm font-medium text-accent">
            ✨ 로타리 세계대회 특별 투어
          </div>

          {/* Headline */}
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-4 text-balance">
              세계 4대 박물관과 대만의
              <br />
              정취를 느끼는{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                특별한 여행
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-foreground/70 leading-relaxed">
              국립고궁박물관, 타이베이 101빌딩, 현지 맛집 체험과 함께하는 3박 4일의 특별한 경험. 노쇼핑 기준, 전용 차량,
              모든 식사와 입장료가 포함되어 있습니다.{" "}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
              지금 예약하기
              <ArrowRight size={18} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-foreground bg-transparent border-primary/30 hover:bg-primary/5"
            >
              일정 보기
            </Button>
          </div>

          {/* Key Info */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-12 border-t border-border/50 w-full max-w-2xl">
            <div className="flex flex-col items-center gap-2">
              <span className="text-2xl sm:text-3xl font-bold text-accent">3박 4일</span>
              <span className="text-xs sm:text-sm text-foreground/60">2026년 6월 13-16일</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-2xl sm:text-3xl font-bold text-accent">150명</span>
              <span className="text-xs sm:text-sm text-foreground/60">함께하는 여행</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-2xl sm:text-3xl font-bold text-accent">₩1,290,000</span>
              <span className="text-xs sm:text-sm text-foreground/60">1인 요금</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
