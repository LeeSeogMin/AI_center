const members = [
  {
    name: '홍길동',
    position: '소장',
    role: '연구소 총괄',
    email: 'hong@university.ac.kr',
    description: 'AI 정책 및 거버넌스 전문가. 20년간 IT 정책 연구 경력.',
  },
  {
    name: '김연구',
    position: '수석연구원',
    role: '정책연구팀장',
    email: 'kim@university.ac.kr',
    description: 'AI 윤리 및 법제도 연구. 법학박사.',
  },
  {
    name: '이기술',
    position: '책임연구원',
    role: '기술연구팀장',
    email: 'lee@university.ac.kr',
    description: 'AI/ML 기술 동향 분석. 컴퓨터공학박사.',
  },
  {
    name: '박협력',
    position: '선임연구원',
    role: '교육협력팀장',
    email: 'park@university.ac.kr',
    description: '산학협력 및 교육 프로그램 기획 전문가.',
  },
]

export default function MembersPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">연구진</h1>
          <p className="text-xl text-gray-600">
            AI 정책 연구를 이끌어가는 전문가들
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {members.map((member) => (
            <div
              key={member.name}
              className="bg-white border rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center text-2xl text-gray-500">
                  {member.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-primary-600 font-medium">{member.position}</p>
                  <p className="text-sm text-gray-500 mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-3">{member.description}</p>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-sm text-primary-600 hover:text-primary-700"
                  >
                    {member.email}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
