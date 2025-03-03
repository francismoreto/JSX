import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// This is a Server Component - data fetching happens on the server
async function getUsers() {
  // Server-side fetch with built-in caching
  const res = await fetch("https://jsonplaceholder.typicode.com/users")

  // Error handling
  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }

  return res.json()
}

export default async function ServerFetchPage() {
  // Data is fetched on the server
  const users = await getUsers()

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Server Component Data Fetching</h1>
      <p className="mb-6 text-muted-foreground">
        This page fetches data directly in a Server Component. The data is fetched on the server before the page is sent
        to the client.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user: any) => (
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

