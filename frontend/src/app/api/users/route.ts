import { NextResponse } from "next/server"

// This is a Route Handler - it creates an API endpoint
export async function GET() {
  try {
    // Fetch data from an external API
    const res = await fetch("https://jsonplaceholder.typicode.com/users")

    if (!res.ok) {
      throw new Error("Failed to fetch data")
    }

    const data = await res.json()

    // Return the data as JSON
    return NextResponse.json(data)
  } catch (error) {
    // Handle errors
    return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 })
  }
}

