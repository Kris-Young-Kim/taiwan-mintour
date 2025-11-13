import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get("status")
    const page = searchParams.get("page") || "1"

    console.log("[v0] Fetching bookings - status:", status, "page:", page)

    // Mock bookings data
    const mockBookings = [
      {
        id: "BK001",
        bookingNumber: "BK001",
        name: "김미영",
        phone: "010-1234-5678",
        email: "kim@example.com",
        guests: 2,
        roomType: "더블룸",
        status: "예약완료",
        amount: 2_700_000,
        createdAt: "2025-11-10",
      },
      {
        id: "BK002",
        bookingNumber: "BK002",
        name: "박준호",
        phone: "010-2345-6789",
        email: "park@example.com",
        guests: 3,
        roomType: "더블+싱글",
        status: "결제대기",
        amount: 4_380_000,
        createdAt: "2025-11-12",
      },
      {
        id: "BK003",
        bookingNumber: "BK003",
        name: "이은지",
        phone: "010-3456-7890",
        email: "lee@example.com",
        guests: 1,
        roomType: "싱글룸",
        status: "예약완료",
        amount: 1_680_000,
        createdAt: "2025-11-08",
      },
    ]

    return NextResponse.json({
      bookings: mockBookings,
      total: 142,
      page: Number.parseInt(page),
      perPage: 10,
    })
  } catch (error) {
    console.error("[v0] Bookings error:", error)
    return NextResponse.json({ error: "Failed to fetch bookings" }, { status: 500 })
  }
}
