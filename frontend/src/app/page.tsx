import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Next.js Data Fetching Examples</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        <Link href="/server-fetch" className="p-6 border rounded-lg hover:bg-muted transition-colors">
          <h2 className="text-2xl font-semibold mb-2">Server Component Fetching</h2>
          <p className="text-muted-foreground">Fetch data directly in Server Components (recommended approach)</p>
        </Link>

        <Link href="/client-fetch" className="p-6 border rounded-lg hover:bg-muted transition-colors">
          <h2 className="text-2xl font-semibold mb-2">Client Component Fetching</h2>
          <p className="text-muted-foreground">Fetch data on the client-side using React hooks</p>
        </Link>

        <Link href="/route-handler" className="p-6 border rounded-lg hover:bg-muted transition-colors">
          <h2 className="text-2xl font-semibold mb-2">Route Handler API</h2>
          <p className="text-muted-foreground">Create your own API endpoints to serve JSON data</p>
        </Link>

        <Link href="/server-actions" className="p-6 border rounded-lg hover:bg-muted transition-colors">
          <h2 className="text-2xl font-semibold mb-2">Server Actions</h2>
          <p className="text-muted-foreground">Fetch data using Server Actions</p>
        </Link>
      </div>
    </main>
  )
}

