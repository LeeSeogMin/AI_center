import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import type { Director, ResearchLab, Advisor, OrganizationMember } from '@/types'

// 색상 헬퍼 함수
function getColorClasses(color: 'indigo' | 'blue' | 'violet') {
  const classes = {
    indigo: {
      border: 'border-indigo-300',
      bgGradient: 'to-indigo-50',
      title: 'text-indigo-700',
      text: 'text-indigo-600',
      badge: 'bg-indigo-100 text-indigo-700',
      avatar: 'bg-indigo-500',
    },
    blue: {
      border: 'border-blue-300',
      bgGradient: 'to-blue-50',
      title: 'text-blue-700',
      text: 'text-blue-600',
      badge: 'bg-blue-100 text-blue-700',
      avatar: 'bg-blue-500',
    },
    violet: {
      border: 'border-violet-300',
      bgGradient: 'to-violet-50',
      title: 'text-violet-700',
      text: 'text-violet-600',
      badge: 'bg-violet-100 text-violet-700',
      avatar: 'bg-violet-500',
    },
  }

  return classes[color]
}

// ==================== 데이터 ====================

// 연구소장
const director: Director = {
  name: '노승철',
  title: '연구소장',
  position: '부교수',
  researchAreas: '공공데이터, 공간정보분석, ML모델개발',
  office: '소통관 8431호',
  phone: '031-379-0842',
  email: 'nsc0203@hs.ac.kr',
}

// 연구실 (3개)
const researchLabs: ResearchLab[] = [
  {
    name: 'AI행정혁신실',
    color: 'indigo',
    director: {
      name: '윤건',
      position: '부교수',
      researchAreas: '공공관리/데이터기반행정',
      office: '소통관 8325호',
      phone: '031-379-0739',
      email: 'kyoon2010@hs.ac.kr',
    },
    researchers: [
      { name: '장익현', researchAreas: '사회복지학' },
      { name: '유영국', researchAreas: '경제법' },
    ],
    visitingResearchers: [null, null],
  },
  {
    name: 'AI지역학연구실',
    color: 'blue',
    director: {
      name: '유은하',
      position: '교수',
    },
    researchers: [
      {
        name: '주장환',
        position: '교수',
        researchAreas: '중국정치경제',
        office: '소통관 8405호',
        phone: '031-379-0535',
        email: 'joojh@hs.ac.kr',
      },
      { name: '김계자' },
    ],
    visitingResearchers: [
      {
        name: '김선래',
        institution: '제주대학교',
        externalPosition: '조교수',
        researchAreas: '북러관계, 중러관계',
      },
      {
        name: '허재철',
        institution: '대외경제정책연구원',
        externalPosition: '실장',
        researchAreas: '동아시아, 빅데이터, 커뮤니케이션',
      },
      {
        name: '조형진',
        institution: '인천대학교',
        externalPosition: '부교수',
        researchAreas: '중국, 동아시아',
      },
      {
        name: '윤석욱',
        institution: '충북대학교',
        externalPosition: '교수',
        researchAreas: 'EU, 국제정치경제',
      },
    ],
  },
  {
    name: 'AI개발창업실',
    color: 'violet',
    director: {
      name: '이석민',
      position: '부교수',
      researchAreas: '정책분석평가/인공지능 개발',
      office: '소통관 8303호',
      phone: '031-379-0738',
      email: 'newmind68@hs.ac.kr',
    },
    researchers: [
      { name: '이남연', researchAreas: '경영정보시스템' },
      { name: '이용걸', researchAreas: '컴퓨터공학' },
    ],
    visitingResearchers: [null, null],
  },
]

// 자문위원단
const advisors: Advisor[] = [
  {
    name: '이세원',
    institution: '국토연구원',
    externalPosition: '부연구위원',
    researchAreas: 'AI도시, 공간정보',
  },
  {
    name: '박정호',
    institution: '연세대학교',
    externalPosition: '조교수',
    phone: '02-2123-2965',
    email: 'jhpark.planner@yonsei.ac.kr',
    researchAreas: '국가공간정보(GIS)정책, 주거/주택/부동산정책, 인구보건정책',
  },
  {
    name: '남태우',
    institution: '성균관대학교',
    externalPosition: '교수',
    phone: '02-760-0372',
    email: 'namtaewoo@skku.edu',
    researchAreas: '디지털정부, 정보정책, 정부혁신',
  },
  {
    name: '성욱준',
    institution: '서울과학기술대학교',
    externalPosition: '부교수',
    phone: '02-970-6866',
    email: 'wjsung@seoultech.ac.kr',
    researchAreas: 'IT Policy, Research Design & Methods, Evidence-based Policy',
  },
  {
    name: '최한별',
    institution: '전북대학교',
    externalPosition: '조교수',
    phone: '063-270-2951',
    email: 'chb@jbnu.ac.kr',
    researchAreas: '디지털정부, 성과관리',
  },
  {
    name: '박종수',
    institution: '숙명여자대학교',
    externalPosition: '부교수',
    phone: '02-710-9465',
    email: 'jpark@sookmyung.ac.kr',
    researchAreas: '조직행동, 조직관리, 공공리더십, 공공윤리',
  },
  {
    name: '이창용',
    institution: '고려대학교',
    externalPosition: '부교수',
    phone: '02-3290-2278',
    email: 'changyonglee@korea.ac.kr',
    researchAreas: '정책 정보학, 디지털 전환, 기술경영 및 정책, 기계학습 및 딥러닝 응용',
  },
  {
    name: '오경석',
    institution: '영남대학교',
    externalPosition: '부교수',
    phone: '053-810-2658',
    email: 'gyeongseokoh@yu.ac.kr',
    researchAreas: '범죄예방, 범죄학, 치안정책(인공지능 경찰활동 등)',
  },
  {
    name: '홍승헌',
    institution: '한국행정연구원',
    externalPosition: '연구위원',
    phone: '02-2007-0667',
    email: 'seunghun.hong@kipa.re.kr',
    researchAreas: '규제거버넌스, 신산업규제, 인공지능기반 레그테크',
  },
  {
    name: '박정원',
    institution: '국립경북대학교',
    externalPosition: '부교수',
    phone: '054-820-5407',
    email: 'jwpark@anu.ac.kr',
    researchAreas: '정책분석, 보건정책, 정부규제, 공공관리',
  },
]

// ==================== 컴포넌트 ====================

// TBD 슬롯
function TBDSlot({ color }: { color: 'indigo' | 'blue' | 'violet' }) {
  return (
    <div className="p-3 rounded-lg border border-dashed border-slate-300 bg-slate-50">
      <p className="text-xs text-slate-400 text-center">준비중</p>
    </div>
  )
}

// 구성원 미니 카드
function MemberMiniCard({
  member,
  color,
  isDirector = false,
  isExternal = false,
}: {
  member: OrganizationMember
  color: 'indigo' | 'blue' | 'violet'
  isDirector?: boolean
  isExternal?: boolean
}) {
  const colorClasses = getColorClasses(color)

  return (
    <div
      className={`p-3 rounded-lg bg-white border ${
        isDirector ? 'border-2 ' + colorClasses.border : 'border-slate-200'
      } hover:shadow-md transition-all`}
    >
      <div className="flex items-start gap-3">
        {/* 아바타 */}
        <div
          className={`w-10 h-10 rounded-full ${colorClasses.avatar} flex items-center justify-center text-white text-sm font-semibold flex-shrink-0`}
        >
          {member.name.charAt(0)}
        </div>

        <div className="flex-1 min-w-0">
          <h5 className="font-semibold text-slate-800 text-sm mb-0.5">{member.name}</h5>

          {/* 내부 구성원: 직급 표시 */}
          {member.position && (
            <p className={`text-xs ${colorClasses.text}`}>{member.position}</p>
          )}

          {/* 연구분야 */}
          {member.researchAreas && (
            <p className="text-xs text-slate-500 mt-0.5">{member.researchAreas}</p>
          )}

          {/* 연락처 정보 */}
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className={`text-xs ${colorClasses.text} hover:underline block truncate mt-1`}
            >
              {member.email}
            </a>
          )}

          {/* 외부 소속 - 카드 하단에 작은 텍스트 */}
          {isExternal && member.institution && (
            <p className="text-xs text-slate-500 mt-1">
              {member.institution} {member.externalPosition}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

// 연구실 카드
function LabCard({ lab }: { lab: ResearchLab }) {
  const colorClasses = getColorClasses(lab.color)

  return (
    <Card
      className={`border-2 ${colorClasses.border} bg-gradient-to-br from-white ${colorClasses.bgGradient} hover:shadow-xl transition-all flex flex-col h-full`}
    >
      <CardHeader>
        <CardTitle className={`font-serif text-xl text-center ${colorClasses.title}`}>
          {lab.name}
        </CardTitle>
      </CardHeader>

      <CardContent className="flex-1 space-y-6">
        {/* 실장 - 강조 */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Badge className={colorClasses.badge}>실장</Badge>
          </div>
          <MemberMiniCard member={lab.director} color={lab.color} isDirector />
        </div>

        {/* 연구위원 */}
        {lab.researchers.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-slate-600 mb-3">연구위원</h4>
            <div className="space-y-3">
              {lab.researchers.map((researcher) => (
                <MemberMiniCard
                  key={researcher.name}
                  member={researcher}
                  color={lab.color}
                />
              ))}
            </div>
          </div>
        )}

        {/* 객원연구위원 */}
        {lab.visitingResearchers.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-slate-600 mb-3">객원연구위원</h4>
            <div className="space-y-3">
              {lab.visitingResearchers.map((researcher, idx) =>
                researcher ? (
                  <MemberMiniCard
                    key={researcher.name}
                    member={researcher}
                    color={lab.color}
                    isExternal
                  />
                ) : (
                  <TBDSlot key={`tbd-${idx}`} color={lab.color} />
                )
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

// 자문위원 카드
function AdvisorCard({ advisor }: { advisor: Advisor }) {
  return (
    <Card className="border border-slate-200 hover:border-indigo-200 hover:shadow-lg transition-all">
      <CardContent className="p-5">
        <div className="flex items-start gap-3 mb-3">
          {/* 아바타 */}
          <div className="w-12 h-12 rounded-full bg-slate-400 flex items-center justify-center text-white font-semibold flex-shrink-0">
            {advisor.name.charAt(0)}
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="font-serif font-bold text-slate-800 mb-1">{advisor.name}</h3>
            {/* 소속 배지 */}
            <Badge
              variant="outline"
              className="text-xs border-indigo-200 text-indigo-700 bg-indigo-50"
            >
              {advisor.institution}
            </Badge>
          </div>
        </div>

        {/* 직위 */}
        {advisor.externalPosition && (
          <p className="text-sm text-slate-600 mb-2">{advisor.externalPosition}</p>
        )}

        {/* 전문분야 */}
        {advisor.researchAreas && (
          <p className="text-xs text-slate-500 mb-3 line-clamp-2">
            전문분야: {advisor.researchAreas}
          </p>
        )}

        {/* 연락처 */}
        <div className="space-y-1 text-xs text-slate-600">
          {advisor.phone && <p>전화: {advisor.phone}</p>}
          {advisor.email && (
            <a
              href={`mailto:${advisor.email}`}
              className="text-indigo-600 hover:underline block truncate"
            >
              {advisor.email}
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

// ==================== 메인 페이지 ====================

export default function MembersPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 페이지 헤더 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold mb-4 text-slate-800">연구진</h1>
          <p className="text-xl text-slate-600">
            한신대 AI 공공정책연구소를 이끌어가는 전문가들
          </p>
        </div>

        {/* 섹션 1: 연구소장 */}
        <section className="mb-20">
          <h2 className="text-3xl font-serif font-bold text-center mb-8 text-slate-800">
            연구소장
          </h2>
          <Card className="border-2 border-indigo-300 bg-gradient-to-br from-white to-indigo-50 hover:shadow-xl transition-all max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="w-24 h-24 rounded-full bg-indigo-600 flex items-center justify-center text-white text-3xl font-serif flex-shrink-0">
                  {director.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-serif font-bold text-slate-800">
                      {director.name}
                    </h3>
                    <Badge className="bg-indigo-100 text-indigo-700">{director.title}</Badge>
                  </div>
                  <p className="text-indigo-600 font-semibold mb-1">{director.position}</p>
                  <p className="text-slate-600 mb-4">전공: {director.researchAreas}</p>

                  <div className="grid md:grid-cols-2 gap-x-8 gap-y-2 text-sm text-slate-600">
                    <p>연구실: {director.office}</p>
                    <p>전화: {director.phone}</p>
                    <a
                      href={`mailto:${director.email}`}
                      className="text-indigo-600 hover:text-indigo-700 hover:underline"
                    >
                      {director.email}
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 섹션 2: 연구실 */}
        <section className="mb-20">
          <h2 className="text-3xl font-serif font-bold text-center mb-12 text-slate-800">
            연구실
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {researchLabs.map((lab) => (
              <LabCard key={lab.name} lab={lab} />
            ))}
          </div>
        </section>

        {/* 섹션 3: 운영위원회 */}
        <section className="mb-20">
          <h2 className="text-3xl font-serif font-bold text-center mb-8 text-slate-800">
            운영위원회
          </h2>
          <Card className="border-2 border-slate-200 bg-slate-50 max-w-2xl mx-auto">
            <CardContent className="p-12 text-center">
              <div className="w-16 h-16 rounded-full bg-slate-200 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⏳</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-700 mb-2">준비중</h3>
              <p className="text-slate-600">학내·외 전문가로 구성될 예정입니다</p>
              <p className="text-sm text-slate-500 mt-2">예정 인원: 6명</p>
            </CardContent>
          </Card>
        </section>

        {/* 섹션 4: 자문위원단 */}
        <section>
          <h2 className="text-3xl font-serif font-bold text-center mb-12 text-slate-800">
            자문위원단
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advisors.map((advisor) => (
              <AdvisorCard key={advisor.name} advisor={advisor} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
