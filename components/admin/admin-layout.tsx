"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { BarChart3, Users, DollarSign, Settings, LogOut, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const menuItems = [
    { icon: BarChart3, label: "대시보드", href: "/admin", active: true },
    { icon: Users, label: "예약 관리", href: "/admin/bookings", active: false },
    { icon: DollarSign, label: "재무 관리", href: "/admin/finance", active: false },
    { icon: Settings, label: "설정", href: "/admin/settings", active: false },
  ]

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside
        className={`fixed lg:relative inset-y-0 left-0 z-40 w-64 bg-primary text-primary-foreground transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="p-6 border-b border-primary/30">
          <h1 className="text-2xl font-bold">민투어</h1>
          <p className="text-xs text-primary-foreground/70 mt-1">관리자 대시보드</p>
        </div>

        <nav className="p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  item.active
                    ? "bg-primary-foreground/20 text-primary-foreground"
                    : "text-primary-foreground/80 hover:bg-primary-foreground/10"
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{item.label}</span>
              </Link>
            )
          })}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-primary/30">
          <Button
            variant="ghost"
            className="w-full justify-start text-primary-foreground hover:bg-primary-foreground/10 gap-2"
          >
            <LogOut size={20} />
            <span>로그아웃</span>
          </Button>
        </div>
      </aside>

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-primary text-primary-foreground rounded-lg"
      >
        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 bg-background/80 z-30" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-6 sm:p-8">{children}</div>
      </main>
    </div>
  )
}
