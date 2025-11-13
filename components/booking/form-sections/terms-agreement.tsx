"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface TermsAgreementProps {
  formData: any
  setFormData: (data: any) => void
}

export default function TermsAgreement({ formData, setFormData }: TermsAgreementProps) {
  return (
    <div className="space-y-6">
      <Alert className="border-primary/20 bg-primary/5">
        <AlertDescription>예약을 완료하기 전에 모든 필수 약관에 동의해주세요</AlertDescription>
      </Alert>

      {/* Terms Content */}
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="text-lg">여행 약관</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-background p-4 rounded-lg h-64 overflow-y-auto border border-border/50 mb-4 text-sm">
            <p className="text-foreground/70 whitespace-pre-wrap">
              {`1. 예약 및 취소
- 예약은 선입금(50%) 이후에 확정됩니다.
- 출발 30일 이전 취소 시 선입금 반환
- 출발 14일 이전 취소 시 선입금 반환 안함
- 출발 7일 이전 취소 시 전액 환불 안함

2. 여행 일정
- 기후, 항공사 사정 등으로 일정 변경 가능
- 출발 1주일 전 최종 일정 공지

3. 보험
- 여행자 보험 자동 포함 (추가비용 있음)
- 의료비, 상해, 휴대품 손상 등 보장

4. 책임 제한
- 회사는 천재지변, 항공사 사정에 대해 책임 없음`}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Agreement Checkboxes */}
      <div className="space-y-4">
        <label className="flex items-start gap-3 p-4 border border-border rounded-lg cursor-pointer hover:bg-muted/30 transition-colors">
          <input
            type="checkbox"
            checked={formData.termsAgreed}
            onChange={(e) => setFormData({ ...formData, termsAgreed: e.target.checked })}
            className="w-4 h-4 mt-1"
            required
          />
          <span className="text-sm">
            <span className="font-semibold">여행 약관에 동의합니다</span>
            <span className="text-foreground/60 block text-xs mt-1">(필수)</span>
          </span>
        </label>

        <label className="flex items-start gap-3 p-4 border border-border rounded-lg cursor-pointer hover:bg-muted/30 transition-colors">
          <input
            type="checkbox"
            checked={formData.privacyAgreed}
            onChange={(e) => setFormData({ ...formData, privacyAgreed: e.target.checked })}
            className="w-4 h-4 mt-1"
            required
          />
          <span className="text-sm">
            <span className="font-semibold">개인정보 수집 및 이용에 동의합니다</span>
            <span className="text-foreground/60 block text-xs mt-1">(필수)</span>
          </span>
        </label>

        <label className="flex items-start gap-3 p-4 border border-border rounded-lg cursor-pointer hover:bg-muted/30 transition-colors">
          <input
            type="checkbox"
            checked={formData.paymentAgreed}
            onChange={(e) => setFormData({ ...formData, paymentAgreed: e.target.checked })}
            className="w-4 h-4 mt-1"
            required
          />
          <span className="text-sm">
            <span className="font-semibold">결제 규정에 동의합니다</span>
            <span className="text-foreground/60 block text-xs mt-1">(필수)</span>
          </span>
        </label>

        <label className="flex items-start gap-3 p-4 border border-border rounded-lg cursor-pointer hover:bg-muted/30 transition-colors">
          <input
            type="checkbox"
            checked={formData.marketingAgreed}
            onChange={(e) => setFormData({ ...formData, marketingAgreed: e.target.checked })}
            className="w-4 h-4 mt-1"
          />
          <span className="text-sm">
            <span className="font-semibold">마케팅 정보 수신에 동의합니다</span>
            <span className="text-foreground/60 block text-xs mt-1">(선택)</span>
          </span>
        </label>
      </div>

      <Alert className="border-accent/20 bg-accent/5">
        <AlertDescription className="text-sm">
          예약 완료 후 입력하신 이메일로 예약 확인서가 발송됩니다. 예약번호와 함께 여행 정보, 출발 안내 등이 포함됩니다.
        </AlertDescription>
      </Alert>
    </div>
  )
}
