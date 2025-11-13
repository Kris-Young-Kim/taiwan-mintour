import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-16 sm:py-24 border-t border-border">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 border border-primary/30 overflow-hidden">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 -z-10" />

          <div className="px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-24 text-center flex flex-col items-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">이제 특별한 여행을 떠나세요</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mb-8">
              세계 4대 박물관, 타이베이 101, 현지 맛집 체험. 150명의 로타리 회원과 함께 만드는 잊을 수 없는 3박 4일의
              추억입니다.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
              지금 예약하기
              <ArrowRight size={18} />
            </Button>
            <p className="text-sm text-foreground/60 mt-6">예약 후 확인서를 이메일로 발송해드립니다</p>
          </div>
        </div>
      </div>
    </section>
  )
}
