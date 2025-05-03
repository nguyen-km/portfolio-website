import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { SOCIAL_LINKS } from '@/lib/config'

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 border-t mt-12">
      <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
        <div className="mb-2 sm:mb-0">
          © {new Date().getFullYear()} Kevin Nguyễn. All rights reserved.
        </div>
        <div className="flex space-x-4">
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900"
          >
            <FaGithub size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}