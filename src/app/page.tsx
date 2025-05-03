import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center bg-white px-4">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-4">
            Kevin Minh Nguyễn
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-xl mx-auto">
            Data scientist and policy researcher at BBC Research & Consulting. I specialize in Bayesian modeling, public-sector analytics, and building tools that make data more actionable.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}