# 구현 계획 및 진행 가이드

## 현재 프로젝트 상태

### ✅ 완료된 작업
- Next.js 프로젝트 초기화 및 기본 구조
- UI 컴포넌트 라이브러리 (Radix UI 기반)
- 랜딩 페이지 컴포넌트들 (Hero, Features, Pricing 등)
- 예약 페이지 기본 구조
- 관리자 대시보드 기본 구조
- 일정 페이지 기본 구조
- Google Sheets API 클라이언트 설정 (`lib/google-sheets.ts`)
- 데이터베이스 함수 구현 (`lib/db.ts`)

### ⚠️ 아직 해야 할 작업
- Google Spreadsheet 생성 및 시트 설정
- Google Cloud 프로젝트 설정
- Clerk 인증 설정
- API 라우트 실제 구현
- 결제 시스템 연동

---

## 단계별 구현 계획

### 🔵 1단계: 프로젝트 기반 설정 (우선순위: 최우선)

이 단계는 모든 기능의 기반이 되는 중요한 설정입니다.

#### 1.1 Google Spreadsheet 설정

**해야 할 일:**
1. Google Spreadsheet 생성 및 시트 설정
2. Google Cloud 프로젝트 생성 및 서비스 계정 설정
3. `.env.local` 파일에 환경 변수 추가

**필요한 환경 변수:**
```env
GOOGLE_SERVICE_ACCOUNT_EMAIL=your_service_account_email
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_SPREADSHEET_ID=your_spreadsheet_id
```

**설정 파일:**
- `lib/google-sheets.ts` - Google Sheets API 클라이언트 설정
- `scripts/01-create-google-sheets.md` - 상세 설정 가이드

#### 1.2 Clerk 인증 설정

**해야 할 일:**
1. [Clerk](https://clerk.com)에 가입 및 프로젝트 생성
2. 인증 방법 설정 (이메일, 소셜 로그인 등)
3. 환경 변수 추가

**필요한 환경 변수:**
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
```

**설정 파일 생성:**
- `lib/auth.ts` - Clerk 인증 설정
- `middleware.ts` - 인증 미들웨어

#### 1.3 의존성 설치

**설치할 패키지:**
```bash
pnpm add googleapis @clerk/nextjs
```

---

### 🟢 2단계: 데이터베이스 설정 (우선순위: 높음)

#### 2.1 Google Spreadsheet 시트 생성

**해야 할 일:**
1. Google Spreadsheet에서 다음 시트 생성:
   - Packages
   - Bookings
   - Guests
   - Rooms
   - Payments
   - Itineraries (선택사항)
2. 각 시트에 헤더 행 입력
3. 샘플 패키지 데이터 입력

**확인 사항:**
- 모든 시트가 정상적으로 생성되었는지
- 헤더 행이 올바르게 입력되었는지
- 샘플 패키지 데이터가 입력되었는지

#### 2.2 초기 데이터 입력

**입력할 데이터:**
- 여행 패키지 정보 (Packages 시트)
- 일정(itineraries) 데이터 (Itineraries 시트, 선택사항)

**참고:**
- `scripts/01-create-google-sheets.md` 파일에 상세 가이드가 있습니다

---

### 🟡 3단계: 백엔드 연동 (우선순위: 높음)

#### 3.1 Google Sheets 클라이언트 설정

**파일: `lib/google-sheets.ts`** ✅ 완료
- Google Sheets API 클라이언트 생성
- 서비스 계정 인증
- 읽기/쓰기 함수 구현

#### 3.2 데이터베이스 함수 구현

**파일: `lib/db.ts`** ✅ 완료
- `getPackages()` - 패키지 목록 조회 (Google Sheets에서)
- `createBooking()` - 예약 생성 (Google Sheets에 추가)
- `getBooking()` - 예약 조회 (Google Sheets에서)
- `updateBooking()` - 예약 수정 (Google Sheets 업데이트)
- `getAdminStats()` - 관리자 통계 (Google Sheets 집계)

#### 3.3 API 라우트 구현

**구현할 API:**
- `app/api/bookings/route.ts` - 예약 생성/조회
- `app/api/bookings/[id]/route.ts` - 예약 상세/수정/삭제
- `app/api/admin/stats/route.ts` - 관리자 통계
- `app/api/admin/bookings/route.ts` - 관리자 예약 목록
- `app/api/payments/route.ts` - 결제 처리

---

### 🟠 4단계: 인증 시스템 구현 (우선순위: 중간)

#### 4.1 Clerk 미들웨어 설정

**파일: `middleware.ts`**
- 인증이 필요한 페이지 보호
- 관리자 페이지 접근 제어

#### 4.2 인증 페이지

**구현할 페이지:**
- 로그인 페이지 (Clerk 기본 제공 또는 커스텀)
- 회원가입 페이지
- 프로필 페이지

#### 4.3 역할 기반 접근 제어

**구현할 기능:**
- 관리자 역할 확인
- 관리자 대시보드 접근 제어
- 사용자 정보 Supabase 동기화

---

### 🔴 5단계: 결제 시스템 연동 (우선순위: 중간)

#### 5.1 결제 API 선택

**옵션:**
- **Toss Payments** (한국 결제, 추천)
- **Stripe** (국제 결제)

#### 5.2 결제 연동

**구현할 기능:**
- 결제 요청 생성
- 결제 상태 확인
- 결제 웹훅 처리
- 환불 처리

---

### ⚪ 6단계: 추가 기능 및 최적화 (우선순위: 낮음)

#### 6.1 SEO 최적화
- 메타 태그 설정
- 사이트맵 생성
- robots.txt 설정

#### 6.2 성능 최적화
- 이미지 최적화
- 코드 스플리팅
- 캐싱 전략

#### 6.3 테스트
- 기능 테스트
- 반응형 테스트
- 보안 테스트

---

## 시작하기 전 체크리스트

### 필수 준비사항
- [ ] Supabase 계정 생성
- [ ] Clerk 계정 생성
- [ ] 결제 API 계정 선택 (Toss Payments 또는 Stripe)
- [ ] 환경 변수 파일 준비

### 개발 환경
- [ ] Node.js 설치 확인
- [ ] pnpm 설치 확인
- [ ] Git 설정 확인

---

## 다음 단계

**지금 바로 시작할 작업:**
1. Supabase 프로젝트 생성
2. Clerk 프로젝트 생성
3. 환경 변수 파일 생성
4. Supabase 클라이언트 설정 파일 생성

이 작업들을 완료하면 실제 데이터베이스 연동을 시작할 수 있습니다.

---

## 참고 자료

- [Supabase 문서](https://supabase.com/docs)
- [Clerk 문서](https://clerk.com/docs)
- [Toss Payments 문서](https://developers.toss.im/docs)
- [Next.js 문서](https://nextjs.org/docs)

