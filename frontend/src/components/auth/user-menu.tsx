"use client"

import { useSession, signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function UserMenu() {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardContent className="p-4">
          <div className="animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (status === "unauthenticated") {
    return null
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Welcome, {session?.user?.name || session?.user?.email}!</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <p className="text-sm text-gray-600">
            <strong>Email:</strong> {session?.user?.email}
          </p>
          {session?.user?.name && (
            <p className="text-sm text-gray-600">
              <strong>Name:</strong> {session?.user?.name}
            </p>
          )}
        </div>
        <Button 
          onClick={() => signOut({ callbackUrl: "/" })}
          variant="outline"
          className="w-full"
        >
          Sign out
        </Button>
      </CardContent>
    </Card>
  )
}
