-- AI 정책연구소 게시판 테이블 생성 스크립트
-- Supabase SQL Editor에서 실행하세요

-- 1. posts 테이블 생성
CREATE TABLE IF NOT EXISTS posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('notice', 'data', 'qna')),
  author_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  author_name TEXT NOT NULL,
  view_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 2. comments 테이블 생성
CREATE TABLE IF NOT EXISTS comments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  post_id UUID REFERENCES posts(id) ON DELETE CASCADE NOT NULL,
  content TEXT NOT NULL,
  author_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  author_name TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 3. attachments 테이블 생성
CREATE TABLE IF NOT EXISTS attachments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  post_id UUID REFERENCES posts(id) ON DELETE CASCADE NOT NULL,
  file_name TEXT NOT NULL,
  file_url TEXT NOT NULL,
  file_size INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 4. 인덱스 생성
CREATE INDEX IF NOT EXISTS idx_posts_category ON posts(category);
CREATE INDEX IF NOT EXISTS idx_posts_created_at ON posts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_comments_post_id ON comments(post_id);
CREATE INDEX IF NOT EXISTS idx_attachments_post_id ON attachments(post_id);

-- 5. RLS (Row Level Security) 활성화
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE attachments ENABLE ROW LEVEL SECURITY;

-- 6. RLS 정책 생성 (모든 사용자가 읽을 수 있음)
CREATE POLICY "Posts are viewable by everyone" ON posts
  FOR SELECT USING (true);

CREATE POLICY "Comments are viewable by everyone" ON comments
  FOR SELECT USING (true);

CREATE POLICY "Attachments are viewable by everyone" ON attachments
  FOR SELECT USING (true);

-- 7. 인증된 사용자만 글 작성 가능
CREATE POLICY "Authenticated users can create posts" ON posts
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can create comments" ON comments
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- 8. 자신이 작성한 글만 수정/삭제 가능
CREATE POLICY "Users can update their own posts" ON posts
  FOR UPDATE USING (auth.uid() = author_id);

CREATE POLICY "Users can delete their own posts" ON posts
  FOR DELETE USING (auth.uid() = author_id);

CREATE POLICY "Users can update their own comments" ON comments
  FOR UPDATE USING (auth.uid() = author_id);

CREATE POLICY "Users can delete their own comments" ON comments
  FOR DELETE USING (auth.uid() = author_id);

-- 9. 초기 샘플 데이터 삽입
INSERT INTO posts (id, title, content, category, author_id, author_name, view_count, created_at, updated_at)
VALUES
  (
    '00000000-0000-0000-0000-000000000001',
    '한신대학교 AI 정책연구소 설립 공지',
    E'안녕하세요.\n\n한신대학교 AI 정책연구소가 2025년 12월 29일 한신대학교 학술원 산하 연구소로 공식 설립되었음을 알려드립니다.\n\n■ 연구소 개요\n- 명칭: 한신대학교 AI 정책연구소\n- 설립일: 2025년 12월 29일\n- 소속: 한신대학교 학술원\n- 비전: 국가·지자체의 AI기반 공공혁신을 위한 연구 허브\n\n■ 연구소 구성\n- 연구소장: 노승철 교수\n- AI 행정혁신실 (실장: 윤건 교수)\n- AI 지역학연구실 (실장: 주장환 교수)\n- AI 개발창업실 (실장: 이석민 교수)\n\n■ 미션\nAI와 데이터 과학을 통해 행정의 과학화·투명화·효율화를 촉진하고,\n공공가치 창출과 지역사회 문제 해결에 기여합니다.\n\n■ 핵심가치\n- 공공성 (Responsibility)\n- 신뢰성 (Reliability)\n- 투명성 (Transparency)\n- 포용성 (Inclusion)\n- 개방성 (Open Collaboration)\n\n앞으로 AI 기술을 통한 공공혁신 연구에 최선을 다하겠습니다.\n많은 관심과 협력 부탁드립니다.\n\n감사합니다.\n\n한신대학교 AI 정책연구소',
    'notice',
    NULL,
    '관리자',
    1,
    '2025-12-29 10:00:00+00',
    '2025-12-29 10:00:00+00'
  ),
  (
    '00000000-0000-0000-0000-000000000002',
    '2025년 상반기 AI 정책 세미나 개최 안내 (테스트)',
    E'안녕하세요, AI 정책연구소입니다.\n\n2025년 상반기 AI 정책 세미나를 아래와 같이 개최합니다.\n\n■ 일시: 2025년 4월 15일(월) 14:00-17:00\n■ 장소: 한신대학교 소통관\n■ 주제: "생성형 AI 시대의 정책 방향"\n\n■ 프로그램\n- 14:00-14:30 개회 및 기조연설\n- 14:30-15:30 발표 1: 생성형 AI의 현황과 전망\n- 15:30-15:50 휴식\n- 15:50-16:50 발표 2: AI 규제 정책의 국제 동향\n- 16:50-17:00 폐회\n\n많은 관심과 참여 부탁드립니다.\n\n감사합니다.',
    'notice',
    NULL,
    '관리자',
    156,
    '2025-01-15 09:00:00+00',
    '2025-01-15 09:00:00+00'
  ),
  (
    '00000000-0000-0000-0000-000000000003',
    'AI 윤리 가이드라인 연구보고서 (테스트)',
    E'AI 윤리 가이드라인 연구보고서를 공유합니다.\n\n본 보고서는 국내 AI 개발 및 활용을 위한 윤리적 가이드라인을 제안합니다.\n\n자세한 내용은 첨부파일을 참고해주세요.',
    'data',
    NULL,
    '김연구',
    89,
    '2025-01-10 09:00:00+00',
    '2025-01-10 09:00:00+00'
  ),
  (
    '00000000-0000-0000-0000-000000000004',
    '연구소 방문 문의드립니다 (테스트)',
    E'안녕하세요.\n\n연구소 방문 일정을 잡고 싶어 문의드립니다.\n\n가능한 날짜와 시간을 알려주시면 감사하겠습니다.',
    'qna',
    NULL,
    '홍길동',
    23,
    '2025-01-08 09:00:00+00',
    '2025-01-08 09:00:00+00'
  )
ON CONFLICT (id) DO NOTHING;

-- 10. updated_at 자동 업데이트 함수 생성
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = TIMEZONE('utc'::text, NOW());
  RETURN NEW;
END;
$$ language 'plpgsql';

-- 11. updated_at 트리거 생성
CREATE TRIGGER update_posts_updated_at BEFORE UPDATE ON posts
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_comments_updated_at BEFORE UPDATE ON comments
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
