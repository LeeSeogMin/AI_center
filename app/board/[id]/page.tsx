import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { notFound } from 'next/navigation'
import CommentSection from './CommentSection'
import DeleteButton from './DeleteButton'

export default async function PostDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const supabase = await createClient()

  // 현재 사용자 확인
  const { data: { user } } = await supabase.auth.getUser()

  // 게시글 조회
  const { data: post, error } = await supabase
    .from('posts')
    .select('*')
    .eq('id', id)
    .single()

  // 샘플 데이터 (Supabase 연동 전)
  const samplePosts: { [key: string]: any } = {
    '1': {
      id: '1',
      title: '한신대학교 AI 정책연구소 설립 공지',
      content: `안녕하세요.

한신대학교 AI 정책연구소가 2025년 12월 29일 한신대학교 학술원 산하 연구소로 공식 설립되었음을 알려드립니다.

■ 연구소 개요
- 명칭: 한신대학교 AI 정책연구소
- 설립일: 2025년 12월 29일
- 소속: 한신대학교 학술원
- 비전: 국가·지자체의 AI기반 공공혁신을 위한 연구 허브

■ 연구소 구성
- 연구소장: 노승철 교수
- AI 행정혁신실 (실장: 윤건 교수)
- AI 지역학연구실 (실장: 주장환 교수)
- AI 개발창업실 (실장: 이석민 교수)

■ 미션
AI와 데이터 과학을 통해 행정의 과학화·투명화·효율화를 촉진하고,
공공가치 창출과 지역사회 문제 해결에 기여합니다.

■ 핵심가치
- 공공성 (Responsibility)
- 신뢰성 (Reliability)
- 투명성 (Transparency)
- 포용성 (Inclusion)
- 개방성 (Open Collaboration)

앞으로 AI 기술을 통한 공공혁신 연구에 최선을 다하겠습니다.
많은 관심과 협력 부탁드립니다.

감사합니다.

한신대학교 AI 정책연구소`,
      category: 'notice',
      author_id: '1',
      author_name: '관리자',
      view_count: 1,
      created_at: '2025-12-29T10:00:00',
      updated_at: '2025-12-29T10:00:00',
    },
    '2': {
      id: '2',
      title: '2025년 상반기 AI 정책 세미나 개최 안내',
      content: `안녕하세요, AI 정책연구소입니다.

2025년 상반기 AI 정책 세미나를 아래와 같이 개최합니다.

■ 일시: 2025년 4월 15일(월) 14:00-17:00
■ 장소: 한신대학교 소통관
■ 주제: "생성형 AI 시대의 정책 방향"

■ 프로그램
- 14:00-14:30 개회 및 기조연설
- 14:30-15:30 발표 1: 생성형 AI의 현황과 전망
- 15:30-15:50 휴식
- 15:50-16:50 발표 2: AI 규제 정책의 국제 동향
- 16:50-17:00 폐회

많은 관심과 참여 부탁드립니다.

감사합니다.`,
      category: 'notice',
      author_id: '1',
      author_name: '관리자',
      view_count: 156,
      created_at: '2025-01-15T09:00:00',
      updated_at: '2025-01-15T09:00:00',
    },
  }

  const samplePost = samplePosts[id] || samplePosts['1']

  // 첨부파일 조회
  const { data: attachments } = await supabase
    .from('attachments')
    .select('*')
    .eq('post_id', id)

  // 조회수 증가
  if (post) {
    await supabase
      .from('posts')
      .update({ view_count: post.view_count + 1 })
      .eq('id', id)
  }

  const displayPost = post || samplePost
  const isAuthor = user && displayPost.author_id === user.id

  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case 'notice':
        return '공지사항'
      case 'data':
        return '자료실'
      case 'qna':
        return 'Q&A'
      default:
        return cat
    }
  }

  return (
    <div className="py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="border-b pb-6 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">
              {getCategoryLabel(displayPost.category)}
            </span>
          </div>
          <h1 className="text-3xl font-bold mb-4">{displayPost.title}</h1>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <span>작성자: {displayPost.author_name || '익명'}</span>
            <span>작성일: {new Date(displayPost.created_at).toLocaleDateString('ko-KR')}</span>
            <span>조회수: {displayPost.view_count}</span>
          </div>
        </div>

        {/* Content */}
        <div className="prose max-w-none mb-8">
          <div className="whitespace-pre-wrap text-gray-800 leading-relaxed">
            {displayPost.content}
          </div>
        </div>

        {/* Attachments */}
        {attachments && attachments.length > 0 && (
          <div className="bg-gray-50 p-4 rounded-lg mb-8">
            <h3 className="font-semibold mb-3">첨부파일</h3>
            <ul className="space-y-2">
              {attachments.map((file: any) => (
                <li key={file.id}>
                  <a
                    href={file.file_url}
                    download
                    className="text-primary-600 hover:text-primary-700 flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    {file.file_name}
                    <span className="text-gray-500 text-sm">
                      ({(file.file_size / 1024).toFixed(1)} KB)
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Actions */}
        <div className="flex justify-between items-center border-t pt-6 mb-8">
          <Link
            href="/board"
            className="px-4 py-2 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            목록으로
          </Link>
          {isAuthor && (
            <div className="flex gap-2">
              <Link
                href={`/board/write?edit=${id}`}
                className="px-4 py-2 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                수정
              </Link>
              <DeleteButton postId={id} />
            </div>
          )}
        </div>

        {/* Comments */}
        <CommentSection postId={id} user={user} />
      </div>
    </div>
  )
}
