"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface PaymentMethodProps {
  formData: any
  setFormData: (data: any) => void
}

export default function PaymentMethod({ formData, setFormData }: PaymentMethodProps) {
  return (
    <div className="space-y-6">
      {/* Payment Method Selection */}
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="text-lg">결제 수단 선택</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {["card", "transfer", "easy"].map((method) => (
            <label
              key={method}
              className="flex items-start gap-4 p-4 border border-border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
              style={{ borderColor: formData.paymentMethod === method ? "var(--color-primary)" : undefined }}
            >
              <input
                type="radio"
                name="paymentMethod"
                value={method}
                checked={formData.paymentMethod === method}
                onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                className="w-4 h-4 mt-1"
              />
              <div className="flex-1">
                <p className="font-semibold">
                  {method === "card" && "신용카드"}
                  {method === "transfer" && "계좌이체"}
                  {method === "easy" && "간편결제"}
                </p>
                <p className="text-sm text-foreground/60 mt-1">
                  {method === "card" && "VISA, 마스터카드, JCB, 국내카드"}
                  {method === "transfer" && "국내 은행 계좌이체"}
                  {method === "easy" && "카카오페이, 네이버페이, 토스"}
                </p>
              </div>
            </label>
          ))}
        </CardContent>
      </Card>

      {/* Credit Card Options */}
      {formData.paymentMethod === "card" && (
        <Card className="border-accent/20 bg-accent/5">
          <CardHeader>
            <CardTitle className="text-lg">카드 정보</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <Label className="mb-2 block">카드 종류</Label>
                <Select value={formData.cardType} onValueChange={(v) => setFormData({ ...formData, cardType: v })}>
                  <SelectTrigger>
                    <SelectValue placeholder="선택해주세요" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="visa">VISA</SelectItem>
                    <SelectItem value="mastercard">Mastercard</SelectItem>
                    <SelectItem value="jcb">JCB</SelectItem>
                    <SelectItem value="bc">BC 카드</SelectItem>
                    <SelectItem value="samsung">삼성 카드</SelectItem>
                    <SelectItem value="hyundai">현대 카드</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="mb-2 block">할부 옵션</Label>
                <Select
                  value={formData.installments}
                  onValueChange={(v) => setFormData({ ...formData, installments: v })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">일시불</SelectItem>
                    <SelectItem value="3">3개월 무이자</SelectItem>
                    <SelectItem value="6">6개월 무이자</SelectItem>
                    <SelectItem value="12">12개월</SelectItem>
                    <SelectItem value="24">24개월</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="bg-background p-4 rounded-lg text-sm">
              <p className="text-foreground/70">무이자 할부는 5만원 이상 구매 시 가능합니다.</p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Bank Transfer Info */}
      {formData.paymentMethod === "transfer" && (
        <Card className="border-accent/20 bg-accent/5">
          <CardHeader>
            <CardTitle className="text-lg">계좌이체 정보</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label className="mb-2 block">은행 선택</Label>
              <select className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground text-sm">
                <option>선택해주세요</option>
                <option>국민은행</option>
                <option>우리은행</option>
                <option>하나은행</option>
                <option>신한은행</option>
              </select>
            </div>

            <div className="bg-background p-4 rounded-lg space-y-2 text-sm">
              <p>
                <span className="font-semibold">계좌번호:</span> 123-456-789012
              </p>
              <p>
                <span className="font-semibold">예금주:</span> 민투어
              </p>
              <p className="text-foreground/70 mt-3">입금 후 입금자명 및 예약번호를 카톡으로 알려주세요</p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Easy Payment */}
      {formData.paymentMethod === "easy" && (
        <Card className="border-accent/20 bg-accent/5">
          <CardHeader>
            <CardTitle className="text-lg">간편결제</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-foreground/70">결제 버튼을 클릭하면 선택한 간편결제 서비스로 이동합니다.</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
