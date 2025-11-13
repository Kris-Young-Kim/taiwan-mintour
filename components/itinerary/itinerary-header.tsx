import { Card } from "@/components/ui/card"
import { Calendar, Users, Plane, MapPin } from "lucide-react"

export default function ItineraryHeader() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-primary/10 to-accent/10">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Title */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold text-balance">글로벌트리브 로타리 세계대회 특별 투어</h1>
            <p className="text-xl text-foreground/70">대만 타이베이 3박 4일 상세 일정</p>
          </div>

          {/* Trip Info Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="p-4 border-primary/20">
              <div className="flex items-center gap-3">
                <Calendar className="text-accent" size={24} />
                <div>
                  <p className="text-xs text-foreground/60">기간</p>
                  <p className="font-bold">3박 4일</p>
                </div>
              </div>
            </Card>
            <Card className="p-4 border-primary/20">
              <div className="flex items-center gap-3">
                <Plane className="text-accent" size={24} />
                <div>
                  <p className="text-xs text-foreground/60">항공사</p>
                  <p className="font-bold">대한항공</p>
                </div>
              </div>
            </Card>
            <Card className="p-4 border-primary/20">
              <div className="flex items-center gap-3">
                <Users className="text-accent" size={24} />
                <div>
                  <p className="text-xs text-foreground/60">인원</p>
                  <p className="font-bold">약 150명</p>
                </div>
              </div>
            </Card>
            <Card className="p-4 border-primary/20">
              <div className="flex items-center gap-3">
                <MapPin className="text-accent" size={24} />
                <div>
                  <p className="text-xs text-foreground/60">숙박</p>
                  <p className="font-bold">Chong Yu 4성</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Date Range */}
          <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
            <div className="grid md:grid-cols-2 gap-6 text-center md:text-left">
              <div>
                <p className="text-foreground/70 mb-1 text-sm">출발일</p>
                <p className="text-xl font-bold">2026년 6월 13일 (토요일)</p>
                <p className="text-sm text-foreground/60 mt-1">인천국제공항 10:30 출발</p>
              </div>
              <div>
                <p className="text-foreground/70 mb-1 text-sm">귀국일</p>
                <p className="text-xl font-bold">2026년 6월 16일 (화요일)</p>
                <p className="text-sm text-foreground/60 mt-1">인천국제공항 22:35 도착</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
