"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface PersonalInfoProps {
  formData: any
  setFormData: (data: any) => void
  guests: number
  onGuestsChange: (value: number) => void
  singleRooms: number
  onSingleRoomsChange: (value: number) => void
}

export default function PersonalInfo({
  formData,
  setFormData,
  guests,
  onGuestsChange,
  singleRooms,
  onSingleRoomsChange,
}: PersonalInfoProps) {
  return (
    <div className="space-y-6">
      {/* Booking Options */}
      <Card className="border-accent/20 bg-accent/5">
        <CardHeader>
          <CardTitle className="text-lg">인원 및 객실 선택</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <Label className="mb-2 block">인원수</Label>
              <Select value={guests.toString()} onValueChange={(v) => onGuestsChange(Number.parseInt(v))}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                    <SelectItem key={n} value={n.toString()}>
                      {n}명
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="mb-2 block">싱글룸 수</Label>
              <Select value={singleRooms.toString()} onValueChange={(v) => onSingleRoomsChange(Number.parseInt(v))}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: guests + 1 }, (_, i) => i).map((n) => (
                    <SelectItem key={n} value={n.toString()}>
                      {n === 0 ? "없음" : `${n}실 (+₩${330_000 * n})`}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="bg-background p-4 rounded-lg text-sm">
            <p className="text-foreground/70">싱글룸을 선택하면 1인 1실로 객실이 배정됩니다.</p>
          </div>
        </CardContent>
      </Card>

      {/* Personal Information */}
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="text-lg">예약자 정보</CardTitle>
          <p className="text-sm text-foreground/60 mt-2">여권과 동일하게 입력해주세요</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="nameKo" className="mb-2 block">
                성명 (한글)
              </Label>
              <Input
                id="nameKo"
                placeholder="홍길동"
                value={formData.nameKo}
                onChange={(e) => setFormData({ ...formData, nameKo: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="nameEn" className="mb-2 block">
                성명 (영문)
              </Label>
              <Input
                id="nameEn"
                placeholder="HONG GILDONG"
                value={formData.nameEn}
                onChange={(e) => setFormData({ ...formData, nameEn: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="birthDate" className="mb-2 block">
                생년월일
              </Label>
              <Input
                id="birthDate"
                type="date"
                value={formData.birthDate}
                onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                required
              />
            </div>
            <div>
              <Label className="mb-2 block">성별</Label>
              <Select value={formData.gender} onValueChange={(v) => setFormData({ ...formData, gender: v })}>
                <SelectTrigger>
                  <SelectValue placeholder="선택해주세요" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">남성</SelectItem>
                  <SelectItem value="female">여성</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="phone" className="mb-2 block">
                연락처
              </Label>
              <Input
                id="phone"
                placeholder="010-0000-0000"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="email" className="mb-2 block">
                이메일
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Passport Information */}
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="text-lg">여권 정보 (선택사항)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border border-blue-200 dark:border-blue-800 text-sm">
            <p className="text-foreground/80">
              여권 유효기간은 출발일 기준 6개월 이상이어야 합니다. 출발 2주 전까지 여권 사본을 이메일로 제출해주세요.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="passportNumber" className="mb-2 block">
                여권 번호
              </Label>
              <Input
                id="passportNumber"
                placeholder="M123456789"
                value={formData.passportNumber}
                onChange={(e) => setFormData({ ...formData, passportNumber: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="passportExpiry" className="mb-2 block">
                여권 만료일
              </Label>
              <Input
                id="passportExpiry"
                type="date"
                value={formData.passportExpiry}
                onChange={(e) => setFormData({ ...formData, passportExpiry: e.target.value })}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Special Requests */}
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="text-lg">특별 요청사항</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Label className="mb-3 block">식이 제한</Label>
            <div className="space-y-2">
              {["채식", "할랄", "알레르기", "기타"].map((option) => (
                <label key={option} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.dietaryRestrictions.includes(option)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setFormData({
                          ...formData,
                          dietaryRestrictions: [...formData.dietaryRestrictions, option],
                        })
                      } else {
                        setFormData({
                          ...formData,
                          dietaryRestrictions: formData.dietaryRestrictions.filter((r: string) => r !== option),
                        })
                      }
                    }}
                    className="w-4 h-4 rounded border-border"
                  />
                  <span className="text-sm">{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <Label htmlFor="medicalInfo" className="mb-2 block">
              의료 정보
            </Label>
            <textarea
              id="medicalInfo"
              placeholder="가이드가 알아야 할 건강 정보를 입력해주세요"
              value={formData.medicalInfo}
              onChange={(e) => setFormData({ ...formData, medicalInfo: e.target.value })}
              className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground text-sm"
              rows={3}
            />
          </div>

          <div>
            <Label htmlFor="specialRequests" className="mb-2 block">
              기타 요청사항
            </Label>
            <textarea
              id="specialRequests"
              placeholder="특별히 요청하실 사항을 입력해주세요"
              value={formData.specialRequests}
              onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
              className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground text-sm"
              rows={3}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
