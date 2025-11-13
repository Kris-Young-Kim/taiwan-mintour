# V0 프롬프트: 사이트 아키텍처 설계

## 프롬프트

Next.js 기반 대만 여행 패키지 웹사이트의 전체 아키텍처를 설계해줘.

### 1. 프로젝트 구조
```
/pages
  - index.tsx (랜딩 페이지)
  - /itinerary (상세 일정)
  - /booking (예약 페이지)
  - /admin (관리자 대시보드)
  - /confirmation (예약 완료)
/components
  - Header
  - Footer
  - Navigation
  - BookingForm
  - PriceCalculator
  - AdminStats
/lib
  - supabase.ts (데이터베이스 연동)
  - auth.ts (Clerk 인증)
/public
  - /images (타이베이 관광지, 호텔 이미지)
```

### 2. Supabase 데이터베이스 테이블 설계
- users (Clerk와 연동)
- bookings (예약 정보)
- itineraries (일정)
- hotels (호텔 정보)
- meals (식사 정보)
- attractions (관광지)

### 3. API 엔드포인트 예시
- POST /api/bookings (예약 생성)
- GET /api/bookings/:id (예약 조회)
- PUT /api/bookings/:id (예약 수정)
- DELETE /api/bookings/:id (예약 취소)
- GET /api/admin/stats (대시보드 통계)

### 4. Clerk 인증 설정
- 회원가입/로그인 페이지
- JWT 토큰 기반 인증
- 역할 기반 접근 제어 (RBAC)

### 5. 배포 및 CI/CD
- GitHub Actions 기반 자동 배포
- Vercel 배포
- 환경 변수 관리 (.env.local)

### 6. SEO 최적화
- 메타 태그 설정
- 오픈그래프(OG) 이미지
- 사이트맵 생성
