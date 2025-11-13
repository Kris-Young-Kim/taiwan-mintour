import { Card, CardContent } from "@/components/ui/card"
import { Award, Utensils, MapPin, Users } from "lucide-react"

export default function Highlights() {
  const highlights = [
    {
      icon: Award,
      title: "세계 4대 박물관",
      description: "국립고궁박물관의 5700년 역사와 약 70만 점의 귀중한 유물을 관람합니다.",
    },
    {
      icon: MapPin,
      title: "타이베이 101 전망대",
      description: "452m 높이의 89층에서 타이베이의 360도 파노라마 뷰를 감상하세요.",
    },
    {
      icon: Utensils,
      title: "현지 맛집 체험",
      description: "라오허제 야시장, 무제한 샤브샤브, 현지식 만찬으로 대만의 미식 문화를 즐깁니다.",
    },
    {
      icon: Users,
      title: "로타리 세계대회",
      description: "150명의 로타리 회원과 함께 국제 네트워킹의 특별한 경험을 나누세요.",
    },
  ]

  return (
    <section className="py-16 sm:py-24 bg-primary/5">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">주요 특징</h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">이 여행을 특별하게 만드는 네 가지 경험</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {highlights.map((highlight, i) => {
            const Icon = highlight.icon
            return (
              <Card key={i} className="border-primary/10 hover:border-primary/30 transition-colors">
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="bg-accent/10 p-3 rounded-lg h-fit">
                      <Icon className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{highlight.title}</h3>
                      <p className="text-foreground/70 text-sm leading-relaxed">{highlight.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
