import { Separator } from '@/components/ui/separator'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-slate-700 rounded flex items-center justify-center">
                <span className="text-white font-serif text-sm font-bold">AI</span>
              </div>
              <div>
                <p className="text-xs text-slate-500 tracking-wider">HANSHIN UNIVERSITY</p>
                <p className="text-white font-serif font-semibold">AI 공공정책연구소</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 max-w-md">
              한신대학교 AI 공공정책연구소는 인공지능 기술의 사회적 영향과
              정책 방향을 연구하여 더 나은 미래를 설계합니다.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-serif font-semibold mb-4">연락처</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-slate-500">Tel.</span>
                <span>031-379-0842</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-500">Email.</span>
                <a href="mailto:nsc0203@hs.ac.kr" className="hover:text-white transition-colors">
                  nsc0203@hs.ac.kr
                </a>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-white font-serif font-semibold mb-4">주소</h3>
            <address className="text-sm not-italic leading-relaxed">
              경기도 오산시 한신대길 137<br />
              (양산동) 한신대학교<br />
              소통관 8431호
            </address>
          </div>
        </div>

        <Separator className="my-8 bg-slate-800" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-slate-500">
            &copy; {new Date().getFullYear()} 한신대학교 AI 공공정책연구소. All rights reserved.
          </p>
          <div className="flex gap-6 text-slate-500">
            <a href="/about" className="hover:text-slate-300 transition-colors">연구소 소개</a>
            <a href="/board" className="hover:text-slate-300 transition-colors">공지사항</a>
            <a href="/contact" className="hover:text-slate-300 transition-colors">오시는 길</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
