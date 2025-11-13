# 환경 변수 설정 가이드

프로젝트 루트에 `.env.local` 파일을 생성하고 아래 내용을 복사한 후, 실제 값으로 채워넣으세요.

```env
# Google Sheets 설정
# Google Cloud Console에서 서비스 계정을 생성한 후 JSON 키 파일에서 확인할 수 있습니다
# 자세한 내용은 scripts/01-create-google-sheets.md를 참고하세요
GOOGLE_SERVICE_ACCOUNT_EMAIL=your_service_account_email@your-project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_SPREADSHEET_ID=your_spreadsheet_id_here

# Clerk 인증 설정
# Clerk 대시보드(https://clerk.com)에서 프로젝트 설정 → API Keys에서 확인할 수 있습니다
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# 결제 API 설정 (선택사항 - 나중에 설정)
# Toss Payments 사용 시
TOSS_PAYMENTS_CLIENT_KEY=your_toss_client_key
TOSS_PAYMENTS_SECRET_KEY=your_toss_secret_key

# 또는 Stripe 사용 시
# STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
# STRIPE_SECRET_KEY=your_stripe_secret_key

# 기타 설정
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## 중요 사항

- `.env.local` 파일은 Git에 커밋되지 않습니다 (보안상 이유)
- 실제 키 값은 절대 공유하거나 GitHub에 올리지 마세요
- `GOOGLE_PRIVATE_KEY`는 JSON 키 파일의 `private_key` 값을 그대로 복사하세요 (줄바꿈 문자 포함)
- `GOOGLE_PRIVATE_KEY`는 큰따옴표로 감싸야 합니다
