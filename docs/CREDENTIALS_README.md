# 자격 증명 파일 관리

## ⚠️ 중요: 이 파일들은 절대 Git에 커밋하지 마세요!

다음 파일들은 **보안상의 이유로 Git 저장소에 포함되어서는 안 됩니다**:

- `docs/client_secret_*.json` - Google OAuth Client Secret
- `**/service-account*.json` - Google Service Account 키
- `.env.local` - 로컬 환경 변수
- 기타 자격 증명이 포함된 모든 파일

## 현재 상태

이 파일들은 `.gitignore`에 포함되어 있어 Git에서 무시됩니다.

## 파일이 필요한 경우

### 로컬 개발
- 파일을 로컬에만 보관하세요
- `.env.local` 파일 사용을 권장합니다

### 프로덕션 배포
- Vercel 환경 변수 사용
- GitHub Secrets 사용 (CI/CD)

## 이미 커밋된 경우

만약 실수로 자격 증명을 커밋했다면:

1. **즉시 Google Cloud Console에서 해당 자격 증명을 무효화하세요**
2. Git에서 파일 제거 (이미 완료됨)
3. GitHub에서 해당 커밋의 secret을 allow하거나, 새로운 브랜치로 시작

## 참고

- 자세한 내용은 `docs/SECURITY_NOTICE.md` 참고

