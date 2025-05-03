import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-lg text-gray-600 mb-6">
          Sorry, the page you’re looking for doesn’t exist.
        </p>
        <Link
          href="/"
          className="inline-block px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Back to Home
        </Link>
      </main>
      <Footer />
    </>
  )
}
