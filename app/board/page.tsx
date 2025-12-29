import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'

const categories = [
  { value: 'all', label: '전체' },
  { value: 'notice', label: '공지사항' },
  { value: 'data', label: '자료실' },
  { value: 'qna', label: 'Q&A' },
]

export default async function BoardPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; page?: string; search?: string }>
}) {
  const params = await searchParams
  const category = params.category || 'all'
  const page = parseInt(params.page || '1')
  const search = params.search || ''
  const pageSize = 10

  const supabase = await createClient()

  // 게시글 조회
  let query = supabase
    .from('posts')
    .select('*', { count: 'exact' })
    .order('created_at', { ascending: false })
    .range((page - 1) * pageSize, page * pageSize - 1)

  if (category !== 'all') {
    query = query.eq('category', category)
  }

  if (search) {
    query = query.or(`title.ilike.%${search}%,content.ilike.%${search}%`)
  }

  const { data: posts, count, error } = await query

  const totalPages = Math.ceil((count || 0) / pageSize)

  // 샘플 데이터 (Supabase 연동 전)
  const samplePosts = [
    {
      id: '00000000-0000-0000-0000-000000000001',
      title: '한신대학교 AI 정책연구소 설립 공지',
      category: 'notice',
      author_name: '관리자',
      view_count: 1,
      created_at: '2025-12-29',
    },
    {
      id: '00000000-0000-0000-0000-000000000002',
      title: '2025년 상반기 AI 정책 세미나 개최 안내',
      category: 'notice',
      author_name: '관리자',
      view_count: 156,
      created_at: '2025-01-15',
    },
    {
      id: '00000000-0000-0000-0000-000000000003',
      title: 'AI 윤리 가이드라인 연구보고서',
      category: 'data',
      author_name: '김연구',
      view_count: 89,
      created_at: '2025-01-10',
    },
    {
      id: '00000000-0000-0000-0000-000000000004',
      title: '연구소 방문 문의드립니다',
      category: 'qna',
      author_name: '홍길동',
      view_count: 23,
      created_at: '2025-01-08',
    },
  ]

  const displayPosts = (posts && posts.length > 0) ? posts : samplePosts

  const getCategoryLabel = (cat: string) => {
    return categories.find(c => c.value === cat)?.label || cat
  }

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'notice':
        return 'bg-red-100 text-red-700'
      case 'data':
        return 'bg-blue-100 text-blue-700'
      case 'qna':
        return 'bg-green-100 text-green-700'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">게시판</h1>
          <p className="text-xl text-gray-600">공지사항, 자료, Q&A</p>
        </div>

        {/* Category Filter & Search */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Link
                key={cat.value}
                href={`/board?category=${cat.value}`}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === cat.value
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat.label}
              </Link>
            ))}
          </div>

          <form className="flex gap-2" action="/board">
            <input type="hidden" name="category" value={category} />
            <input
              type="text"
              name="search"
              defaultValue={search}
              placeholder="검색어를 입력하세요"
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              검색
            </button>
          </form>
        </div>

        {/* Posts List */}
        <div className="bg-white rounded-lg border">
          <div className="hidden md:grid grid-cols-12 gap-4 p-4 bg-gray-50 border-b font-medium text-sm text-gray-600">
            <div className="col-span-1 text-center">번호</div>
            <div className="col-span-1 text-center">분류</div>
            <div className="col-span-6">제목</div>
            <div className="col-span-2 text-center">작성자</div>
            <div className="col-span-1 text-center">조회</div>
            <div className="col-span-1 text-center">날짜</div>
          </div>

          {displayPosts.length > 0 ? (
            displayPosts.map((post: any, index: number) => (
              <div
                key={post.id}
                className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 p-4 border-b hover:bg-gray-50 transition-colors"
              >
                <div className="hidden md:block col-span-1 text-center text-gray-500">
                  {(page - 1) * pageSize + index + 1}
                </div>
                <div className="md:col-span-1 md:text-center">
                  <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${getCategoryColor(post.category)}`}>
                    {getCategoryLabel(post.category)}
                  </span>
                </div>
                <div className="md:col-span-6">
                  <Link
                    href={`/board/${post.id}`}
                    className="text-gray-900 hover:text-primary-600 font-medium"
                  >
                    {post.title}
                  </Link>
                </div>
                <div className="md:col-span-2 text-sm text-gray-600 md:text-center">
                  {post.author_name || '익명'}
                </div>
                <div className="md:col-span-1 text-sm text-gray-500 md:text-center">
                  {post.view_count}
                </div>
                <div className="md:col-span-1 text-sm text-gray-500 md:text-center">
                  {new Date(post.created_at).toLocaleDateString('ko-KR')}
                </div>
              </div>
            ))
          ) : (
            <div className="p-12 text-center text-gray-500">
              게시글이 없습니다.
            </div>
          )}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8 gap-2">
          {page > 1 && (
            <Link
              href={`/board?category=${category}&page=${page - 1}&search=${search}`}
              className="px-4 py-2 border rounded-lg hover:bg-gray-50"
            >
              이전
            </Link>
          )}
          {Array.from({ length: totalPages || 1 }, (_, i) => i + 1).map((p) => (
            <Link
              key={p}
              href={`/board?category=${category}&page=${p}&search=${search}`}
              className={`px-4 py-2 rounded-lg ${
                p === page
                  ? 'bg-primary-600 text-white'
                  : 'border hover:bg-gray-50'
              }`}
            >
              {p}
            </Link>
          ))}
          {page < (totalPages || 1) && (
            <Link
              href={`/board?category=${category}&page=${page + 1}&search=${search}`}
              className="px-4 py-2 border rounded-lg hover:bg-gray-50"
            >
              다음
            </Link>
          )}
        </div>

        {/* Write Button */}
        <div className="flex justify-end mt-8">
          <Link
            href="/board/write"
            className="px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
          >
            글쓰기
          </Link>
        </div>
      </div>
    </div>
  )
}
