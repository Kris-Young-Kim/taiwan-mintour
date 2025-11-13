import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, Cloud, Backpack, Phone } from "lucide-react"

export default function TravelTips() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">여행 준비사항</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Passport & Visa */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-lg">여권 및 입국 정보</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex gap-3">
                <AlertCircle className="text-accent flex-shrink-0 mt-0.5" size={20} />
                <div>
                  <p className="font-semibold">여권 유효기간</p>
                  <p className="text-sm text-foreground/70">출발일 기준 6개월 이상 필수</p>
                </div>
              </div>
              <div className="flex gap-3">
                <AlertCircle className="text-accent flex-shrink-0 mt-0.5" size={20} />
                <div>
                  <p className="font-semibold">대만 입국</p>
                  <p className="text-sm text-foreground/70">한국 여권 90일 무비자 가능</p>
                </div>
              </div>
              <div className="flex gap-3">
                <AlertCircle className="text-accent flex-shrink-0 mt-0.5" size={20} />
                <div>
                  <p className="font-semibold">현지 통화</p>
                  <p className="text-sm text-foreground/70">대만 달러 (TWD) ≈ 43원</p>
                </div>
              </div>
              <div className="flex gap-3">
                <AlertCircle className="text-accent flex-shrink-0 mt-0.5" size={20} />
                <div>
                  <p className="font-semibold">전압</p>
                  <p className="text-sm text-foreground/70">110V (어댑터 필요)</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Climate & Packing */}
          <Card className="border-accent/20">
            <CardHeader>
              <CardTitle className="text-lg">기후 및 준비물</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex gap-3">
                <Cloud className="text-accent flex-shrink-0 mt-0.5" size={20} />
                <div>
                  <p className="font-semibold">6월 날씨</p>
                  <p className="text-sm text-foreground/70">평균 28-32°C, 습도 높음</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Backpack className="text-accent flex-shrink-0 mt-0.5" size={20} />
                <div>
                  <p className="font-semibold">복장</p>
                  <p className="text-sm text-foreground/70">가벼운 여름옷, 모자, 선글라스, 우산</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Backpack className="text-accent flex-shrink-0 mt-0.5" size={20} />
                <div>
                  <p className="font-semibold">신발</p>
                  <p className="text-sm text-foreground/70">편한 운동화, 샌들</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Backpack className="text-accent flex-shrink-0 mt-0.5" size={20} />
                <div>
                  <p className="font-semibold">실내용</p>
                  <p className="text-sm text-foreground/70">얇은 가디건 (냉방 대비)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Emergency Info */}
        <Card className="border-destructive/20 bg-destructive/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive">
              <Phone size={24} />
              긴급 연락처
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <p className="text-xs text-foreground/60 mb-1">경찰</p>
                <p className="font-bold text-lg">112</p>
              </div>
              <div>
                <p className="text-xs text-foreground/60 mb-1">소방</p>
                <p className="font-bold text-lg">119</p>
              </div>
              <div>
                <p className="text-xs text-foreground/60 mb-1">현지 가이드</p>
                <p className="font-bold text-lg">출발 전 안내</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Important Note */}
        <div className="mt-8 p-4 bg-primary/5 border-l-4 border-primary rounded">
          <p className="text-foreground/80">
            <span className="font-semibold text-primary">⚠️ 주의:</span> 상기 일정은 항공사 및 현지 사정으로 인하여
            변동될 수 있습니다. 최종 일정은 출발 1주일 전 확인서를 통해 안내드립니다.
          </p>
        </div>
      </div>
    </section>
  )
}
