# 프로젝트 설정 체크리스트

이 문서는 프로젝트 초기 설정을 단계별로 확인할 수 있는 체크리스트입니다.

## ✅ 1단계: 프로젝트 구조 설정

- [x] Next.js 프로젝트 초기화 (TypeScript)
- [x] `/app` 디렉토리 생성
- [x] `/components` 디렉토리 생성
- [x] `/lib` 디렉토리 생성
  - [x] `google-sheets.ts` - Google Sheets API 클라이언트
  - [x] `auth.ts` - Clerk 인증 설정
  - [x] `db.ts` - 데이터베이스 함수
- [x] `/public/images` 디렉토리 생성
- [x] Tailwind CSS 설정 완료
- [x] TypeScript 설정 완료

## ⏳ 2단계: 의존성 설치

다음 명령어를 실행하여 누락된 패키지를 설치하세요:

```bash
pnpm add googleapis @clerk/nextjs framer-motion
```

- [ ] `googleapis` 설치
- [ ] `@clerk/nextjs` 설치
- [ ] `framer-motion` 설치

**이미 설치된 패키지:**
- [x] React/Next.js
- [x] TypeScript
- [x] Tailwind CSS
- [x] React Hook Form
- [x] Zod
- [x] Recharts

## ⏳ 3단계: 환경 변수 설정

### 3.1 .env.local 파일 생성

프로젝트 루트에 `.env.local` 파일을 생성하세요.

### 3.2 Google Sheets 환경 변수

`ENV_EXAMPLE.md` 파일을 참고하여 다음 변수를 입력하세요:

- [ ] `GOOGLE_SERVICE_ACCOUNT_EMAIL` - 서비스 계정 이메일
- [ ] `GOOGLE_PRIVATE_KEY` - 서비스 계정 개인 키
- [ ] `GOOGLE_SPREADSHEET_ID` - 스프레드시트 ID

**설정 가이드:** `scripts/01-create-google-sheets.md` 참고

### 3.3 Clerk 환경 변수

- [ ] `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` - Clerk 공개 키
- [ ] `CLERK_SECRET_KEY` - Clerk 비밀 키

**설정 가이드:** `docs/SETUP_GUIDE.md` 참고

### 3.4 선택사항 환경 변수

- [ ] 결제 API 키 (Toss Payments 또는 Stripe)
- [ ] Google Maps API 키

## ⏳ 4단계: Google Spreadsheet 설정

### 4.1 스프레드시트 생성

- [ ] Google Spreadsheet 생성
- [ ] 스프레드시트 ID 확인 및 복사

### 4.2 Google Cloud 설정

- [ ] Google Cloud 프로젝트 생성
- [ ] Google Sheets API 활성화
- [ ] 서비스 계정 생성
- [ ] 서비스 계정 키(JSON) 다운로드
- [ ] 스프레드시트에 서비스 계정 공유 (편집자 권한)

**상세 가이드:** `scripts/01-create-google-sheets.md` 참고

### 4.3 시트 생성

- [ ] Packages 시트 생성 및 헤더 입력
- [ ] Bookings 시트 생성 및 헤더 입력
- [ ] Guests 시트 생성 및 헤더 입력
- [ ] Rooms 시트 생성 및 헤더 입력
- [ ] Payments 시트 생성 및 헤더 입력
- [ ] Itineraries 시트 생성 및 헤더 입력 (선택사항)

**헤더 형식:** `scripts/01-create-google-sheets.md` 참고

### 4.4 초기 데이터 입력

- [ ] Packages 시트에 여행 패키지 정보 입력

## ⏳ 5단계: Clerk 설정

- [ ] Clerk 계정 생성
- [ ] Clerk 프로젝트 생성
- [ ] API 키 확인 및 복사
- [ ] 인증 방법 설정 (이메일, 소셜 로그인 등)

**상세 가이드:** `docs/SETUP_GUIDE.md` 참고

## ✅ 6단계: 개발 서버 실행

설정이 완료되면 다음 명령어로 개발 서버를 실행하세요:

```bash
pnpm run dev
```

- [ ] 개발 서버 실행 성공
- [ ] 브라우저에서 http://localhost:3000 접속 확인

---

## 다음 단계

모든 체크리스트를 완료하면 다음 작업을 진행하세요:

1. **API 라우트 구현** - 실제 데이터베이스 연동
2. **인증 시스템 구현** - Clerk 미들웨어 설정
3. **결제 시스템 연동** - Toss Payments 또는 Stripe

자세한 내용은 `docs/IMPLEMENTATION_PLAN.md`를 참고하세요.

