import { Button } from "@/components/ui/button"

export function BlogHeader() {
  return (
    <header className="w-full px-6 py-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">D</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
            HOME
          </a>
          <a href="#" className="text-red-500 font-medium">
            BLOG
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
            ABOUT
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
            CONTACT
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
            PORTFOLIO
          </a>
        </nav>

        <Button variant="ghost" size="sm" className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </Button>
      </div>
    </header>
  )
}
