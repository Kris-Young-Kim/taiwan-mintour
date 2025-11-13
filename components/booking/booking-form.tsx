"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import PersonalInfo from "./form-sections/personal-info"
import GuestInfo from "./form-sections/guest-info"
import RoomAssignment from "./form-sections/room-assignment"
import PaymentMethod from "./form-sections/payment-method"
import TermsAgreement from "./form-sections/terms-agreement"

interface BookingFormProps {
  guests: number
  singleRooms: number
  onGuestsChange: (value: number) => void
  onSingleRoomsChange: (value: number) => void
}

export default function BookingForm({ guests, singleRooms, onGuestsChange, onSingleRoomsChange }: BookingFormProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Personal Info
    nameKo: "",
    nameEn: "",
    birthDate: "",
    gender: "",
    phone: "",
    email: "",
    passportNumber: "",
    passportExpiry: "",

    // Special Requests
    dietaryRestrictions: [] as string[],
    medicalInfo: "",
    specialRequests: "",

    // Payment
    paymentMethod: "card",
    cardType: "",
    installments: "1",

    // Terms
    termsAgreed: false,
    privacyAgreed: false,
    paymentAgreed: false,
    marketingAgreed: false,
  })

  const steps = [
    { number: 1, label: "예약자 정보" },
    { number: 2, label: "참가자 정보" },
    { number: 3, label: "객실 배정" },
    { number: 4, label: "결제 방법" },
    { number: 5, label: "약관 동의" },
  ]

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Booking submitted:", formData)
    // Payment processing would happen here
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Progress Bar */}
      <Card className="border-primary/20">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between mb-4">
            {steps.map((step, idx) => (
              <div key={step.number} className="flex items-center flex-1">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm transition-colors ${
                    step.number <= currentStep ? "bg-primary text-primary-foreground" : "bg-muted text-foreground/60"
                  }`}
                >
                  {step.number}
                </div>
                {idx < steps.length - 1 && (
                  <div
                    className={`flex-1 h-1 mx-2 transition-colors ${
                      step.number < currentStep ? "bg-primary" : "bg-muted"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <p className="text-sm text-foreground/70 text-center">{steps[currentStep - 1].label}</p>
        </CardContent>
      </Card>

      {/* Form Sections */}
      {currentStep === 1 && (
        <PersonalInfo
          formData={formData}
          setFormData={setFormData}
          guests={guests}
          onGuestsChange={onGuestsChange}
          singleRooms={singleRooms}
          onSingleRoomsChange={onSingleRoomsChange}
        />
      )}

      {currentStep === 2 && <GuestInfo guests={guests} />}

      {currentStep === 3 && <RoomAssignment guests={guests} singleRooms={singleRooms} />}

      {currentStep === 4 && <PaymentMethod formData={formData} setFormData={setFormData} />}

      {currentStep === 5 && <TermsAgreement formData={formData} setFormData={setFormData} />}

      {/* Navigation Buttons */}
      <div className="flex gap-3">
        <Button
          type="button"
          variant="outline"
          onClick={handlePrev}
          disabled={currentStep === 1}
          className="flex-1 bg-transparent"
        >
          이전
        </Button>
        {currentStep < steps.length ? (
          <Button type="button" onClick={handleNext} className="flex-1 bg-primary hover:bg-primary/90">
            다음
          </Button>
        ) : (
          <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90">
            예약 완료
          </Button>
        )}
      </div>
    </form>
  )
}
