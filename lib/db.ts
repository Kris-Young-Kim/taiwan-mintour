/**
 * 데이터베이스 유틸리티 함수
 * 
 * Google Spreadsheet를 데이터베이스로 사용합니다.
 * 모든 데이터는 Google Spreadsheet에 저장되고 조회됩니다.
 */

import { readSheet, writeSheet, appendRow, findRow, updateRow } from './google-sheets'

// 시트 이름 정의
const SHEETS = {
  PACKAGES: 'Packages',
  BOOKINGS: 'Bookings',
  GUESTS: 'Guests',
  ROOMS: 'Rooms',
  PAYMENTS: 'Payments',
  ITINERARIES: 'Itineraries',
} as const

/**
 * 패키지 목록 조회
 * 
 * @returns 패키지 목록
 */
export async function getPackages() {
  try {
    const data = await readSheet(`${SHEETS.PACKAGES}!A:Z`)
    
    if (data.length === 0) {
      return []
    }

    // 첫 번째 행은 헤더
    const headers = data[0]
    const packages = data.slice(1).map((row) => {
      const packageData: any = {}
      headers.forEach((header, index) => {
        packageData[header] = row[index] || ''
      })
      return packageData
    })

    return packages
  } catch (error) {
    console.error('패키지 조회 오류:', error)
    return []
  }
}

/**
 * 예약 생성
 * 
 * @param bookingData 예약 데이터
 * @returns 생성된 예약 ID
 */
export async function createBooking(bookingData: any) {
  try {
    // 예약 번호 생성 (MT-YYYYMMDD-XXXX 형식)
    const now = new Date()
    const bookingNumber = `MT-${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}-${String(Math.floor(Math.random() * 10000)).padStart(4, '0')}`
    
    // 예약 데이터 준비
    const bookingRow = [
      bookingNumber,
      bookingData.packageId || '',
      bookingData.userEmail || '',
      bookingData.totalGuests || 0,
      bookingData.singleRooms || 0,
      bookingData.totalAmount || 0,
      bookingData.paymentStatus || 'pending',
      bookingData.paymentMethod || '',
      new Date().toISOString(),
      new Date().toISOString(),
    ]

    // 예약 추가
    await appendRow(SHEETS.BOOKINGS, bookingRow)

    // 게스트 정보 추가
    if (bookingData.guests && Array.isArray(bookingData.guests)) {
      for (const guest of bookingData.guests) {
        const guestRow = [
          bookingNumber,
          guest.nameKo || '',
          guest.nameEn || '',
          guest.birthDate || '',
          guest.gender || '',
          guest.passportNumber || '',
          guest.passportExpiry || '',
          guest.phone || '',
          guest.email || '',
          guest.dietaryRestrictions?.join(',') || '',
          guest.medicalInfo || '',
          guest.specialRequests || '',
          guest.isPrimary ? 'true' : 'false',
          new Date().toISOString(),
        ]
        await appendRow(SHEETS.GUESTS, guestRow)
      }
    }

    // 객실 정보 추가
    if (bookingData.rooms && Array.isArray(bookingData.rooms)) {
      for (const room of bookingData.rooms) {
        const roomRow = [
          bookingNumber,
          room.roomType || 'double',
          room.roomNumber || '',
          room.guestIds?.join(',') || '',
          bookingData.checkInDate || '',
          bookingData.checkOutDate || '',
          new Date().toISOString(),
        ]
        await appendRow(SHEETS.ROOMS, roomRow)
      }
    }

    return { bookingNumber, id: bookingNumber }
  } catch (error) {
    console.error('예약 생성 오류:', error)
    throw error
  }
}

/**
 * 예약 조회
 * 
 * @param bookingId 예약 번호 또는 ID
 * @returns 예약 정보
 */
export async function getBooking(bookingId: string) {
  try {
    // 예약 정보 찾기
    const bookings = await readSheet(`${SHEETS.BOOKINGS}!A:Z`)
    
    if (bookings.length === 0) {
      return null
    }

    const headers = bookings[0]
    const bookingRow = bookings.slice(1).find((row) => row[0] === bookingId)

    if (!bookingRow) {
      return null
    }

    const booking: any = {}
    headers.forEach((header, index) => {
      booking[header] = bookingRow[index] || ''
    })

    // 게스트 정보 조회
    const guests = await readSheet(`${SHEETS.GUESTS}!A:Z`)
    if (guests.length > 1) {
      const guestHeaders = guests[0]
      booking.guests = guests.slice(1)
        .filter((row) => row[0] === bookingId)
        .map((row) => {
          const guest: any = {}
          guestHeaders.forEach((header, index) => {
            guest[header] = row[index] || ''
          })
          return guest
        })
    }

    // 객실 정보 조회
    const rooms = await readSheet(`${SHEETS.ROOMS}!A:Z`)
    if (rooms.length > 1) {
      const roomHeaders = rooms[0]
      booking.rooms = rooms.slice(1)
        .filter((row) => row[0] === bookingId)
        .map((row) => {
          const room: any = {}
          roomHeaders.forEach((header, index) => {
            room[header] = row[index] || ''
          })
          return room
        })
    }

    return booking
  } catch (error) {
    console.error('예약 조회 오류:', error)
    return null
  }
}

/**
 * 예약 수정
 * 
 * @param bookingId 예약 번호
 * @param data 수정할 데이터
 * @returns 수정된 예약 정보
 */
export async function updateBooking(bookingId: string, data: any) {
  try {
    // 예약 찾기
    const rowNumber = await findRow(SHEETS.BOOKINGS, 0, bookingId)
    
    if (!rowNumber) {
      throw new Error('예약을 찾을 수 없습니다.')
    }

    // 기존 예약 정보 가져오기
    const booking = await getBooking(bookingId)
    if (!booking) {
      throw new Error('예약을 찾을 수 없습니다.')
    }

    // 데이터 업데이트
    const updatedBooking = { ...booking, ...data, updatedAt: new Date().toISOString() }
    
    // 업데이트할 행 데이터 준비
    const bookings = await readSheet(`${SHEETS.BOOKINGS}!A:Z`)
    const headers = bookings[0]
    const updatedRow = headers.map((header) => updatedBooking[header] || '')

    await updateRow(SHEETS.BOOKINGS, rowNumber, updatedRow)

    return updatedBooking
  } catch (error) {
    console.error('예약 수정 오류:', error)
    throw error
  }
}

/**
 * 관리자 통계 조회
 * 
 * @returns 통계 데이터
 */
export async function getAdminStats() {
  try {
    const bookings = await readSheet(`${SHEETS.BOOKINGS}!A:Z`)
    
    if (bookings.length <= 1) {
      return {
        totalBookings: 0,
        totalGuests: 0,
        totalRevenue: 0,
        pendingPayments: 0,
        completedPayments: 0,
      }
    }

    const bookingRows = bookings.slice(1)
    
    let totalGuests = 0
    let totalRevenue = 0
    let pendingPayments = 0
    let completedPayments = 0

    // 헤더 인덱스 찾기 (동적으로)
    const headers = bookings[0]
    const totalGuestsIndex = headers.indexOf('totalGuests') !== -1 ? headers.indexOf('totalGuests') : 3
    const totalAmountIndex = headers.indexOf('totalAmount') !== -1 ? headers.indexOf('totalAmount') : 5
    const paymentStatusIndex = headers.indexOf('paymentStatus') !== -1 ? headers.indexOf('paymentStatus') : 6

    bookingRows.forEach((row) => {
      const guests = parseInt(row[totalGuestsIndex] || '0', 10)
      const amount = parseFloat(row[totalAmountIndex] || '0')
      const status = row[paymentStatusIndex] || 'pending'

      totalGuests += guests
      totalRevenue += amount

      if (status === 'pending') {
        pendingPayments++
      } else if (status === 'completed') {
        completedPayments++
      }
    })

    return {
      totalBookings: bookingRows.length,
      totalGuests,
      totalRevenue,
      pendingPayments,
      completedPayments,
    }
  } catch (error) {
    console.error('통계 조회 오류:', error)
    return {
      totalBookings: 0,
      totalGuests: 0,
      totalRevenue: 0,
      pendingPayments: 0,
      completedPayments: 0,
    }
  }
}

/**
 * 모든 예약 목록 조회
 * 
 * @returns 예약 목록
 */
export async function getAllBookings() {
  try {
    const data = await readSheet(`${SHEETS.BOOKINGS}!A:Z`)
    
    if (data.length === 0) {
      return []
    }

    const headers = data[0]
    const bookings = data.slice(1).map((row) => {
      const booking: any = {}
      headers.forEach((header, index) => {
        booking[header] = row[index] || ''
      })
      return booking
    })

    return bookings
  } catch (error) {
    console.error('예약 목록 조회 오류:', error)
    return []
  }
}
