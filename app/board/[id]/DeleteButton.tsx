'use client'

import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

export default function DeleteButton({ postId }: { postId: string }) {
  const router = useRouter()
  const supabase = createClient()

  const handleDelete = async () => {
    if (!confirm('정말로 이 게시글을 삭제하시겠습니까?')) return

    // 첨부파일 삭제
    const { data: attachments } = await supabase
      .from('attachments')
      .select('file_url')
      .eq('post_id', postId)

    if (attachments) {
      for (const file of attachments) {
        const path = file.file_url.split('/').pop()
        if (path) {
          await supabase.storage.from('attachments').remove([path])
        }
      }
    }

    // 댓글 삭제
    await supabase.from('comments').delete().eq('post_id', postId)

    // 첨부파일 레코드 삭제
    await supabase.from('attachments').delete().eq('post_id', postId)

    // 게시글 삭제
    const { error } = await supabase.from('posts').delete().eq('id', postId)

    if (!error) {
      router.push('/board')
      router.refresh()
    } else {
      alert('삭제에 실패했습니다.')
    }
  }

  return (
    <button
      onClick={handleDelete}
      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
    >
      삭제
    </button>
  )
}
