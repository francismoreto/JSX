"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Server Action - this function runs on the server
async function fetchUsers() {
  "use server"

  const res = await fetch("https://jsonplaceholder.typicode.com/users")

  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }

  return res.json()
}

export default function ServerActionsPage() {
  const [users, setUsers] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Function to handle the button click
  const handleFetchUsers = async () => {
    setLoading(true)
    setError(null)

    try {
      // Call the server action
      const data = await fetchUsers()
      setUsers(data)
    } catch (err) {
      setError("Error fetching data. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Server Actions Data Fetching</h1>
      <p className="mb-6 text-muted-foreground">
        This page uses Server Actions to fetch data. Server Actions allow you to define server-side functions that can
        be called from client components.
      </p>

      <div className="mb-6">
        <Button onClick={handleFetchUsers} disabled={loading}>
          {loading ? "Loading..." : "Fetch Users"}
        </Button>
      </div>

      {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">{error}</div>}

      {users.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
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
      )}
    </div>
  )
}

