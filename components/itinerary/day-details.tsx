import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Utensils } from "lucide-react"

export default function DayDetails() {
  const days = [
    {
      day: 1,
      date: "2026년 6월 13일 (토요일)",
      title: "인천 출발 → 타이베이 도착",
      schedule: [
        { time: "10:30", activity: "인천국제공항 출발", airline: "대한항공" },
        { time: "12:10", activity: "도원 국제공항 도착", note: "현지 가이드 미팅" },
      ],
      attractions: [
        {
          name: "국립고궁박물관 ⭐",
          description: "세계 4대 박물관 중 하나",
          details: "5700년 역사의 약 70만 점 유물 소장. 청동기, 도자기, 옥기, 서화 등 감상",
          time: "약 2시간",
          image: "/placeholder.svg?key=g89jp",
        },
        {
          name: "자오궁 (道教寺院)",
          description: "타이베이 대표 도교 사원",
          details: "화려한 장식과 전통 건축양식의 아름다움",
          time: "약 40분",
          image: "/placeholder.svg?key=h89kq",
        },
        {
          name: "라오허제 야시장",
          description: "타이베이 야시장 문화 체험",
          details: "현지 먹거리와 쇼핑 - 자유시간",
          time: "약 1시간",
          image: "/placeholder.svg?key=i89lr",
        },
      ],
      meals: {
        lunch: "현지식",
        dinner: "현지식",
      },
      hotel: "Chong Yu Hotel (4성급)",
    },
    {
      day: 2,
      date: "2026년 6월 14일 (일요일)",
      title: "타이베이 세계대회",
      schedule: [
        { time: "아침", activity: "호텔 조식 후 출발" },
        { time: "오후", activity: "타이베이 세계대회장 방문" },
        { time: "저녁", activity: "무제한 샤브샤브 디너" },
      ],
      attractions: [
        {
          name: "중정기념당",
          description: "장개석 총통 기념관",
          details: "의례적 교대식 관람 및 전통 건축의 아름다움",
          time: "약 1시간",
          image: "/placeholder.svg?key=j89ms",
        },
        {
          name: "타이베이 세계대회장",
          description: "로타리 세계대회 참관",
          details: "국제 네트워킹 및 대회 행사 참석",
          time: "전일",
          image: "/placeholder.svg?key=k89nt",
        },
        {
          name: "파글로리 돔 & 난강 전시센터",
          description: "현대 건축물 관람",
          details: "타이베이 돔 및 TaiNEX 전시센터 방문",
          time: "약 1시간",
          image: "/placeholder.svg?key=l89ou",
        },
        {
          name: "우정의 집",
          description: "로타리 관련 방문",
          details: "로타리 역사와 의미 탐방",
          time: "약 30분",
          image: "/placeholder.svg?key=m89pv",
        },
        {
          name: "서문정거리",
          description: "젊음의 활기가 가득한 상권",
          details: "자유 탐방 및 쇼핑 - 자유시간",
          time: "약 1-2시간",
          image: "/placeholder.svg?key=n89qw",
        },
      ],
      meals: {
        breakfast: "호텔식",
        lunch: "자유식",
        dinner: "무제한 샤브샤브",
      },
      hotel: "Chong Yu Hotel (4성급)",
    },
    {
      day: 3,
      date: "2026년 6월 15일 (월요일)",
      title: "타이베이 101빌딩",
      schedule: [
        { time: "아침", activity: "호텔 조식 후 출발" },
        { time: "오전/오후", activity: "타이베이 101 전망대 & 자유시간" },
        { time: "저녁", activity: "고급 현지식 만찬" },
      ],
      attractions: [
        {
          name: "타이베이 101빌딩 전망대 ⭐",
          description: "타이베이 최고의 랜드마크",
          details: "높이 452m (89층), 360도 파노라마 뷰, 세계에서 가장 빠른 엘리베이터",
          time: "약 1.5시간",
          image: "/placeholder.svg?key=o89rx",
        },
        {
          name: "자유시간",
          description: "101빌딩 쇼핑몰 탐방",
          details: "개인 쇼핑 및 관광 - 자유 일정",
          time: "약 1-2시간",
          image: "/placeholder.svg?key=p89sy",
        },
      ],
      meals: {
        breakfast: "호텔식",
        lunch: "현지식",
        dinner: "고급 현지식 만찬 (10인 1테이블)",
      },
      hotel: "Chong Yu Hotel (4성급)",
    },
    {
      day: 4,
      date: "2026년 6월 16일 (화요일)",
      title: "단수이 옛거리 → 귀국",
      schedule: [
        { time: "아침", activity: "호텔 조식 후 체크아웃" },
        { time: "오전", activity: "단수이 옛거리 관광" },
        { time: "오후", activity: "중식 후 공항 이동" },
        { time: "18:55", activity: "타이베이 도원 공항 출발", airline: "대한항공" },
        { time: "22:35", activity: "인천국제공항 도착" },
      ],
      attractions: [
        {
          name: "단수이 옛거리 ⭐",
          description: "역사적 거리 탐방",
          details: "홍모성 (17세기 스페인/네덜란드 요새), 진리대학 등",
          time: "약 2시간",
          image: "/placeholder.svg?key=q89tz",
        },
        {
          name: "홍모성",
          description: "17세기 역사 유산",
          details: "웅장한 요새 건축물과 역사 체험",
          time: "약 1시간",
          image: "/placeholder.svg?key=r89ua",
        },
        {
          name: "진리대학",
          description: "아름다운 캠퍼스",
          details: "타이완의 명문대학 캠퍼스 투어",
          time: "약 1시간",
          image: "/placeholder.svg?key=s89vb",
        },
        {
          name: "타이베이 강변",
          description: "강변 풍경 감상",
          details: "산음 강변에서의 타이베이 마지막 풍경",
          time: "약 30분",
          image: "/placeholder.svg?key=t89wc",
        },
      ],
      meals: {
        breakfast: "호텔식",
        lunch: "현지식",
        dinner: "해당 없음",
      },
      hotel: "해당 없음",
    },
  ]

  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {days.map((day) => (
            <div key={day.day} className="space-y-6">
              {/* Day Header */}
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 bg-accent text-primary rounded-full font-bold text-2xl">
                    Day {day.day}
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl font-bold">{day.title}</h2>
                  <p className="text-foreground/70 mt-1">{day.date}</p>
                </div>
              </div>

              {/* Schedule */}
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg">이동 일정</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {day.schedule.map((item, idx) => (
                      <div key={idx} className="flex gap-4 pb-3 border-b border-border/50 last:pb-0 last:border-0">
                        <div className="flex-shrink-0 w-20">
                          <p className="font-bold text-accent">{item.time}</p>
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold">{item.activity}</p>
                          {item.airline && <p className="text-xs text-foreground/60 mt-1">{item.airline}</p>}
                          {item.note && <p className="text-xs text-foreground/60 mt-1">{item.note}</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Attractions */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">주요 관광지</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {day.attractions.map((attraction, idx) => (
                    <Card key={idx} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div
                        className="h-40 bg-cover bg-center"
                        style={{ backgroundImage: `url('${attraction.image}')` }}
                      />
                      <CardContent className="pt-4">
                        <h4 className="font-bold text-lg mb-1">{attraction.name}</h4>
                        <p className="text-accent text-sm font-semibold mb-2">{attraction.description}</p>
                        <p className="text-sm text-foreground/80 mb-3">{attraction.details}</p>
                        <div className="flex items-center gap-2 text-xs text-foreground/60">
                          <Clock size={14} />
                          <span>{attraction.time}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Meals */}
              <Card className="bg-accent/5 border-accent/20">
                <CardContent className="pt-6">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <Utensils className="text-accent mx-auto mb-2" size={20} />
                      <p className="text-xs text-foreground/60 mb-1">조식</p>
                      <p className="font-semibold">{day.meals.breakfast || "제공 안함"}</p>
                    </div>
                    <div className="text-center">
                      <Utensils className="text-accent mx-auto mb-2" size={20} />
                      <p className="text-xs text-foreground/60 mb-1">중식</p>
                      <p className="font-semibold">{day.meals.lunch || "제공 안함"}</p>
                    </div>
                    <div className="text-center">
                      <Utensils className="text-accent mx-auto mb-2" size={20} />
                      <p className="text-xs text-foreground/60 mb-1">석식</p>
                      <p className="font-semibold">{day.meals.dinner || "제공 안함"}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Hotel */}
              {day.hotel !== "해당 없음" && (
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="pt-6">
                    <p className="text-foreground/70 mb-1">숙박</p>
                    <p className="font-bold text-lg">{day.hotel}</p>
                  </CardContent>
                </Card>
              )}

              <hr className="border-border/30" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
