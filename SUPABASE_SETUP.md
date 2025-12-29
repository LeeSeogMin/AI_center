# Supabase 설정 가이드

## 게시판 기능을 활성화하기 위한 Supabase 설정

### 1. Supabase 프로젝트 접속
1. https://supabase.com 에 접속
2. 로그인 후 프로젝트 선택 (nnahzwqjmounacacbihr)

### 2. SQL 실행
1. 왼쪽 메뉴에서 **SQL Editor** 클릭
2. **New query** 버튼 클릭
3. `supabase_setup.sql` 파일의 내용을 복사하여 붙여넣기
4. **Run** 버튼 클릭하여 실행

### 3. 테이블 확인
SQL 실행 후 다음 테이블들이 생성됩니다:
- `posts` - 게시글
- `comments` - 댓글
- `attachments` - 첨부파일

### 4. 초기 데이터 확인
다음 게시글들이 자동으로 생성됩니다:
1. 한신대학교 AI 정책연구소 설립 공지
2. 2025년 상반기 AI 정책 세미나 개최 안내
3. AI 윤리 가이드라인 연구보고서
4. 연구소 방문 문의드립니다

### 5. 환경 변수 확인
`.env.local` 파일에 다음 변수가 설정되어 있는지 확인:
```
NEXT_PUBLIC_SUPABASE_URL=https://nnahzwqjmounacacbihr.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### 6. 배포 후 확인
Vercel에 배포 후 게시판 기능이 정상 작동하는지 확인:
- 게시글 목록 조회
- 게시글 상세 보기
- 게시글 작성/수정/삭제 (로그인 필요)
- 댓글 작성/수정/삭제 (로그인 필요)

## 주요 기능

### Row Level Security (RLS)
- 모든 사용자가 게시글/댓글을 읽을 수 있음
- 인증된 사용자만 게시글/댓글 작성 가능
- 자신이 작성한 글만 수정/삭제 가능

### 자동 업데이트
- `updated_at` 컬럼이 자동으로 업데이트됨
- 조회수가 자동으로 증가함

## 문제 해결

### 게시글이 표시되지 않는 경우
1. Supabase SQL Editor에서 다음 쿼리 실행:
   ```sql
   SELECT * FROM posts;
   ```
2. 데이터가 없으면 `supabase_setup.sql`을 다시 실행

### 권한 오류가 발생하는 경우
1. RLS 정책이 올바르게 설정되었는지 확인
2. Authentication 설정 확인

## 참고사항

- 현재 `.env.local` 파일의 Supabase 키는 개발용입니다
- 프로덕션 환경에서는 Vercel 환경 변수에 동일한 값을 설정해야 합니다
- Supabase 무료 플랜의 제한사항을 확인하세요
