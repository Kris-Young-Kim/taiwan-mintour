"use client"
import Header from "@/components/header"
import Footer from "@/components/footer"
import BookingSummary from "@/components/booking/booking-summary"
import BookingForm from "@/components/booking/booking-form"
import { useState } from "react"

export default function BookingPage() {
  const [guests, setGuests] = useState(1)
  const [singleRooms, setSingleRooms] = useState(0)

  const BASE_PRICE = 1_350_000
  const SINGLE_ROOM_PRICE = 330_000

  const totalPrice = BASE_PRICE * guests + SINGLE_ROOM_PRICE * singleRooms

  return (
    <>
      <Header />
      <main className="min-h-screen bg-muted/30">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left: Form */}
            <div className="lg:col-span-2">
              <BookingForm
                guests={guests}
                singleRooms={singleRooms}
                onGuestsChange={setGuests}
                onSingleRoomsChange={setSingleRooms}
              />
            </div>

            {/* Right: Sticky Summary */}
            <div className="lg:col-span-1">
              <BookingSummary
                guests={guests}
                singleRooms={singleRooms}
                totalPrice={totalPrice}
                basePrice={BASE_PRICE}
                singleRoomPrice={SINGLE_ROOM_PRICE}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
