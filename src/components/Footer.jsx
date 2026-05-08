import { Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-dark/80 backdrop-blur-md py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
        <div className="flex items-center gap-1">
          <span>Built with</span>
          <Heart className="h-3 w-3 text-neon-green fill-neon-green" />
          <span>by 举个啥栗子</span>
        </div>
        <div className="uppercase tracking-wider">
          &copy; {new Date().getFullYear()} ant &middot; All rights reserved
        </div>
      </div>
    </footer>
  )
}
