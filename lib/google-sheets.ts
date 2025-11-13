/**
 * Google Sheets API 클라이언트 설정 파일
 * 
 * 이 파일은 Google Spreadsheet와 연결하기 위한 클라이언트를 생성합니다.
 * 예약 데이터를 Google Spreadsheet에 저장하고 조회합니다.
 */

import { google } from 'googleapis'

// 환경 변수에서 Google Sheets 설정 가져오기
const googleServiceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
const googlePrivateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
const googleSpreadsheetId = process.env.GOOGLE_SPREADSHEET_ID

// 환경 변수가 설정되지 않았을 경우 에러 메시지
if (!googleServiceAccountEmail || !googlePrivateKey || !googleSpreadsheetId) {
  console.warn(
    'Google Sheets 환경 변수가 설정되지 않았습니다.\n' +
    '필요한 변수:\n' +
    '- GOOGLE_SERVICE_ACCOUNT_EMAIL\n' +
    '- GOOGLE_PRIVATE_KEY\n' +
    '- GOOGLE_SPREADSHEET_ID\n' +
    '자세한 내용은 docs/SETUP_GUIDE.md를 참고하세요.'
  )
}

/**
 * Google Sheets API 클라이언트 생성
 * 서버에서만 사용합니다.
 * 
 * @returns Google Sheets API 클라이언트
 */
export function getGoogleSheetsClient() {
  if (!googleServiceAccountEmail || !googlePrivateKey) {
    throw new Error(
      'Google Sheets 환경 변수가 설정되지 않았습니다. .env.local 파일을 확인해주세요.'
    )
  }

  // 서비스 계정 인증
  const auth = new google.auth.JWT({
    email: googleServiceAccountEmail,
    key: googlePrivateKey,
    scopes: [
      'https://www.googleapis.com/auth/spreadsheets',
    ],
  })

  // Google Sheets API 클라이언트 생성
  return google.sheets({ version: 'v4', auth })
}

/**
 * 스프레드시트 ID 가져오기
 */
export function getSpreadsheetId() {
  if (!googleSpreadsheetId) {
    throw new Error(
      'GOOGLE_SPREADSHEET_ID가 설정되지 않았습니다.'
    )
  }
  return googleSpreadsheetId
}

/**
 * 스프레드시트에서 데이터 읽기
 * 
 * @param range 읽을 범위 (예: 'Sheet1!A1:D10')
 * @returns 읽은 데이터
 */
export async function readSheet(range: string) {
  try {
    const sheets = getGoogleSheetsClient()
    const spreadsheetId = getSpreadsheetId()
    
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    })

    return response.data.values || []
  } catch (error) {
    console.error('Google Sheets 읽기 오류:', error)
    throw error
  }
}

/**
 * 스프레드시트에 데이터 쓰기
 * 
 * @param range 쓸 범위 (예: 'Sheet1!A1')
 * @param values 쓸 데이터 (2차원 배열)
 */
export async function writeSheet(range: string, values: any[][]) {
  try {
    const sheets = getGoogleSheetsClient()
    const spreadsheetId = getSpreadsheetId()
    
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range,
      valueInputOption: 'RAW',
      requestBody: {
        values,
      },
    })
  } catch (error) {
    console.error('Google Sheets 쓰기 오류:', error)
    throw error
  }
}

/**
 * 스프레드시트에 데이터 추가 (행 추가)
 * 
 * @param sheetName 시트 이름 (예: 'Sheet1')
 * @param values 추가할 데이터 (배열)
 */
export async function appendRow(sheetName: string, values: any[]) {
  try {
    const sheets = getGoogleSheetsClient()
    const spreadsheetId = getSpreadsheetId()
    
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${sheetName}!A:A`,
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values: [values],
      },
    })
  } catch (error) {
    console.error('Google Sheets 행 추가 오류:', error)
    throw error
  }
}

/**
 * 스프레드시트에서 특정 행 찾기
 * 
 * @param sheetName 시트 이름
 * @param columnIndex 검색할 열 인덱스 (0부터 시작)
 * @param searchValue 검색할 값
 * @returns 행 번호 (1부터 시작) 또는 null
 */
export async function findRow(sheetName: string, columnIndex: number, searchValue: string): Promise<number | null> {
  try {
    const sheets = getGoogleSheetsClient()
    const spreadsheetId = getSpreadsheetId()
    
    // 전체 시트 읽기
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: `${sheetName}!A:Z`,
    })

    const rows = response.data.values || []
    
    // 검색
    for (let i = 0; i < rows.length; i++) {
      if (rows[i][columnIndex] === searchValue) {
        return i + 1 // Google Sheets는 1부터 시작
      }
    }
    
    return null
  } catch (error) {
    console.error('Google Sheets 행 찾기 오류:', error)
    throw error
  }
}

/**
 * 스프레드시트에서 특정 행 업데이트
 * 
 * @param sheetName 시트 이름
 * @param rowNumber 행 번호 (1부터 시작)
 * @param values 업데이트할 데이터 (배열)
 */
export async function updateRow(sheetName: string, rowNumber: number, values: any[]) {
  try {
    const sheets = getGoogleSheetsClient()
    const spreadsheetId = getSpreadsheetId()
    
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: `${sheetName}!A${rowNumber}`,
      valueInputOption: 'RAW',
      requestBody: {
        values: [values],
      },
    })
  } catch (error) {
    console.error('Google Sheets 행 업데이트 오류:', error)
    throw error
  }
}

