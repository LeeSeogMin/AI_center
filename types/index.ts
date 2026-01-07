export interface Post {
  id: string
  title: string
  content: string
  author_id: string
  author_name?: string
  category: 'notice' | 'data' | 'qna'
  view_count: number
  created_at: string
  updated_at: string
}

export interface Comment {
  id: string
  post_id: string
  author_id: string
  author_name?: string
  content: string
  created_at: string
}

export interface Attachment {
  id: string
  post_id: string
  file_name: string
  file_url: string
  file_size: number
  created_at: string
}

export interface Profile {
  id: string
  email: string
  name: string
  role: 'user' | 'admin'
  avatar_url?: string
  created_at: string
}

export interface Member {
  id: string
  name: string
  position: string
  bio: string
  photo_url?: string
  email: string
  order: number
}

export interface Research {
  id: string
  title: string
  description: string
  category: string
  year: string
  file_url?: string
  link?: string
  created_at: string
}

// Organization Members (연구진 페이지용)
export interface OrganizationMember {
  name: string
  phone?: string
  email?: string
  researchAreas?: string
  position?: string        // 한신대 직급
  office?: string         // 연구실
  institution?: string    // 외부 소속기관
  externalPosition?: string  // 외부 직위
}

// Research Lab (연구실)
export interface ResearchLab {
  name: string
  color: 'indigo' | 'blue' | 'violet'
  director: OrganizationMember
  researchers: OrganizationMember[]
  visitingResearchers: (OrganizationMember | null)[]
}

// Director (연구소장)
export interface Director extends OrganizationMember {
  title: string
}

// Advisor (자문위원)
export interface Advisor extends OrganizationMember {
  institution: string
  externalPosition: string
  researchAreas: string
}
