import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { isAdminServer } from '@/lib/auth-server'
import Link from 'next/link'

export default async function AdminPage() {
  const isAdmin = await isAdminServer()

  if (!isAdmin) {
    redirect('/')
  }

  const supabase = await createClient()

  // 모든 게시글 조회
  const { data: posts } = await supabase
    .from('posts')
    .select('*')
    .order('created_at', { ascending: false })

  // 모든 사용자 조회
  const { data: users } = await supabase
    .from('user_roles')
    .select(`
      id,
      user_id,
      role,
      created_at
    `)
    .order('created_at', { ascending: false })

  // auth.users 정보 가져오기
  const { data: { users: authUsers } } = await supabase.auth.admin.listUsers()

  // user_roles와 auth.users 매핑
  const usersWithEmail = users?.map(userRole => {
    const authUser = authUsers?.find(au => au.id === userRole.user_id)
    return {
      ...userRole,
      email: authUser?.email || 'Unknown',
      name: authUser?.user_metadata?.name || 'Unknown'
    }
  })

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">관리자 대시보드</h1>
          <p className="mt-2 text-gray-600">모든 게시글과 사용자를 관리할 수 있습니다.</p>
        </div>

        {/* 통계 */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500">전체 게시글</h3>
            <p className="mt-2 text-3xl font-semibold text-gray-900">{posts?.length || 0}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500">전체 사용자</h3>
            <p className="mt-2 text-3xl font-semibold text-gray-900">{users?.length || 0}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500">관리자</h3>
            <p className="mt-2 text-3xl font-semibold text-gray-900">
              {users?.filter(u => u.role === 'admin').length || 0}
            </p>
          </div>
        </div>

        {/* 게시글 관리 */}
        <div className="bg-white rounded-lg shadow mb-8">
          <div className="px-6 py-4 border-b">
            <h2 className="text-xl font-semibold text-gray-900">게시글 관리</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">제목</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">카테고리</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">작성자</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">조회수</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">작성일</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">관리</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {posts?.map((post) => (
                  <tr key={post.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Link href={`/board/${post.id}`} className="text-primary-600 hover:text-primary-700">
                        {post.title}
                      </Link>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 text-xs rounded-full bg-gray-100">
                        {post.category === 'notice' ? '공지사항' : post.category === 'data' ? '자료실' : 'Q&A'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {post.author_name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {post.view_count}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(post.created_at).toLocaleDateString('ko-KR')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <Link
                        href={`/board/${post.id}`}
                        className="text-indigo-600 hover:text-indigo-900 mr-4"
                      >
                        보기
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 사용자 관리 */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b">
            <h2 className="text-xl font-semibold text-gray-900">사용자 관리</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">이메일</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">이름</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">역할</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">가입일</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {usersWithEmail?.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {user.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {user.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        user.role === 'admin'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {user.role === 'admin' ? '관리자' : '일반 사용자'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(user.created_at).toLocaleDateString('ko-KR')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 안내 메시지 */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="text-sm font-medium text-blue-900 mb-2">관리자 기능 안내</h3>
          <ul className="text-sm text-blue-800 space-y-1 list-disc list-inside">
            <li>관리자는 모든 게시글과 댓글을 수정/삭제할 수 있습니다.</li>
            <li>게시글 상세 페이지에서 관리자 전용 수정/삭제 버튼이 표시됩니다.</li>
            <li>사용자 역할 변경은 Supabase 대시보드에서 직접 수행하세요.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
