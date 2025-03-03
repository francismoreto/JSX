"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function RouteHandlerPage() {
  const [users, setUsers] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Fetch from our own API route instead of directly from external API
        const res = await fetch("/api/users")

        if (!res.ok) {
          throw new Error("Failed to fetch data")
        }

        const data = await res.json()
        setUsers(data)
        setLoading(false)
      } catch (err) {
        setError("Error fetching data. Please try again.")
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  if (error) {
    return (
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold mb-6">Route Handler API Fetching</h1>
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">{error}</div>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Route Handler API Fetching</h1>
      <p className="mb-6 text-muted-foreground">
        This page fetches data from our own API route (/api/users) which acts as a proxy to the external API. This
        approach allows you to add authentication, caching, or transform the data before sending it to the client.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading
          ? // Show loading skeletons
            Array.from({ length: 6 }).map((_, index) => (
              <Card key={index}>
                <CardHeader>
                  <Skeleton className="h-8 w-3/4" />
                </CardHeader>
                <CardContent className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                </CardContent>
              </Card>
            ))
          : // Show actual data
            users.map((user) => (
              <Card key={user.id}>
                <CardHeader>
                  <CardTitle>{user.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    <strong>Email:</strong> {user.email}
                  </p>
                  <p>
                    <strong>Company:</strong> {user.company.name}
                  </p>
                  <p>
                    <strong>Website:</strong> {user.website}
                  </p>
                </CardContent>
              </Card>
            ))}
      </div>
    </div>
  )
}

