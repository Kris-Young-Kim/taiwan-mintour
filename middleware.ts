import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Clerk는 선택적 (환경 변수가 있을 때만 사용)
// Vercel 배포 시 Clerk가 없어도 정상 작동하도록 안전하게 처리

// Clerk middleware를 동적으로 로드
async function getClerkMiddleware() {
  if (!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) {
    return null;
  }

  try {
    // 동적 import를 사용하여 Clerk 로드 (런타임에만 실행)
    const clerk = await import('@clerk/nextjs/server');
    if (clerk && clerk.clerkMiddleware) {
      return clerk.clerkMiddleware();
    }
  } catch (error) {
    // Clerk가 설치되지 않았거나 로드할 수 없으면 null 반환
    // Vercel 배포 시 Clerk가 없어도 정상 작동하도록 함
    return null;
  }

  return null;
}

// Clerk middleware를 미리 초기화 (최초 요청 시에만 실행)
let clerkMiddlewarePromise: Promise<((req: NextRequest) => NextResponse | Promise<NextResponse>) | null> | null = null;
let clerkMiddleware: ((req: NextRequest) => NextResponse | Promise<NextResponse>) | null = null;

export default async function middleware(request: NextRequest) {
  // Clerk middleware를 지연 로드 (최초 요청 시에만 초기화)
  if (clerkMiddlewarePromise === null && process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) {
    clerkMiddlewarePromise = getClerkMiddleware();
    clerkMiddleware = await clerkMiddlewarePromise;
  }

  // Clerk가 설정되어 있고 middleware가 초기화되었으면 Clerk middleware 사용
  if (clerkMiddleware && process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) {
    try {
      const result = clerkMiddleware(request);
      // Promise인 경우 처리
      if (result instanceof Promise) {
        return await result;
      }
      return result;
    } catch (error) {
      // Clerk middleware 실행 중 오류 발생 시 요청 통과
      console.error('Clerk middleware 실행 오류:', error);
      return NextResponse.next();
    }
  }
  
  // Clerk가 없으면 요청을 그대로 통과
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
