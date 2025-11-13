import type { Metadata } from "next"
import AdminLayout from "@/components/admin/admin-layout"
import DashboardStats from "@/components/admin/dashboard-stats"
import BookingsTable from "@/components/admin/bookings-table"
import FinanceOverview from "@/components/admin/finance-overview"

export const metadata: Metadata = {
  title: "관리자 대시보드 - 민투어",
  description: "예약 현황, 매출, 참가자 관리",
}

export default function AdminPage() {
  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Main Stats */}
        <DashboardStats />

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <BookingsTable />
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <FinanceOverview />
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
