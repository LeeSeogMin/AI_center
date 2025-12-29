export default function AboutPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">연구소 소개</h1>
          <p className="text-xl text-gray-600">
            한신대학교 AI 정책연구소 - AI 기술과 사회의 조화로운 발전을 위한 정책 연구
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-primary-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-primary-700 mb-4">비전</h2>
            <p className="text-gray-700 leading-relaxed">
              인공지능 기술의 발전이 인류의 행복과 사회적 가치 증진에
              기여할 수 있도록 선도적인 정책 연구를 수행하여,
              AI와 인간이 공존하는 미래 사회를 설계합니다.
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">미션</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                AI 기술의 사회적 영향에 대한 심층 연구
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                윤리적이고 책임감 있는 AI 정책 제안
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                산학연 협력 네트워크 구축
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                차세대 AI 정책 전문가 양성
              </li>
            </ul>
          </div>
        </div>

        {/* History */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">연혁</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {[
                { year: '2024', event: '한신대학교 AI 정책연구소 설립' },
                { year: '2024', event: '연구소 운영 체계 구축' },
                { year: '2025', event: 'AI 정책 연구 본격 추진' },
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-24 text-primary-600 font-bold text-lg">
                    {item.year}
                  </div>
                  <div className="w-4 h-4 bg-primary-600 rounded-full mx-4"></div>
                  <div className="flex-1 text-gray-700">{item.event}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Organization */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">조직 구성</h2>
          <div className="bg-gray-50 p-8 rounded-xl">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="font-semibold text-lg mb-2">정책연구팀</h3>
                <p className="text-gray-600 text-sm">
                  AI 정책 분석 및 제안<br />
                  법제도 연구
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">기술연구팀</h3>
                <p className="text-gray-600 text-sm">
                  AI 기술 동향 분석<br />
                  기술 영향 평가
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">교육협력팀</h3>
                <p className="text-gray-600 text-sm">
                  세미나 및 워크숍 운영<br />
                  산학 협력 프로그램
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
