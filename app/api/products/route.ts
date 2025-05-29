import { NextResponse } from "next/server"

const products = [
  {
    id: "1",
    title: "Cosmic Dreams",
    artist: "Luna Martinez",
    price: 29.99,
    originalPrice: 39.99,
    category: "Abstract",
    rating: 4.8,
    downloads: 1247,
    image: "/placeholder.svg?height=300&width=300",
    description: "A mesmerizing abstract piece exploring the depths of space and imagination.",
    tags: ["abstract", "space", "colorful", "digital"],
  },
  {
    id: "2",
    title: "Urban Sunset",
    artist: "Alex Chen",
    price: 24.99,
    category: "Landscapes",
    rating: 4.9,
    downloads: 892,
    image: "/placeholder.svg?height=300&width=300",
    description: "A stunning cityscape capturing the golden hour in a metropolitan setting.",
    tags: ["landscape", "city", "sunset", "photography"],
  },
  {
    id: "3",
    title: "Digital Portrait #1",
    artist: "Sarah Kim",
    price: 34.99,
    category: "Portraits",
    rating: 4.7,
    downloads: 654,
    image: "/placeholder.svg?height=300&width=300",
    description: "A contemporary digital portrait showcasing modern artistic techniques.",
    tags: ["portrait", "digital", "contemporary", "art"],
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
    image: "/placeholder.svg?height=300&width=300",
    description: "Cyberpunk-inspired artwork with vibrant neon colors and futuristic elements.",
    tags: ["cyberpunk", "neon", "futuristic", "digital"],
  },
  {
    id: "5",
    title: "Ocean Waves",
    artist: "Emma Wilson",
    price: 27.99,
    category: "Landscapes",
    rating: 4.8,
    downloads: 789,
    image: "/placeholder.svg?height=300&width=300",
    description: "Serene ocean waves captured in a moment of perfect tranquility.",
    tags: ["ocean", "waves", "nature", "peaceful"],
  },
  {
    id: "6",
    title: "Abstract Geometry",
    artist: "David Park",
    price: 22.99,
    category: "Abstract",
    rating: 4.5,
    downloads: 567,
    image: "/placeholder.svg?height=300&width=300",
    description: "Bold geometric shapes creating a harmonious abstract composition.",
    tags: ["geometric", "abstract", "shapes", "modern"],
  },
  {
    id: "7",
    title: "Forest Mystique",
    artist: "Isabella Rodriguez",
    price: 31.99,
    category: "Landscapes",
    rating: 4.9,
    downloads: 923,
    image: "/placeholder.svg?height=300&width=300",
    description: "Enchanting forest scene with mystical lighting and atmospheric depth.",
    tags: ["forest", "mystical", "nature", "atmospheric"],
  },
  {
    id: "8",
    title: "Retro Vibes",
    artist: "Tommy Lee",
    price: 18.99,
    category: "Digital",
    rating: 4.4,
    downloads: 1123,
    image: "/placeholder.svg?height=300&width=300",
    description: "Nostalgic retro-style artwork with vintage colors and classic design elements.",
    tags: ["retro", "vintage", "nostalgic", "classic"],
  },
]

export async function GET() {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 100))

    return NextResponse.json(products)
  } catch (error) {
    console.error("Error fetching products:", error)
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 })
  }
}
