'use client'

import Link from 'next/link'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { SOCIAL_LINKS } from '@/lib/config' // optional: use if centralized

export default function Navbar() {
  return (
    <header className="w-full bg-white border-b shadow-sm">
      <nav className="max-w-5xl mx-auto px-4 py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-0">
        {/* Site title */}
        <div className="text-2xl font-bold text-gray-900 text-center sm:text-left">
          Kevin Nguyễn
        </div>

        {/* Page links */}
        <div className="flex flex-wrap justify-center sm:justify-end items-center gap-4 text-gray-700 text-base">
          <Link href="/" className="hover:text-blue-600">Home</Link>

          {/* Guides Dropdown */}
          <div className="relative group">
            <button className="hover:text-blue-600">Guides</button>
            <div className="absolute left-0 top-full bg-white border shadow-md mt-0 rounded w-40 hidden group-hover:block">
              <Link
                href="/guides/clustering"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600"
              >
                Clustering
              </Link>
            </div>
          </div>



          <Link href="/about" className="hover:text-blue-600">About</Link>
          <Link href="/projects" className="hover:text-blue-600">Projects</Link>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900"
          >
            <FaGithub size={20} />
          </a>
        </div>
      </nav>
    </header>
  )
}