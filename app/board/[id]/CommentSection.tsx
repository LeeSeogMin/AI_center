'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import type { User } from '@supabase/supabase-js'

interface Comment {
  id: string
  content: string
  author_name: string
  author_id: string
  created_at: string
}

export default function CommentSection({
  postId,
  user,
}: {
  postId: string
  user: User | null
}) {
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState('')
  const [loading, setLoading] = useState(false)
  const supabase = createClient()

  // 샘플 댓글 데이터
  const sampleComments: Comment[] = [
    {
      id: '1',
      content: '좋은 정보 감사합니다. 세미나 참석 신청은 어떻게 하나요?',
      author_name: '김참석',
      author_id: '2',
      created_at: '2024-03-16T10:30:00',
    },
    {
      id: '2',
      content: '이메일로 신청하시면 됩니다. ai-policy@university.ac.kr',
      author_name: '관리자',
      author_id: '1',
      created_at: '2024-03-16T14:00:00',
    },
  ]

  useEffect(() => {
    fetchComments()
  }, [postId])

  const fetchComments = async () => {
    const { data, error } = await supabase
      .from('comments')
      .select('*')
      .eq('post_id', postId)
      .order('created_at', { ascending: true })

    if (data) {
      setComments(data)
    } else {
      // Supabase 연동 전 샘플 데이터 사용
      setComments(sampleComments)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!user || !newComment.trim()) return

    setLoading(true)

    const { error } = await supabase.from('comments').insert({
      post_id: postId,
      author_id: user.id,
      author_name: user.user_metadata?.name || '익명',
      content: newComment.trim(),
    })

    if (!error) {
      setNewComment('')
      fetchComments()
    }

    setLoading(false)
  }

  const handleDelete = async (commentId: string) => {
    if (!confirm('댓글을 삭제하시겠습니까?')) return

    const { error } = await supabase
      .from('comments')
      .delete()
      .eq('id', commentId)

    if (!error) {
      fetchComments()
    }
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-6">
        댓글 <span className="text-primary-600">{comments.length}</span>
      </h2>

      {/* Comment List */}
      <div className="space-y-4 mb-8">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment.id} className="bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{comment.author_name}</span>
                  <span className="text-sm text-gray-500">
                    {new Date(comment.created_at).toLocaleDateString('ko-KR')}
                  </span>
                </div>
                {user && comment.author_id === user.id && (
                  <button
                    onClick={() => handleDelete(comment.id)}
                    className="text-sm text-red-600 hover:text-red-700"
                  >
                    삭제
                  </button>
                )}
              </div>
              <p className="text-gray-700">{comment.content}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center py-8">
            첫 번째 댓글을 작성해보세요.
          </p>
        )}
      </div>

      {/* Comment Form */}
      {user ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="댓글을 입력하세요"
            rows={3}
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
          />
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={loading || !newComment.trim()}
              className="px-6 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors disabled:opacity-50"
            >
              {loading ? '등록 중...' : '댓글 등록'}
            </button>
          </div>
        </form>
      ) : (
        <div className="bg-gray-50 p-4 rounded-lg text-center">
          <p className="text-gray-600">
            댓글을 작성하려면{' '}
            <a href="/login" className="text-primary-600 hover:text-primary-700 font-medium">
              로그인
            </a>
            이 필요합니다.
          </p>
        </div>
      )}
    </div>
  )
}
