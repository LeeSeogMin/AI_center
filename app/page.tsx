import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { ArrowRight, Target, Database, Cpu, Globe2 } from 'lucide-react'

export default function Home() {
  return (
    <div>
      {/* Hero Section - 밝고 학술적인 배경 */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl">
            <p className="text-indigo-600 text-sm tracking-widest uppercase mb-4 font-semibold">
              Hanshin University AI Policy Research Institute
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight text-slate-900">
              한신대학교<br />
              <span className="text-indigo-700">AI 정책연구소</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 mb-4 leading-relaxed font-semibold">
              국가·지자체의 AI기반 공공혁신을 위한 연구 허브
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              AI와 데이터 과학을 통해 행정의 과학화·투명화·효율화를 촉진하고,<br className="hidden md:block" />
              공공가치 창출과 지역사회 문제 해결에 기여합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="bg-indigo-600 text-white hover:bg-indigo-700">
                <Link href="/about">
                  연구소 소개
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-slate-300 text-slate-700 hover:bg-slate-100">
                <Link href="/research">연구성과 보기</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-white border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-indigo-100 text-indigo-700">Core Values</Badge>
            <h2 className="text-3xl font-serif font-bold text-slate-800">핵심가치</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            {[
              { label: '공공성', sub: 'Responsibility' },
              { label: '신뢰성', sub: 'Reliability' },
              { label: '투명성', sub: 'Transparency' },
              { label: '포용성', sub: 'Inclusion' },
              { label: '개방성', sub: 'Open Collaboration' },
            ].map((value) => (
              <div key={value.label} className="flex flex-col items-center p-4 rounded-lg bg-slate-50 hover:bg-indigo-50 transition-colors">
                <p className="text-2xl font-serif font-bold text-indigo-700 mb-1">{value.label}</p>
                <p className="text-xs text-slate-500 uppercase tracking-wide">{value.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Tasks Section */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-indigo-100 text-indigo-700">Key Tasks</Badge>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-4">
              핵심과제
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              AI 기술 혁신을 통한 공공행정 서비스의 혁신과 데이터 기반 정책 의사결정 체계 구축
            </p>
          </div>

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
                icon: Database,
              },
              {
                number: '03',
                title: 'AI 기반 공공행정 서비스 혁신 모델 개발 및 실증',
                description: '민원, 복지, 교통, 환경, 법령, 감사, 통계 등 행정 전 영역에 걸친 공공 서비스 AI 모델 설계·개발·실증. 데이터 기반 정책결정, 민원 자동화, 사전예방 행정 등 AI 행정의 전주기 적용 사례를 구축합니다.',
                icon: Cpu,
              },
            ].map((task) => (
              <Card key={task.number} className="border-slate-200 hover:shadow-lg transition-all hover:border-indigo-300 bg-white">
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
      </section>

      {/* Research Labs */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-indigo-100 text-indigo-700">Research Labs</Badge>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-4">
              연구실
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              3개 연구실을 중심으로 AI 행정혁신, 동아시아 지역학, 공공서비스 개발 연구를 수행합니다
            </p>
          </div>

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
      </section>

      {/* News Section */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <Badge variant="secondary" className="mb-4 bg-indigo-100 text-indigo-700">Notice</Badge>
              <h2 className="text-3xl font-serif font-bold text-slate-800">공지사항</h2>
            </div>
            <Button variant="ghost" asChild>
              <Link href="/board" className="text-slate-600 hover:text-indigo-600">
                더보기 <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="space-y-4">
            {[
              {
                title: '한신대학교 AI 정책연구소 설립 공지',
                date: '2025.12.29',
                category: '공지사항',
              },
            ].map((news, index) => (
              <div key={index}>
                <Link
                  href={`/board/${index + 1}`}
                  className="flex items-center justify-between py-4 hover:bg-white px-4 -mx-4 rounded transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <Badge variant="outline" className="font-normal border-indigo-200 text-indigo-700">
                      {news.category}
                    </Badge>
                    <span className="text-slate-800 group-hover:text-indigo-600 transition-colors">
                      {news.title}
                    </span>
                  </div>
                  <span className="text-sm text-slate-400">{news.date}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-blue-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-white mb-4">
                연구 협력 및 문의
              </h2>
              <p className="text-indigo-100 leading-relaxed mb-6">
                한신대학교 AI 정책연구소와 함께 AI 기반 공공혁신을 연구하고 싶으시다면
                언제든지 연락해 주세요. 산학 협력, 공동 연구, 세미나 참여 등
                다양한 형태의 협력을 환영합니다.
              </p>
              <Button size="lg" asChild className="bg-white text-indigo-600 hover:bg-slate-100">
                <Link href="/contact">
                  연락하기
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
              <div className="space-y-4 text-white">
                <div className="flex items-center gap-3">
                  <span className="text-indigo-200 w-16">Tel.</span>
                  <span>031-379-0842</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-indigo-200 w-16">Email.</span>
                  <a href="mailto:nsc0203@hs.ac.kr" className="hover:text-indigo-200 transition-colors">
                    nsc0203@hs.ac.kr
                  </a>
                </div>
                <Separator className="bg-white/20" />
                <div className="flex items-start gap-3">
                  <span className="text-indigo-200 w-16">주소</span>
                  <span>
                    경기도 오산시 한신대길 137<br />
                    한신대학교 소통관 8431호
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
