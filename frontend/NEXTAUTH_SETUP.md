# NextAuth Setup Guide

## Environment Variables

Create a `.env.local` file in the frontend directory with the following variables:

```env
# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here-change-this-in-production

# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:5000
```

## Generate a Secure Secret

You can generate a secure secret using:

```bash
openssl rand -base64 32
```

Or use an online generator and replace `your-secret-key-here-change-this-in-production` with the generated value.

## Features Implemented

1. **Authentication Configuration** (`src/lib/auth.ts`)
   - Credentials provider for email/password login
   - JWT session strategy
   - Custom callbacks for user data

2. **API Routes** (`src/app/api/auth/[...nextauth]/route.ts`)
   - Handles all NextAuth API requests

3. **Session Provider** (`src/components/providers/session-provider.tsx`)
   - Wraps the app to provide authentication context

4. **Login Form** (`src/components/auth/login-form.tsx`)
   - Modern login form with error handling
   - Uses NextAuth's signIn function

5. **User Menu** (`src/components/auth/user-menu.tsx`)
   - Displays user information
   - Provides sign out functionality

6. **Protected Routes** (`src/components/auth/protected-route.tsx`)
   - Redirects unauthenticated users to login
   - Shows loading states

7. **Dashboard Page** (`src/app/dashboard/page.tsx`)
   - Example protected page
   - Shows user information and quick actions

## Usage

### Login
Navigate to `/login` to access the login form.

### Protected Pages
Wrap any page content with the `ProtectedRoute` component:

```tsx
import { ProtectedRoute } from "@/components/auth/protected-route"

export default function MyPage() {
  return (
    <ProtectedRoute>
      <div>Protected content here</div>
    </ProtectedRoute>
  )
}
```

### Accessing Session Data
Use the `useSession` hook in client components:

```tsx
import { useSession } from "next-auth/react"

export function MyComponent() {
  const { data: session, status } = useSession()
  
  if (status === "loading") return <div>Loading...</div>
  if (status === "unauthenticated") return <div>Not signed in</div>
  
  return <div>Welcome {session?.user?.email}</div>
}
```

### Sign Out
Use the `signOut` function:

```tsx
import { signOut } from "next-auth/react"

<button onClick={() => signOut({ callbackUrl: "/" })}>
  Sign out
</button>
```

## Backend Integration

The authentication is configured to work with your Flask backend. Make sure your backend has the following endpoint:

- `POST /auth/login` - Accepts email and password, returns user data

The user data should include:
- `id` (string)
- `email` (string)
- `name` (optional string)

## Security Notes

1. Change the `NEXTAUTH_SECRET` in production
2. Use HTTPS in production
3. Implement proper password hashing in your backend
4. Consider adding rate limiting to your login endpoint
5. Add CSRF protection if needed
