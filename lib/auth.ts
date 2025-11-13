/**
 * Clerk 인증 설정 파일
 * 
 * 이 파일은 Clerk 인증 시스템을 설정합니다.
 * 사용자 인증, 역할 관리 등을 처리합니다.
 */

import { auth, currentUser } from '@clerk/nextjs/server'

/**
 * 현재 로그인한 사용자 정보 가져오기
 * 서버 컴포넌트나 API 라우트에서 사용합니다.
 * 
 * @returns 사용자 정보 또는 null (로그인하지 않은 경우)
 */
export async function getCurrentUser() {
  try {
    const user = await currentUser()
    return user
  } catch (error) {
    console.error('사용자 정보 가져오기 실패:', error)
    return null
  }
}

/**
 * 현재 사용자의 인증 상태 확인
 * 
 * @returns 인증 여부 (true/false)
 */
export async function isAuthenticated() {
  try {
    const { userId } = await auth()
    return !!userId
  } catch (error) {
    console.error('인증 상태 확인 실패:', error)
    return false
  }
}

/**
 * 현재 사용자의 사용자 ID 가져오기
 * 
 * @returns 사용자 ID 또는 null
 */
export async function getUserId() {
  try {
    const { userId } = await auth()
    return userId
  } catch (error) {
    console.error('사용자 ID 가져오기 실패:', error)
    return null
  }
}

/**
 * 관리자 권한 확인
 * Clerk의 메타데이터에서 role을 확인합니다.
 * 
 * @returns 관리자 여부 (true/false)
 */
export async function isAdmin() {
  try {
    const user = await currentUser()
    if (!user) return false
    
    // Clerk의 publicMetadata 또는 privateMetadata에서 role 확인
    const role = user.publicMetadata?.role || user.privateMetadata?.role
    return role === 'admin'
  } catch (error) {
    console.error('관리자 권한 확인 실패:', error)
    return false
  }
}

/**
 * 사용자 이메일 가져오기
 * 
 * @returns 이메일 주소 또는 null
 */
export async function getUserEmail() {
  try {
    const user = await currentUser()
    return user?.emailAddresses?.[0]?.emailAddress || null
  } catch (error) {
    console.error('이메일 가져오기 실패:', error)
    return null
  }
}

