'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'

const categories = [
  { value: 'notice', label: '공지사항' },
  { value: 'data', label: '자료실' },
  { value: 'qna', label: 'Q&A' },
]

export default function WriteForm() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [category, setCategory] = useState('notice')
  const [files, setFiles] = useState<File[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isEdit, setIsEdit] = useState(false)

  const router = useRouter()
  const searchParams = useSearchParams()
  const editId = searchParams.get('edit')
  const supabase = createClient()

  useEffect(() => {
    checkAuth()
    if (editId) {
      loadPost(editId)
    }
  }, [editId])

  const checkAuth = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      router.push('/login')
    }
  }

  const loadPost = async (id: string) => {
    const { data } = await supabase
      .from('posts')
      .select('*')
      .eq('id', id)
      .single()

    if (data) {
      setTitle(data.title)
      setContent(data.content)
      setCategory(data.category)
      setIsEdit(true)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files)
      setFiles((prev) => [...prev, ...newFiles])
    }
  }

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      setError('로그인이 필요합니다.')
      setLoading(false)
      return
    }

    try {
      let postId = editId

      if (isEdit && editId) {
        const { error } = await supabase
          .from('posts')
          .update({
            title,
            content,
            category,
            updated_at: new Date().toISOString(),
          })
          .eq('id', editId)

        if (error) throw error
      } else {
        const { data, error } = await supabase
          .from('posts')
          .insert({
            title,
            content,
            category,
            author_id: user.id,
            author_name: user.user_metadata?.name || '익명',
            view_count: 0,
          })
          .select()
          .single()

        if (error) throw error
        postId = data.id
      }

      if (files.length > 0 && postId) {
        for (const file of files) {
          const fileName = `${Date.now()}_${file.name}`
          const { error: uploadError } = await supabase.storage
            .from('attachments')
            .upload(fileName, file)

          if (uploadError) {
            console.error('File upload error:', uploadError)
            continue
          }

          const { data: { publicUrl } } = supabase.storage
            .from('attachments')
            .getPublicUrl(fileName)

          await supabase.from('attachments').insert({
            post_id: postId,
            file_name: file.name,
            file_url: publicUrl,
            file_size: file.size,
          })
        }
      }

      router.push(`/board/${postId}`)
      router.refresh()
    } catch (err: any) {
      setError(err.message || '저장에 실패했습니다.')
    }

    setLoading(false)
  }

  return (
    <div className="py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">
          {isEdit ? '글 수정' : '글 작성'}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-red-50 text-red-600 p-4 rounded-lg">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              분류
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {categories.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              제목
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="제목을 입력하세요"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              내용
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={15}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
              placeholder="내용을 입력하세요"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              파일 첨부
            </label>
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            {files.length > 0 && (
              <ul className="mt-3 space-y-2">
                {files.map((file, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between bg-gray-50 px-4 py-2 rounded"
                  >
                    <span className="text-sm text-gray-700">{file.name}</span>
                    <button
                      type="button"
                      onClick={() => removeFile(index)}
                      className="text-red-600 hover:text-red-700 text-sm"
                    >
                      삭제
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="flex justify-end gap-4 pt-6">
            <Link
              href="/board"
              className="px-6 py-3 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              취소
            </Link>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors disabled:opacity-50"
            >
              {loading ? '저장 중...' : isEdit ? '수정하기' : '등록하기'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
