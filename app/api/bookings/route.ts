import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    console.log("[v0] Booking received:", body)

    // Validate required fields
    if (!body.nameKo || !body.email || !body.guests) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Generate booking number
    const bookingNumber = `BK${Date.now()}`

    // Calculate total amount
    const basePrice = 1_350_000
    const singleRoomPrice = 330_000
    const totalAmount = basePrice * body.guests + singleRoomPrice * (body.singleRooms || 0)

    // Mock database insertion
    const booking = {
      id: Math.random().toString(36).substr(2, 9),
      bookingNumber,
      nameKo: body.nameKo,
      email: body.email,
      guests: body.guests,
      singleRooms: body.singleRooms || 0,
      totalAmount,
      paymentStatus: "pending",
      createdAt: new Date().toISOString(),
    }

    console.log("[v0] Booking created:", booking)

    return NextResponse.json(booking, { status: 201 })
  } catch (error) {
    console.error("[v0] Booking error:", error)
    return NextResponse.json({ error: "Failed to create booking" }, { status: 500 })
  }
}

// GET endpoint for retrieving bookings
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const email = searchParams.get("email")

    console.log("[v0] Fetching bookings for email:", email)

    // Mock database query
    const mockBookings = [
      {
        id: "1",
        bookingNumber: "BK001",
        email: email,
        guests: 2,
        singleRooms: 0,
        totalAmount: 2_700_000,
        paymentStatus: "completed",
        createdAt: new Date().toISOString(),
      },
    ]

    return NextResponse.json(mockBookings)
  } catch (error) {
    console.error("[v0] Fetch error:", error)
    return NextResponse.json({ error: "Failed to fetch bookings" }, { status: 500 })
  }
}
