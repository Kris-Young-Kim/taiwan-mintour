import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const bookingId = params.id

    console.log("[v0] Fetching booking:", bookingId)

    // Mock database query
    const booking = {
      id: bookingId,
      bookingNumber: "BK001",
      nameKo: "김미영",
      guests: 2,
      singleRooms: 0,
      totalAmount: 2_700_000,
      paymentStatus: "completed",
      packageDetails: {
        departure: "2026-06-13",
        return: "2026-06-16",
        hotel: "Chong Yu Hotel 4성급",
      },
    }

    return NextResponse.json(booking)
  } catch (error) {
    console.error("[v0] Fetch error:", error)
    return NextResponse.json({ error: "Booking not found" }, { status: 404 })
  }
}

// PUT endpoint for updating booking status
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const bookingId = params.id
    const body = await request.json()

    console.log("[v0] Updating booking:", bookingId, body)

    // Mock database update
    const updatedBooking = {
      id: bookingId,
      ...body,
      updatedAt: new Date().toISOString(),
    }

    return NextResponse.json(updatedBooking)
  } catch (error) {
    console.error("[v0] Update error:", error)
    return NextResponse.json({ error: "Failed to update booking" }, { status: 500 })
  }
}

// DELETE endpoint for cancelling booking
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const bookingId = params.id

    console.log("[v0] Cancelling booking:", bookingId)

    return NextResponse.json({
      success: true,
      message: "Booking cancelled successfully",
    })
  } catch (error) {
    console.error("[v0] Delete error:", error)
    return NextResponse.json({ error: "Failed to cancel booking" }, { status: 500 })
  }
}
