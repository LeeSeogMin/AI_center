const members = [
  {
    name: '노승철',
    position: '연구소장',
    role: '부교수',
    major: '환경계획학',
    office: '소통관 8431호',
    phone: '031-379-0842',
    email: 'nsc0203@hs.ac.kr',
  },
  {
    name: '윤건',
    position: '연구원',
    role: '부교수',
    major: '공공관리/데이터기반행정',
    office: '소통관 8325호',
    phone: '031-379-0739',
    email: 'kyoon2010@hs.ac.kr',
  },
  {
    name: '이석민',
    position: '연구원',
    role: '부교수',
    major: '정책분석평가/인공지능 개발',
    office: '소통관 8303호',
    phone: '031-379-0738',
    email: 'newmind68@hs.ac.kr',
  },
  {
    name: '주장환',
    position: '연구원',
    role: '교수',
    major: '중국정치경제',
    office: '소통관 8405호',
    phone: '031-379-0535',
    email: 'joojh@hs.ac.kr',
  },
]

export default function MembersPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">연구진</h1>
          <p className="text-xl text-gray-600">
            한신대 AI 정책연구소를 이끌어가는 전문가들
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {members.map((member) => (
            <div
              key={member.name}
              className={`bg-white border rounded-xl p-6 hover:shadow-lg transition-shadow ${
                member.position === '연구소장' ? 'md:col-span-2 border-primary-300' : ''
              }`}
            >
              <div className="flex items-start space-x-4">
                <div className={`w-20 h-20 rounded-full flex items-center justify-center text-2xl text-white ${
                  member.position === '연구소장' ? 'bg-primary-600' : 'bg-gray-400'
                }`}>
                  {member.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    {member.position === '연구소장' && (
                      <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded">
                        연구소장
                      </span>
                    )}
                  </div>
                  <p className="text-primary-600 font-medium">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-3">전공: {member.major}</p>
                  <div className="space-y-1 text-sm text-gray-500">
                    <p>연구실: {member.office}</p>
                    <p>전화: {member.phone}</p>
                    <a
                      href={`mailto:${member.email}`}
                      className="text-primary-600 hover:text-primary-700 block"
                    >
                      {member.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
