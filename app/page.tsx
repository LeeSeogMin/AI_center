import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Target, Database, Cpu } from 'lucide-react'

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section - Visual Heavy & Minimalist */}
      <section className="relative min-h-[85vh] flex items-center bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl animate-in fade-in-slide-in-from-left duration-1000">
              <Badge variant="outline" className="mb-4 border-indigo-200 text-indigo-700 bg-indigo-50/50 px-3 py-1">
                Hanshin University AI Public Policy Research Institute
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-8 leading-[1.2] text-slate-900">
                인공지능으로 설계하는<br />
                <span className="text-indigo-600">공공정책의 미래</span>
              </h1>
              <p className="text-xl md::text-2xl text-slate-600 mb-10 leading-relaxed font-light">
                한신대학교 AI 공공정책연구소는 데이터와 AI 기술을 통해<br />
                더 투명하고 효율적인 국가와 지역사회 혁신을 이끕니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <Button size="lg" asChild className="bg-indigo-600 text-white hover:bg-indigo-700 h-14 px-8 text-lg rounded-full shadow-lg shadow-indigo-200 transition-all hover:scale-105 active:scale-95">
                  <Link href="/about">
                    연구소 소개
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-indigo-200 text-slate-700 hover:bg-indigo-50 h-14 px-8 text-lg rounded-full transition-all">
                  <Link href="/research">연구성과 센터</Link>
                </Button>
              </div>
            </div>
            <div className="relative hidden lg:block animate-in fade-in zoom-in duration-1000 delay-200">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-indigo-200/50 border border-white/50 backdrop-blur-sm">
                <Image
                  src="/hero-artwork.png"
                  alt="AI Policy Artwork"
                  width={800}
                  height={800}
                  className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-100/50 rounded-full blur-3xl -z-1"></div>
              <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-blue-100/50 rounded-full blur-3xl -z-1"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Simplified Vision Section with Illustration */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <Image
                src="/governance-illu.png"
                alt="AI Governance Illustration"
                width={600}
                height={600}
                className="w-full max-w-md mx-auto"
              />
            </div>
            <div className="order-1 md:order-2">
              <Badge className="bg-indigo-100 text-indigo-700 mb-4 px-3 py-1 pointer-events-none">AI Governance</Badge>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-6 leading-tight">
                AI 기술 혁신을 위한<br />공공 거버넌스 체계 구축
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed font-light">
                우리는 AI 도입을 저해하는 기존 행정 구조를 진단하고, 성과 중심의 운영 모델과 책임 있는 AI 거버넌스를 설계합니다.
              </p>
              <Button variant="link" asChild className="text-indigo-600 font-semibold p-0 h-auto text-lg hover:no-underline group">
                <Link href="/about" className="flex items-center">
                  거버넌스 연구 상세 보기
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Simplified Decision Section with Illustration */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-blue-100 text-blue-700 mb-4 px-3 py-1 pointer-events-none">Data Intelligence</Badge>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-6 leading-tight">
                데이터 기반의<br />지능형 정책 시뮬레이션
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed font-light">
                정량적 예측과 AI 기반 시뮬레이션을 통해 정책의 효과를 미리 평가하고, 행정 서비스의 전주기를 과학화합니다.
              </p>
              <Button variant="link" asChild className="text-blue-600 font-semibold p-0 h-auto text-lg hover:no-underline group">
                <Link href="/research" className="flex items-center">
                  데이터 센터 성과 보기
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            <div>
              <Image
                src="/decision-illu.png"
                alt="Data Decision Illustration"
                width={600}
                height={600}
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Minimalism in Stats/Labs - Summary Only */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-6">연구실 안내</h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-light">
              각 분야별 전문 연구실을 통해 AI 행정 혁신을 실현합니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'AI 행정혁신실', icon: Target, labs: 'admin', color: 'indigo' },
              { title: 'AI 지역학연구실', icon: Database, labs: 'area', color: 'blue' },
              { title: 'AI 개발창업실', icon: Cpu, labs: 'dev', color: 'violet' },
            ].map((lab) => (
              <Link
                key={lab.title}
                href="/about"
                className="group p-8 rounded-2xl bg-white border border-slate-100 hover:border-indigo-200 hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className={`w-16 h-16 rounded-2xl bg-${lab.color}-50 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  <lab.icon className={`h-8 w-8 text-${lab.color}-600`} />
                </div>
                <h3 className="text-xl font-serif font-bold text-slate-800 mb-2">{lab.title}</h3>
                <p className="text-sm text-slate-500 group-hover:text-indigo-600 transition-colors">상세보기</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Notice CTA */}
      <section className="py-24 bg-indigo-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/10 skew-x-12 translate-x-1/2"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-white">
              <h2 className="text-3xl font-serif font-bold mb-4">연구 협력 및 문의</h2>
              <p className="text-indigo-100 font-light text-lg">
                인공지능 기반 공공혁신 연구를 성사시키기 위한 소중한 제안을 기다립니다.
              </p>
            </div>
            <div className="flex gap-4">
              <Button size="lg" asChild className="bg-white text-indigo-600 hover:bg-slate-50 rounded-full h-14 px-8 text-lg font-semibold">
                <Link href="/contact">문의하기</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
