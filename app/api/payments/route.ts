import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    console.log("[v0] Processing payment:", body)

    if (!body.bookingId || !body.amount || !body.paymentMethod) {
      return NextResponse.json({ error: "Missing required payment fields" }, { status: 400 })
    }

    // Mock payment processing
    const payment = {
      id: Math.random().toString(36).substr(2, 9),
      bookingId: body.bookingId,
      amount: body.amount,
      paymentMethod: body.paymentMethod,
      status: "completed",
      transactionId: `TXN${Date.now()}`,
      processedAt: new Date().toISOString(),
    }

    console.log("[v0] Payment processed:", payment)

    return NextResponse.json(payment, { status: 201 })
  } catch (error) {
    console.error("[v0] Payment error:", error)
    return NextResponse.json({ error: "Payment processing failed" }, { status: 500 })
  }
}
