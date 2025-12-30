# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the Hanshin University AI Public Policy Research Institute website - a Next.js 14 application with TypeScript, Tailwind CSS, and Supabase backend. The site features a public-facing research institute website with an authenticated board system and admin panel.

## Development Commands

```bash
# Development
npm run dev          # Start Next.js dev server at http://localhost:3000

# Production
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run Next.js ESLint
```

## Environment Setup

Required environment variables in `.env.local`:
```bash
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

See `.env.local.example` for template.

## Architecture

### Next.js App Router Structure

The app uses Next.js 14 App Router with the following route organization:

- `/app/page.tsx` - Home page
- `/app/about/` - About the institute
- `/app/members/` - Team members
- `/app/research/` - Research projects
- `/app/board/` - Community board (posts with categories: notice, data, qna)
- `/app/board/[id]/` - Individual post detail pages
- `/app/board/write/` - Create new post
- `/app/auth/` - Authentication routes
- `/app/login/` - Login page
- `/app/register/` - Registration page
- `/app/admin/` - Admin panel (protected route)

### Supabase Integration Pattern

The project uses **separate Supabase client patterns** for server and client components:

**Server Components:**
```typescript
import { createClient } from '@/lib/supabase/server'
const supabase = await createClient()  // Note: await required
```

**Client Components:**
```typescript
import { createClient } from '@/lib/supabase/client'
const supabase = createClient()  // Note: no await
```

**Critical:** Always use the correct import path. The server client uses Next.js cookies API and must be awaited; the client version is for browser-side operations.

### Authentication & Authorization

**Role-Based Access Control:**
- User roles are stored in `user_roles` table (columns: `user_id`, `role`)
- Two roles: `admin` and `user`
- Auth helper functions in `/lib/auth.ts`:
  - `isAdminServer()` / `isAdminClient()` - Check if user is admin
  - `getUserRoleServer()` / `getUserRoleClient()` - Get user's role
  - `requireAdmin()` - Throw error if not admin (server-side guard)

**Middleware Protection:**
- `/middleware.ts` handles auth flow and cookie management
- Admin routes (`/admin/*`) are protected - redirects to `/login` if not authenticated
- Middleware runs on all routes except static assets (see matcher config)

### Database Schema

Key Supabase tables (see `supabase_setup.sql` for full schema):

- `posts` - Board posts with categories (notice/data/qna), author info, view counts
- `comments` - Post comments with CASCADE delete
- `attachments` - File attachments linked to posts
- `user_roles` - User role assignments (admin/user)
- `members` - Research institute team members
- `research` - Research projects and publications

**Row Level Security (RLS):**
- All tables have RLS enabled
- Public read access for posts, comments
- Authenticated users can create posts/comments
- Users can only modify/delete their own content
- Admin role has elevated permissions

### UI Component System

Uses **shadcn/ui** components with Radix UI primitives:
- Configuration in `components.json`
- Base components in `/components/ui/`
- Layout components in `/components/layout/` (Header, Footer)
- Style: "new-york" variant with Tailwind CSS variables
- Icon library: lucide-react

**Path Aliases:**
- `@/*` maps to project root
- Import example: `@/lib/utils`, `@/components/ui/button`

### TypeScript Types

Centralized type definitions in `/types/index.ts`:
- `Post` - Board post interface
- `Comment` - Comment interface
- `Attachment` - File attachment interface
- `Profile` - User profile interface
- `Member` - Team member interface
- `Research` - Research project interface

## Important Patterns

### Server Component Data Fetching

Most pages are Server Components that fetch data directly:
```typescript
export default async function Page() {
  const supabase = await createClient()
  const { data } = await supabase.from('posts').select('*')
  // Render with data...
}
```

### Searchable/Filterable Lists

Board uses URL search params for filtering:
- `category` - Filter by post category
- `page` - Pagination
- `search` - Full-text search

Access via: `searchParams` prop (awaited in Next.js 14+)

### Image Handling

Next.js Image component configured for Supabase CDN:
```javascript
// next.config.js
remotePatterns: [{ protocol: 'https', hostname: '*.supabase.co' }]
```

## Database Setup

To initialize Supabase database:
1. Create project at supabase.com
2. Go to SQL Editor
3. Run `supabase_setup.sql` or `supabase_setup_with_admin.sql`
4. Verify tables created: posts, comments, attachments, user_roles

See `SUPABASE_SETUP.md` for detailed setup instructions.

## Styling

- Tailwind CSS with custom configuration
- Global styles in `app/globals.css`
- Uses CSS variables for theming (defined in globals.css)
- shadcn/ui components use `cn()` utility from `/lib/utils.ts` for conditional classes

## Korean Language

The site is primarily in Korean:
- All UI text, labels, and content are in Korean
- Metadata and SEO in Korean
- Institution name: "한신대학교 AI 공공정책연구소"
- English variant: "Hanshin University AI Public Policy Research Institute"
