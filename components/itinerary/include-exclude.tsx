import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, X } from "lucide-react"

export default function IncludeExclude() {
  const includes = [
    "왕복 항공권 (대한항공 스케줄)",
    "호텔 숙박 3박 (Chong Yu Hotel 4성급)",
    "전용 차량 (43인승)",
    "전 일정 식사 (1회 자유식 제외)",
    "관광지 입장료",
    "가이드 경비 및 팁",
    "여행자 보험",
  ]

  const excludes = ["개인 경비", "매너팁", "통역 비용", "싱글룸 추가 비용 (₩330,000)", "선택 관광 및 쇼핑"]

  return (
    <section className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">포함사항 & 불포함사항</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Includes */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Check size={24} className="text-primary" />
                포함사항
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {includes.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <Check className="text-primary flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Excludes */}
          <Card className="border-destructive/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-destructive">
                <X size={24} className="text-destructive" />
                불포함사항
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {excludes.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <X className="text-muted-foreground flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
