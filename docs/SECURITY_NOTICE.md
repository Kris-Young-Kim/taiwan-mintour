# 보안 주의사항

## ⚠️ 중요: 자격 증명 파일 관리

이 저장소에는 **절대로** 다음 파일들을 커밋하지 마세요:

- Google OAuth Client Secret 파일 (`client_secret*.json`)
- Google Service Account 키 파일 (`service-account*.json`)
- 환경 변수 파일 (`.env`, `.env.local`)
- 기타 자격 증명이 포함된 파일

## 이미 커밋된 자격 증명이 있다면

만약 실수로 자격 증명 파일을 커밋했다면:

1. **즉시 해당 자격 증명을 무효화하세요**
   - Google Cloud Console에서 OAuth Client 삭제 또는 재생성
   - Service Account 키 삭제 및 재생성

2. **Git 히스토리에서 제거**
   ```bash
   git filter-branch --force --index-filter \
     "git rm --cached --ignore-unmatch docs/client_secret*.json" \
     --prune-empty --tag-name-filter cat -- --all
   ```

3. **강제 푸시** (주의: 팀원과 협의 후 진행)
   ```bash
   git push origin --force --all
   ```

## 안전한 자격 증명 관리

### 로컬 개발
- `.env.local` 파일 사용 (이미 `.gitignore`에 포함됨)
- 절대 커밋하지 않음

### 프로덕션 배포
- Vercel 환경 변수 사용
- GitHub Secrets 사용 (CI/CD용)

## 현재 무시되는 파일

`.gitignore`에 다음 패턴이 포함되어 있습니다:
- `**/client_secret*.json`
- `**/service-account*.json`
- `**/*credentials*.json`
- `**/*.apps.googleusercontent.com.json`
- `docs/client_secret*.json`
- `.env*.local`
- `.env`

