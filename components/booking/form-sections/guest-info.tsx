import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface GuestInfoProps {
  guests: number
}

export default function GuestInfo({ guests }: GuestInfoProps) {
  return (
    <div className="space-y-6">
      <Alert>
        <AlertDescription>예약자를 포함하여 총 {guests}명의 참가자 정보를 입력해주세요</AlertDescription>
      </Alert>

      {Array.from({ length: guests }, (_, i) => (
        <Card key={i} className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-lg">참가자 {i + 1}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <Label className="mb-2 block">성명 (한글)</Label>
                <Input placeholder="홍길동" />
              </div>
              <div>
                <Label className="mb-2 block">성명 (영문)</Label>
                <Input placeholder="HONG GILDONG" />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <Label className="mb-2 block">생년월일</Label>
                <Input type="date" />
              </div>
              <div>
                <Label className="mb-2 block">성별</Label>
                <select className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground text-sm">
                  <option>선택해주세요</option>
                  <option>남성</option>
                  <option>여성</option>
                </select>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <Label className="mb-2 block">여권 번호</Label>
                <Input placeholder="M123456789" />
              </div>
              <div>
                <Label className="mb-2 block">연락처</Label>
                <Input placeholder="010-0000-0000" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
