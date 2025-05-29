import { NextResponse } from "next/server"

const featuredProducts = [
  {
    id: "1",
    title: "Cosmic Dreams",
    artist: "Luna Martinez",
    price: 29.99,
    originalPrice: 39.99,
    category: "Abstract",
    rating: 4.8,
    downloads: 1247,
    image: "/placeholder.svg?height=400&width=400",
    featured: true,
  },
  {
    id: "4",
    title: "Neon Nights",
    artist: "Marcus Johnson",
    price: 19.99,
    originalPrice: 29.99,
    category: "Digital",
    rating: 4.6,
    downloads: 1456,
    image: "/placeholder.svg?height=400&width=400",
    featured: true,
  },
  {
    id: "7",
    title: "Forest Mystique",
    artist: "Isabella Rodriguez",
    price: 31.99,
    category: "Landscapes",
    rating: 4.9,
    downloads: 923,
    image: "/placeholder.svg?height=400&width=400",
    featured: true,
  },
]

export async function GET() {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 100))

    return NextResponse.json(featuredProducts)
  } catch (error) {
    console.error("Error fetching featured products:", error)
    return NextResponse.json({ error: "Failed to fetch featured products" }, { status: 500 })
  }
}
