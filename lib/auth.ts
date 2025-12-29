import { createClient as createServerClient } from '@/lib/supabase/server'
import { createClient as createBrowserClient } from '@/lib/supabase/client'

/**
 * 서버 사이드에서 사용자의 관리자 권한 확인
 */
export async function isAdminServer(): Promise<boolean> {
  const supabase = await createServerClient()

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
 * 클라이언트 사이드에서 사용자의 관리자 권한 확인
 */
export async function isAdminClient(): Promise<boolean> {
  const supabase = createBrowserClient()

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
 * 서버 사이드에서 현재 사용자의 역할 가져오기
 */
export async function getUserRoleServer(): Promise<'admin' | 'user' | null> {
  const supabase = await createServerClient()

  const { data: { user } } = await supabase.auth.getUser()

  if (!user) return null

  const { data: userRole } = await supabase
    .from('user_roles')
    .select('role')
    .eq('user_id', user.id)
    .single()

  return userRole?.role as 'admin' | 'user' || 'user'
}

/**
 * 클라이언트 사이드에서 현재 사용자의 역할 가져오기
 */
export async function getUserRoleClient(): Promise<'admin' | 'user' | null> {
  const supabase = createBrowserClient()

  const { data: { user } } = await supabase.auth.getUser()

  if (!user) return null

  const { data: userRole } = await supabase
    .from('user_roles')
    .select('role')
    .eq('user_id', user.id)
    .single()

  return userRole?.role as 'admin' | 'user' || 'user'
}

/**
 * 관리자 권한이 필요한 페이지 보호
 * 사용법: 서버 컴포넌트에서 await requireAdmin()
 */
export async function requireAdmin() {
  const isAdmin = await isAdminServer()

  if (!isAdmin) {
    throw new Error('Unauthorized: Admin access required')
  }
}
