import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI 정책연구소
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto">
              인공지능 기술의 사회적 영향과 정책 방향을 연구하여
              <br className="hidden md:block" />
              더 나은 미래를 만들어갑니다
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/about"
                className="bg-white text-primary-700 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
              >
                연구소 소개
              </Link>
              <Link
                href="/research"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                연구성과 보기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">주요 연구 분야</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'AI 윤리 및 거버넌스',
                description: '인공지능 기술의 윤리적 사용과 효과적인 거버넌스 체계 연구',
                icon: '⚖️',
              },
              {
                title: 'AI 산업 정책',
                description: 'AI 산업 육성 및 국가 경쟁력 강화를 위한 정책 연구',
                icon: '🏭',
              },
              {
                title: 'AI와 사회 변화',
                description: '인공지능이 노동, 교육, 의료 등 사회 각 분야에 미치는 영향 분석',
                icon: '🌐',
              },
            ].map((area) => (
              <div
                key={area.title}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{area.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
                <p className="text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">최근 소식</h2>
            <Link href="/board" className="text-primary-600 hover:text-primary-700 font-medium">
              더보기 →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: '2024년 상반기 AI 정책 세미나 개최',
                date: '2024.03.15',
                category: '공지사항',
              },
              {
                title: 'AI 윤리 가이드라인 연구보고서 발간',
                date: '2024.03.10',
                category: '연구성과',
              },
              {
                title: '국제 AI 정책 포럼 참가 보고',
                date: '2024.03.05',
                category: '소식',
              },
            ].map((news, index) => (
              <article
                key={index}
                className="border rounded-lg p-6 hover:border-primary-300 transition-colors"
              >
                <span className="text-sm text-primary-600 font-medium">{news.category}</span>
                <h3 className="text-lg font-semibold mt-2 mb-3">{news.title}</h3>
                <p className="text-sm text-gray-500">{news.date}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">연구 협력 및 문의</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            AI 정책 연구에 관심이 있으시거나 협력을 원하시면 언제든지 연락해 주세요.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            연락하기
          </Link>
        </div>
      </section>
    </div>
  )
}
