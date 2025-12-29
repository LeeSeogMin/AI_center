'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

const navigation = [
  { name: '소개', href: '/about' },
  { name: '연구진', href: '/members' },
  { name: '연구성과', href: '/research' },
  { name: '게시판', href: '/board' },
  { name: '연락처', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
                <p className="text-lg font-serif font-semibold text-slate-800">AI 정책연구소</p>
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
            <div className="ml-4 pl-4 border-l border-slate-200">
              <Button variant="outline" size="sm" asChild>
                <Link href="/login">로그인</Link>
              </Button>
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
              <div className="pt-4 px-4">
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                    로그인
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
