import { Wifi, Dumbbell, UtensilsCrossed, Phone } from "lucide-react"

export default function Hotel() {
  const amenities = [
    { icon: Wifi, name: "무료 Wi-Fi" },
    { icon: Dumbbell, name: "피트니스 센터" },
    { icon: UtensilsCrossed, name: "레스토랑 & 바" },
    { icon: Phone, name: "24시간 프런트" },
  ]

  return (
    <section id="hotel" className="py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">숙박 호텔</h2>
          <p className="text-foreground/70 text-lg">타이베이 중심부의 편안한 숙박</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Hotel Image */}
          <div
            className="h-96 bg-cover bg-center rounded-lg"
            style={{ backgroundImage: "url('/luxury-4-star-hotel-taipei.jpg')" }}
          />

          {/* Hotel Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold mb-2">Chong Yu Hotel</h3>
              <p className="text-accent font-semibold text-lg">4성급</p>
              <p className="text-foreground/70 mt-2">타이베이 중심부 최고의 위치</p>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-lg">숙박 정보</h4>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>3박 연속 숙박 (6월 13-15일)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>스탠다드 트윈/더블 객실</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>호텔 뷔페식 조식 3회 포함</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">편의시설</h4>
              <div className="grid grid-cols-2 gap-4">
                {amenities.map((amenity, i) => {
                  const Icon = amenity.icon
                  return (
                    <div key={i} className="flex items-center gap-2">
                      <Icon className="text-accent" size={20} />
                      <span className="text-sm text-foreground/80">{amenity.name}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="bg-primary/5 p-4 rounded-lg">
              <p className="text-sm text-foreground/70">
                웹사이트: <span className="font-semibold">chongyuhotel.com.tw</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
