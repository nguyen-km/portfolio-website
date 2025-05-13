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
          <h2 className="text-xl sm:text-2xl text-gray-700 mb-4">
            Data Scientist | Economist | Policy Researcher
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-xl mx-auto">
          I use Bayesian modeling, statistical inference, and custom-built analytics tools to help public-sector clients design smarter, more equitable policy.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}