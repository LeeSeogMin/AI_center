import { createClient } from '@/lib/supabase/client'

/**
 * 클라이언트 사이드에서 사용자의 관리자 권한 확인
 */
export async function isAdminClient(): Promise<boolean> {
  const supabase = createClient()

  const { data: { user } } = await supabase.auth.getUser()

  if (!user) return false

  const { data: userRole } = await supabase
    .from('user_roles')
    .select('role')
    .eq('user_id', user.id)
    .single()

  return userRole?.role === 'admin'
}

/**
 * 클라이언트 사이드에서 현재 사용자의 역할 가져오기
 */
export async function getUserRoleClient(): Promise<'admin' | 'user' | null> {
  const supabase = createClient()

  const { data: { user } } = await supabase.auth.getUser()

  if (!user) return null

  const { data: userRole } = await supabase
    .from('user_roles')
    .select('role')
    .eq('user_id', user.id)
    .single()

  return userRole?.role as 'admin' | 'user' || 'user'
}
