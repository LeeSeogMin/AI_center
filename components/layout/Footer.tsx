export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">한신대 AI 정책연구소</h3>
            <p className="text-sm leading-relaxed">
              인공지능 기술의 사회적 영향과 정책 방향을 연구하는
              한신대학교 부설 연구소입니다.
            </p>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">연락처</h3>
            <ul className="space-y-2 text-sm">
              <li>이메일: nsc0203@hs.ac.kr</li>
              <li>전화: 031-379-0842</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">주소</h3>
            <p className="text-sm leading-relaxed">
              경기도 오산시 한신대길 137 (양산동)<br />
              한신대학교 소통관 8431호
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} 한신대 AI 정책연구소. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
