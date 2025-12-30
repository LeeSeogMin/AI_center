const researchItems = [
  {
    title: 'AI 윤리 가이드라인 연구보고서 (테스트)',
    category: '연구보고서',
    year: '2024',
    description: '국내 AI 개발 및 활용을 위한 윤리적 가이드라인 제안',
  },
  {
    title: '생성형 AI의 사회적 영향 분석 (테스트)',
    category: '정책보고서',
    year: '2024',
    description: 'ChatGPT 등 생성형 AI가 교육, 노동, 창작 분야에 미치는 영향 분석',
  },
  {
    title: 'AI 규제 국제 비교 연구 (테스트)',
    category: '연구보고서',
    year: '2024',
    description: 'EU AI Act, 미국, 중국 등 주요국 AI 규제 동향 비교 분석',
  },
  {
    title: 'AI 기술 발전과 일자리 변화 (테스트)',
    category: '정책브리프',
    year: '2024',
    description: 'AI 기술 도입에 따른 노동시장 변화 전망 및 정책 제언',
  },
]

export default function ResearchPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">연구성과</h1>
          <p className="text-xl text-gray-600">
            AI 공공정책연구소의 연구 결과물
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {['전체', '연구보고서', '정책보고서', '정책브리프', '학술논문'].map((filter) => (
            <button
              key={filter}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === '전체'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Research List */}
        <div className="space-y-6">
          {researchItems.map((item, index) => (
            <div
              key={index}
              className="bg-white border rounded-lg p-6 hover:border-primary-300 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full">
                      {item.category}
                    </span>
                    <span className="text-sm text-gray-500">{item.year}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
                <div className="mt-4 md:mt-0 md:ml-6">
                  <button className="px-4 py-2 border border-primary-600 text-primary-600 rounded-md text-sm font-medium hover:bg-primary-50 transition-colors">
                    자세히 보기
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
