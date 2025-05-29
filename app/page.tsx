import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Palette, Download, Users } from "lucide-react"

async function getFeaturedProducts() {
  try {
    const baseUrl =
      process.env.NODE_ENV === "development" ? "http://localhost:3000" : process.env.NEXT_PUBLIC_BASE_URL || ""

    const res = await fetch(`${baseUrl}/api/products/featured`, {
      cache: "no-store",
    })

    if (!res.ok) {
      console.error("Failed to fetch featured products:", res.status)
      return []
    }

    return res.json()
  } catch (error) {
    console.error("Error fetching featured products:", error)
    return []
  }
}

async function getStats() {
  try {
    const baseUrl =
      process.env.NODE_ENV === "development" ? "http://localhost:3000" : process.env.NEXT_PUBLIC_BASE_URL || ""

    const res = await fetch(`${baseUrl}/api/stats`, {
      cache: "no-store",
    })

    if (!res.ok) {
      console.error("Failed to fetch stats:", res.status)
      return { artists: 2847, artworks: 15632, downloads: 89451 }
    }

    return res.json()
  } catch (error) {
    console.error("Error fetching stats:", error)
    return { artists: 2847, artworks: 15632, downloads: 89451 }
  }
}

export default async function HomePage() {
  const [featuredProducts, stats] = await Promise.all([getFeaturedProducts(), getStats()])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Palette className="h-8 w-8 text-purple-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              ArtVault
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/products" className="text-gray-600 hover:text-purple-600 transition-colors">
              Browse Art
            </Link>
            <Link href="/categories" className="text-gray-600 hover:text-purple-600 transition-colors">
              Categories
            </Link>
            <Link href="/artists" className="text-gray-600 hover:text-purple-600 transition-colors">
              Artists
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
            Discover Digital Art That Inspires
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Explore thousands of unique digital artworks, illustrations, and design assets from talented artists
            worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              <Palette className="mr-2 h-5 w-5" />
              Explore Gallery
            </Button>
            <Button size="lg" variant="outline">
              <Users className="mr-2 h-5 w-5" />
              Join as Artist
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">{stats.artists.toLocaleString()}+</div>
              <div className="text-sm text-gray-600">Artists</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600">{stats.artworks.toLocaleString()}+</div>
              <div className="text-sm text-gray-600">Artworks</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">{stats.downloads.toLocaleString()}+</div>
              <div className="text-sm text-gray-600">Downloads</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Artworks</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Handpicked digital masterpieces from our most talented artists
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product: any) => (
            <Card
              key={product.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">{product.category}</Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-1 bg-black/50 text-white px-2 py-1 rounded-full text-sm">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    {product.rating}
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-purple-600 transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">by {product.artist}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-purple-600">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Download className="h-4 w-4" />
                    {product.downloads}
                  </div>
                </div>
                <Button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/products">
            <Button size="lg" variant="outline" className="border-purple-200 hover:bg-purple-50">
              View All Artworks
            </Button>
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Browse by Category</h2>
          <p className="text-gray-600">Find the perfect style for your project</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "Abstract", color: "from-purple-400 to-purple-600", icon: "🎨" },
            { name: "Portraits", color: "from-pink-400 to-pink-600", icon: "👤" },
            { name: "Landscapes", color: "from-green-400 to-green-600", icon: "🏔️" },
            { name: "Digital", color: "from-blue-400 to-blue-600", icon: "💻" },
          ].map((category) => (
            <Card key={category.name} className="group cursor-pointer border-0 overflow-hidden">
              <div
                className={`h-32 bg-gradient-to-br ${category.color} flex items-center justify-center text-4xl group-hover:scale-105 transition-transform`}
              >
                {category.icon}
              </div>
              <CardContent className="p-4 text-center">
                <h3 className="font-semibold group-hover:text-purple-600 transition-colors">{category.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Palette className="h-6 w-6 text-purple-400" />
                <span className="text-xl font-bold">ArtVault</span>
              </div>
              <p className="text-gray-400">The premier marketplace for digital art and creative assets.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Marketplace</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/products" className="hover:text-white transition-colors">
                    Browse Art
                  </Link>
                </li>
                <li>
                  <Link href="/categories" className="hover:text-white transition-colors">
                    Categories
                  </Link>
                </li>
                <li>
                  <Link href="/artists" className="hover:text-white transition-colors">
                    Artists
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/help" className="hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white transition-colors">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Discord
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ArtVault. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
