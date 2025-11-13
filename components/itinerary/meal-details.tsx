import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { UtensilsCrossed, Sparkles } from "lucide-react"

export default function MealDetails() {
  const specialMeals = [
    {
      day: 2,
      meal: "석식",
      title: "무제한 샤브샤브",
      description: "타이베이 최고의 샤브샤브 레스토랑에서 무제한으로 즐기는 특별한 저녁 식사",
      highlight: true,
    },
    {
      day: 3,
      meal: "석식",
      title: "고급 현지식 만찬",
      description: "10인 1테이블 기준의 정찬 코스. 타이완의 전통 요리와 현대적 퓨전 요리를 맛볼 수 있습니다",
      highlight: true,
    },
  ]

  const mealSummary = {
    breakfast: {
      count: 3,
      description: "호텔 뷔페식 조식 (3회)",
    },
    lunch: {
      count: 4,
      description: "현지 레스토랑 중식 (3회) + 자유식 (1회)",
    },
    dinner: {
      count: 3,
      description: "현지 레스토랑 석식 (3회)",
    },
  }

  return (
    <section className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">식사 정보</h2>
          <p className="text-foreground/70 text-lg">풍성한 식사로 대만의 맛을 만나보세요</p>
        </div>

        {/* Meal Summary */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="border-primary/20">
            <CardContent className="pt-6">
              <div className="text-center">
                <UtensilsCrossed className="text-accent mx-auto mb-3" size={32} />
                <p className="text-3xl font-bold text-primary mb-1">{mealSummary.breakfast.count}회</p>
                <p className="text-sm text-foreground/70">{mealSummary.breakfast.description}</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-primary/20">
            <CardContent className="pt-6">
              <div className="text-center">
                <UtensilsCrossed className="text-accent mx-auto mb-3" size={32} />
                <p className="text-3xl font-bold text-primary mb-1">{mealSummary.lunch.count}회</p>
                <p className="text-sm text-foreground/70">{mealSummary.lunch.description}</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-primary/20">
            <CardContent className="pt-6">
              <div className="text-center">
                <UtensilsCrossed className="text-accent mx-auto mb-3" size={32} />
                <p className="text-3xl font-bold text-primary mb-1">{mealSummary.dinner.count}회</p>
                <p className="text-sm text-foreground/70">{mealSummary.dinner.description}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Special Meals */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-center mb-8">특별 메뉴</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {specialMeals.map((meal, idx) => (
              <Card
                key={idx}
                className={`overflow-hidden ${meal.highlight ? "border-accent/30 bg-accent/5" : ""}`}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {meal.highlight && <Sparkles className="text-accent" size={20} />}
                    Day {meal.day} {meal.meal}: {meal.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">{meal.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Dietary Restrictions */}
        <Card className="mt-12 border-primary/20">
          <CardHeader>
            <CardTitle>식이 제한 사항</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground/80 mb-4">
              채식, 할랄, 알레르기 등 특별한 식이 제한이 있으신 경우, 예약 시 사전에 알려주시면 최대한
              배려해드리겠습니다.
            </p>
            <div className="bg-primary/5 p-4 rounded-lg">
              <p className="text-sm text-foreground/70">
                <span className="font-semibold">문의:</span> 예약 페이지의 "특별 요청사항"란에 기재해주시거나,
                고객센터로 연락주세요.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

