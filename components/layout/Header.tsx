'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, User, Shield } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { getUserRoleClient } from '@/lib/auth-client'

const navigation = [
  { name: '홈', href: '/' },
  { name: '소개', href: '/about' },
  { name: '연구진', href: '/members' },
  { name: '연구성과', href: '/research' },
  { name: '게시판', href: '/board' },
  { name: '연락처', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [user, setUser] = useState<any>(null)
  const [isAdmin, setIsAdmin] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)

      if (user) {
        const role = await getUserRoleClient()
        setIsAdmin(role === 'admin')
      }
    }
    getUser()

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
      setUser(session?.user ?? null)

      if (session?.user) {
        const role = await getUserRoleClient()
        setIsAdmin(role === 'admin')
      } else {
        setIsAdmin(false)
      }
    })

    return () => subscription.unsubscribe()
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  return (
    <header className="bg-white border-b border-slate-200">
      {/* Top bar */}
      <div className="bg-slate-800 text-slate-300 text-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end items-center h-8 gap-4">
            <span>Tel. 031-379-0842</span>
            <span className="text-slate-500">|</span>
            <a href="mailto:nsc0203@hs.ac.kr" className="hover:text-white transition-colors">
              nsc0203@hs.ac.kr
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-slate-800 rounded flex items-center justify-center">
                <span className="text-white font-serif text-lg font-bold">AI</span>
              </div>
              <div className="hidden sm:block">
                <p className="text-xs text-slate-500 tracking-wider">HANSHIN UNIVERSITY</p>
                <p className="text-lg font-serif font-semibold text-slate-800">AI 공공정책연구소</p>
              </div>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded text-sm font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <div className="ml-4 pl-4 border-l border-slate-200 flex items-center gap-2">
              {user ? (
                <>
                  {isAdmin && (
                    <Button variant="outline" size="sm" asChild className="border-red-300 text-red-700 hover:bg-red-50">
                      <Link href="/admin" className="flex items-center gap-1">
                        <Shield className="h-3 w-3" />
                        관리자
                      </Link>
                    </Button>
                  )}
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <User className="h-4 w-4" />
                    <span>{user.email}</span>
                  </div>
                  <Button variant="outline" size="sm" onClick={handleLogout}>
                    로그아웃
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/login">로그인</Link>
                  </Button>
                  <Button variant="default" size="sm" asChild className="bg-indigo-600 hover:bg-indigo-700">
                    <Link href="/register">회원가입</Link>
                  </Button>
                </>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">메뉴 열기</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-100">
            <div className="space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 px-4 space-y-2">
                {user ? (
                  <>
                    {isAdmin && (
                      <Button variant="outline" className="w-full border-red-300 text-red-700 hover:bg-red-50" asChild>
                        <Link href="/admin" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center gap-2">
                          <Shield className="h-4 w-4" />
                          관리자 대시보드
                        </Link>
                      </Button>
                    )}
                    <div className="flex items-center gap-2 px-4 py-2 text-sm text-slate-600">
                      <User className="h-4 w-4" />
                      <span>{user.email}</span>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => {
                        handleLogout()
                        setMobileMenuOpen(false)
                      }}
                    >
                      로그아웃
                    </Button>
                  </>
                ) : (
                  <>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                        로그인
                      </Link>
                    </Button>
                    <Button className="w-full bg-indigo-600 hover:bg-indigo-700" asChild>
                      <Link href="/register" onClick={() => setMobileMenuOpen(false)}>
                        회원가입
                      </Link>
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
