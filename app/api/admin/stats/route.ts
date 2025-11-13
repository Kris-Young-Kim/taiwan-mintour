import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    console.log("[v0] Fetching admin statistics")

    // Mock statistics data
    const stats = {
      totalGuests: 142,
      maxCapacity: 150,
      remainingSeats: 8,
      bookingRate: 94.7,
      totalRevenue: 191_700_000,
      advancedPayment: 95_800_000,
      pendingPayment: 95_900_000,
      totalBookings: 142,
      pendingPayments: 8,
      cancelledBookings: 2,
      revenueByDay: [
        { date: "2026-06-13", amount: 2_700_000, guests: 2 },
        { date: "2026-06-14", amount: 5_400_000, guests: 4 },
        { date: "2026-06-15", amount: 8_100_000, guests: 6 },
        { date: "2026-06-16", amount: 2_700_000, guests: 2 },
      ],
      roomDistribution: {
        double: 68,
        single: 32,
        other: 42,
      },
      costs: {
        flights: 84_200_000,
        hotel: 50_100_000,
        transport: 35_400_000,
        entrance: 16_800_000,
        other: 5_200_000,
      },
    }

    return NextResponse.json(stats)
  } catch (error) {
    console.error("[v0] Stats error:", error)
    return NextResponse.json({ error: "Failed to fetch statistics" }, { status: 500 })
  }
}
