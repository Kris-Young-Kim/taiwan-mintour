/**
 * Next.js 미들웨어
 * 
 * 이 파일은 모든 요청을 가로채서 인증을 확인합니다.
 * Clerk를 사용하여 인증이 필요한 페이지를 보호합니다.
 */

import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// 인증이 필요한 경로 정의
const isProtectedRoute = createRouteMatcher([
  '/admin(.*)',  // /admin으로 시작하는 모든 경로
  '/booking(.*)', // /booking으로 시작하는 모든 경로 (선택사항)
])

export default clerkMiddleware(async (auth, req) => {
  // 보호된 경로인지 확인
  if (isProtectedRoute(req)) {
    // 인증 확인
    await auth.protect()
    
    // 관리자 페이지인 경우 추가 권한 확인
    if (req.nextUrl.pathname.startsWith('/admin')) {
      const { userId } = await auth()
      
      if (!userId) {
        // 로그인하지 않은 경우 로그인 페이지로 리다이렉트
        const signInUrl = new URL('/sign-in', req.url)
        return Response.redirect(signInUrl)
      }
      
      // TODO: 관리자 권한 확인 로직 추가
      // 현재는 모든 로그인한 사용자가 접근 가능
      // 실제로는 사용자의 role을 확인해야 합니다
    }
  }
})

export const config = {
  matcher: [
    // 다음 경로를 제외한 모든 경로에 미들웨어 적용
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}

