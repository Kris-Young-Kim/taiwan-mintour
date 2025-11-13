import { Card, CardContent } from "@/components/ui/card"
import { Users, Home, TrendingUp, AlertCircle } from "lucide-react"

export default function DashboardStats() {
  const stats = [
    {
      icon: Users,
      label: "총 예약 인원",
      value: "142명",
      change: "+8명 (오늘)",
      bgColor: "bg-blue-50 dark:bg-blue-950",
      iconColor: "text-blue-500",
    },
    {
      icon: Home,
      label: "남은 좌석",
      value: "8명",
      change: "최대 150명",
      bgColor: "bg-amber-50 dark:bg-amber-950",
      iconColor: "text-amber-500",
    },
    {
      icon: TrendingUp,
      label: "예약률",
      value: "94.7%",
      change: "+2.3% (주간)",
      bgColor: "bg-green-50 dark:bg-green-950",
      iconColor: "text-green-500",
    },
    {
      icon: AlertCircle,
      label: "예상 수익",
      value: "₩191.7M",
      change: "142명 × ₩1.35M",
      bgColor: "bg-purple-50 dark:bg-purple-950",
      iconColor: "text-purple-500",
    },
  ]

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">대시보드</h1>
        <p className="text-foreground/60 mt-2">2026년 6월 13-16일 여행 실시간 현황</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => {
          const Icon = stat.icon
          return (
            <Card key={i} className={`${stat.bgColor} border-0`}>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                    <Icon className={`${stat.iconColor}`} size={24} />
                  </div>
                </div>
                <p className="text-sm text-foreground/60 mb-1">{stat.label}</p>
                <p className="text-3xl font-bold mb-2">{stat.value}</p>
                <p className="text-xs text-foreground/60">{stat.change}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
