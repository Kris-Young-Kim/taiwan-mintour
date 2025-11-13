import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

interface BookingSummaryProps {
  guests: number
  singleRooms: number
  totalPrice: number
  basePrice: number
  singleRoomPrice: number
}

export default function BookingSummary({
  guests,
  singleRooms,
  totalPrice,
  basePrice,
  singleRoomPrice,
}: BookingSummaryProps) {
  const includes = ["왕복 항공권", "호텔 3박", "전용 차량", "모든 식사", "관광지 입장료", "가이드 경비 및 팁"]

  return (
    <div className="lg:sticky lg:top-24 space-y-4">
      {/* Package Info */}
      <Card className="border-primary/20">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">글로벌트리브 로타리 세계대회</CardTitle>
          <p className="text-sm text-foreground/60 mt-2">대만 3박 4일</p>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>출발:</span>
            <span className="font-semibold">2026년 6월 13일</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>귀국:</span>
            <span className="font-semibold">2026년 6월 16일</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>항공사:</span>
            <span className="font-semibold">대한항공</span>
          </div>
        </CardContent>
      </Card>

      {/* Price Calculation */}
      <Card className="border-accent/20 bg-accent/5">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">가격 계산</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>기본 요금</span>
              <span className="text-foreground/70">₩{basePrice.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm font-semibold">
              <span>× {guests}명</span>
              <span className="text-primary">₩{(basePrice * guests).toLocaleString()}</span>
            </div>
          </div>

          {singleRooms > 0 && (
            <div className="space-y-2 pt-2 border-t border-border/50">
              <div className="flex justify-between text-sm">
                <span>싱글룸 추가</span>
                <span className="text-foreground/70">₩{singleRoomPrice.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm font-semibold">
                <span>× {singleRooms}실</span>
                <span className="text-primary">₩{(singleRoomPrice * singleRooms).toLocaleString()}</span>
              </div>
            </div>
          )}

          <div className="border-t border-border/50 pt-3">
            <div className="flex justify-between items-baseline">
              <span className="font-semibold">총 금액</span>
              <span className="text-3xl font-bold text-primary">₩{totalPrice.toLocaleString()}</span>
            </div>
            <p className="text-xs text-foreground/60 mt-2">
              ({guests}명 × ₩{basePrice.toLocaleString()} {singleRooms > 0 && `+ ${singleRooms}실 싱글룸`})
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Included Services */}
      <Card className="border-primary/20">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">포함사항</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {includes.map((item, i) => (
              <li key={i} className="flex gap-2 text-sm">
                <Check className="text-primary flex-shrink-0 mt-0.5" size={16} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* CTA Button */}
      <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-base h-12">
        결제하기 (₩{totalPrice.toLocaleString()})
      </Button>

      <p className="text-xs text-foreground/60 text-center">예약 후 확인서를 이메일로 발송합니다</p>
    </div>
  )
}
