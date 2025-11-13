import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface RoomAssignmentProps {
  guests: number
  singleRooms: number
}

export default function RoomAssignment({ guests, singleRooms }: RoomAssignmentProps) {
  const doubleRooms = Math.ceil((guests - singleRooms) / 2)

  return (
    <div className="space-y-6">
      <Alert>
        <AlertDescription>
          객실 배정은 자동으로 처리됩니다. 특별한 요청사항이 있으면 이전 단계에서 입력해주세요.
        </AlertDescription>
      </Alert>

      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="text-lg">객실 구성</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {doubleRooms > 0 && (
            <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
              <p className="font-semibold mb-2">더블룸: {doubleRooms}실</p>
              <p className="text-sm text-foreground/70">
                {doubleRooms}실 × 2명 = {doubleRooms * 2}명 배정
              </p>
            </div>
          )}

          {singleRooms > 0 && (
            <div className="p-4 bg-accent/5 rounded-lg border border-accent/20">
              <p className="font-semibold mb-2">싱글룸: {singleRooms}실</p>
              <p className="text-sm text-foreground/70">
                {singleRooms}실 × 1명 = {singleRooms}명 배정
              </p>
              <p className="text-sm text-accent font-semibold mt-2">추가 요금: ₩{330_000 * singleRooms}</p>
            </div>
          )}

          <div className="border-t border-border/50 pt-4">
            <div className="flex justify-between">
              <span>총 인원</span>
              <span className="font-bold">{guests}명</span>
            </div>
            <div className="flex justify-between text-sm text-foreground/70 mt-1">
              <span>총 객실수</span>
              <span>{doubleRooms + singleRooms}실</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border border-blue-200 dark:border-blue-800 text-sm">
        <p className="text-foreground/80">
          룸메이트 배정은 예약 후 연락을 드려 협의하게 됩니다. 특별한 요청사항이 있으면 미리 알려주세요.
        </p>
      </div>
    </div>
  )
}
