import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Target, Globe2, Cpu } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold mb-4 text-slate-800">연구소 소개</h1>
          <p className="text-xl text-slate-600">
            국가·지자체의 AI기반 공공혁신을 위한 연구 허브
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-xl border-2 border-indigo-200">
            <h2 className="text-2xl font-serif font-bold text-indigo-800 mb-4">비전</h2>
            <p className="text-slate-700 leading-relaxed font-semibold text-lg">
              국가·지자체의 AI기반 공공혁신을 위한 연구 허브
            </p>
          </div>
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-xl border-2 border-slate-200">
            <h2 className="text-2xl font-serif font-bold text-slate-800 mb-4">미션</h2>
            <p className="text-slate-700 leading-relaxed">
              AI와 데이터 과학을 통해 행정의 과학화·투명화·효율화를 촉진하고,
              공공가치 창출과 지역사회 문제 해결에 기여합니다.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-serif font-bold text-center mb-12 text-slate-800">핵심가치</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { label: '공공성', sub: 'Responsibility' },
              { label: '신뢰성', sub: 'Reliability' },
              { label: '투명성', sub: 'Transparency' },
              { label: '포용성', sub: 'Inclusion' },
              { label: '개방성', sub: 'Open Collaboration' },
            ].map((value) => (
              <div key={value.label} className="flex flex-col items-center p-6 rounded-lg bg-indigo-50 border border-indigo-200 hover:bg-indigo-100 transition-colors">
                <p className="text-2xl font-serif font-bold text-indigo-700 mb-1">{value.label}</p>
                <p className="text-xs text-slate-600 uppercase tracking-wide text-center">{value.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Tasks */}
        <div className="mb-20">
          <h2 className="text-3xl font-serif font-bold text-center mb-12 text-slate-800">핵심과제</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: '01',
                title: 'AI 기술 혁신을 위한 공공거버넌스 및 조직운영 진단·개편 모델 구축',
                description: 'AI 도입을 저해하는 기존 행정 거버넌스 구조를 진단하고, AI 기반 업무 재설계, 책임 분산 방지, 적정 권한 위임, 성과 중심 운영 모델을 제시합니다.',
                icon: Target,
              },
              {
                number: '02',
                title: '데이터 기반 정책 시뮬레이션 및 영향평가 체계 구축',
                description: '사전적 정책 실험 및 정량적 예측 기반 의사결정 체계로의 전환. 공공 데이터를 통합하고 AI 기반 예측모델을 활용한 정책 시뮬레이션·A/B 테스트·영향평가 모델을 구현합니다.',
                icon: Target,
              },
              {
                number: '03',
                title: 'AI 기반 공공행정 서비스 혁신 모델 개발 및 실증',
                description: '민원, 복지, 교통, 환경, 법령, 감사, 통계 등 행정 전 영역에 걸친 공공 서비스 AI 모델 설계·개발·실증. 데이터 기반 정책결정, 민원 자동화, 사전예방 행정 등 AI 행정의 전주기 적용 사례를 구축합니다.',
                icon: Target,
              },
            ].map((task) => (
              <Card key={task.number} className="border-2 border-indigo-200 hover:shadow-xl transition-all hover:border-indigo-300 bg-white">
                <CardHeader>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-5xl font-serif font-bold text-indigo-200">{task.number}</div>
                    <task.icon className="h-8 w-8 text-indigo-600 mt-2" />
                  </div>
                  <CardTitle className="font-serif text-lg leading-tight text-slate-800">{task.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm leading-relaxed">{task.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Research Labs */}
        <div className="mb-20">
          <h2 className="text-3xl font-serif font-bold text-center mb-12 text-slate-800">연구실</h2>
          <div className="space-y-6">
            {[
              {
                title: 'AI 행정혁신실',
                director: '실장: 윤건 교수',
                description: 'AI 거버넌스, AI 정책·제도 연구, 정책평가모형 개발',
                tasks: [
                  '공공조직의 AI 수용역량 진단 지표 개발 (인력·문화·제도·기술)',
                  '부처·지자체 단위의 조직 프로세스 분석 및 Bottleneck 파악',
                  'AI 도입 업무 리엔지니어링(BPR) 모델 설계',
                  '책임 있는 AI 운영을 위한 다층적 거버넌스 구조 설계',
                  '디지털 행정 전환 로드맵 수립 및 적용 컨설팅',
                  '정책 시뮬레이션/영향평가모형, ML 및 정책실험 모델 연구',
                ],
                icon: Target,
                color: 'indigo',
              },
              {
                title: 'AI 지역학연구실',
                director: '실장: 주장환 교수',
                description: 'AI 방법론 기반 동아시아 지역학 연구 및 지역 맞춤형 LLM 개발',
                tasks: [
                  'AI 방법론 기반의 동아시아 지역학 연구',
                  '서구편향이 아닌 동아시아 기반 대규모 언어모델(LLM) 개발',
                  '한중일 정치행정제도 비교 연구',
                  'AI 기반 지역 갈등 분석 및 해소 방안 연구',
                  '동아시아 미래예측 모델링 및 시나리오 분석',
                  '지역 특화 AI 거버넌스 및 정책 연구',
                ],
                icon: Globe2,
                color: 'blue',
              },
              {
                title: 'AI 개발창업실',
                director: '실장: 이석민 교수',
                description: 'AI기반 공공서비스·플랫폼 개발, MLOps, 인큐베이팅, 기술이전',
                tasks: [
                  '분야별(민원, 복지, 교통, 환경, 재난, 행정문서 등) AI 활용 가능성 조사 및 수요 발굴',
                  '주요 기능군에 대한 AI 행정 모델 유형 분류 (예측형, 분류형, 생성형 등)',
                  '공공조직에 적합한 경량화된 AI 모델 및 운영 프레임 설계',
                  '행정정보시스템·데이터·업무 프로세스와의 통합 실증',
                  '지자체·부처 대상 시범사업(PoC) 설계 및 협업 추진',
                  '공공 데이터 수집·정제·품질관리·카탈로그·API 공개 및 MLOps 구축',
                ],
                icon: Cpu,
                color: 'violet',
              },
            ].map((lab) => (
              <Card key={lab.title} className={`border-2 ${
                lab.color === 'indigo' ? 'border-indigo-300 bg-gradient-to-br from-white to-indigo-100' :
                lab.color === 'blue' ? 'border-blue-300 bg-gradient-to-br from-white to-blue-100' :
                'border-violet-300 bg-gradient-to-br from-white to-violet-100'
              } hover:shadow-xl transition-all`}>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <lab.icon className={`h-10 w-10 flex-shrink-0 ${
                      lab.color === 'indigo' ? 'text-indigo-600' :
                      lab.color === 'blue' ? 'text-blue-600' :
                      'text-violet-600'
                    }`} />
                    <div className="flex-1">
                      <CardTitle className="font-serif text-2xl mb-2 text-slate-800">{lab.title}</CardTitle>
                      <p className="text-sm text-slate-500 mb-2">{lab.director}</p>
                      <p className="text-slate-700 font-medium">{lab.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {lab.tasks.map((task, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className={`mt-1 ${
                          lab.color === 'indigo' ? 'text-indigo-600' :
                          lab.color === 'blue' ? 'text-blue-600' :
                          'text-violet-600'
                        }`}>•</span>
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* History */}
        <div className="mb-20">
          <h2 className="text-3xl font-serif font-bold text-center mb-12 text-slate-800">연혁</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {[
                { year: '2025. 12', event: '한신대학교 AI 공공정책연구소 설립' },
                { year: '2025. 12', event: '연구소 운영 체계 구축' },
                { year: '2026', event: 'AI 정책 연구 본격 추진' },
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-32 text-indigo-600 font-bold text-lg">
                    {item.year}
                  </div>
                  <div className="w-4 h-4 bg-indigo-600 rounded-full mx-4"></div>
                  <div className="flex-1 text-slate-700">{item.event}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Organization Structure */}
        <div>
          <h2 className="text-3xl font-serif font-bold text-center mb-12 text-slate-800">조직 구성</h2>
          <div className="bg-slate-50 p-8 rounded-xl border-2 border-slate-200">
            <div className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="font-serif text-xl font-bold mb-2 text-slate-800">연구소장</h3>
                <p className="text-slate-600">
                  노승철 교수 - 연구소 총괄, 대외협력, 성과관리
                </p>
              </div>
              <div className="border-t-2 border-slate-200 pt-6">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center p-6 bg-white rounded-lg border border-slate-200">
                    <h3 className="font-serif font-bold text-lg mb-2 text-indigo-700">AI 행정혁신실</h3>
                    <p className="text-slate-600 text-sm mb-1">실장: 윤건 교수</p>
                  </div>
                  <div className="text-center p-6 bg-white rounded-lg border border-slate-200">
                    <h3 className="font-serif font-bold text-lg mb-2 text-blue-700">AI 지역학연구실</h3>
                    <p className="text-slate-600 text-sm mb-1">실장: 주장환 교수</p>
                  </div>
                  <div className="text-center p-6 bg-white rounded-lg border border-slate-200">
                    <h3 className="font-serif font-bold text-lg mb-2 text-violet-700">AI 개발창업실</h3>
                    <p className="text-slate-600 text-sm mb-1">실장: 이석민 교수</p>
                  </div>
                </div>
              </div>
              <div className="border-t-2 border-slate-200 pt-6 mt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-indigo-50 rounded-lg border border-indigo-200">
                    <h3 className="font-serif font-bold text-lg mb-2 text-slate-800">운영위원회</h3>
                    <p className="text-slate-600 text-sm">
                      학내·외 전문가 5-7인<br />
                      연 2회 전략·예산·윤리 심의
                    </p>
                  </div>
                  <div className="text-center p-6 bg-indigo-50 rounded-lg border border-indigo-200">
                    <h3 className="font-serif font-bold text-lg mb-2 text-slate-800">자문위원단</h3>
                    <p className="text-slate-600 text-sm">
                      중앙부처·지자체·공공기관·산업 전문가
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
