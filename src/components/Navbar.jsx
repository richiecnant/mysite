import { useState, useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: '首页', href: '#top' },
  { label: '历程', href: '#experience' },
  { label: '技能栈', href: '#skills' },
  { label: '项目', href: '#projects' },
  { label: '联系', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const ticking = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        ticking.current = true
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20)
          ticking.current = false
        })
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const el = document.getElementById(id)
    if (!el) return
    const NAV_HEIGHT = 80
    const y = el.getBoundingClientRect().top + window.pageYOffset - NAV_HEIGHT
    window.scrollTo({ top: y, behavior: 'smooth' })
  }

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const id = href.slice(1)
    const wasMobileOpen = mobileOpen
    setMobileOpen(false)

    const scroll = () => scrollToSection(id)
    if (location.pathname === '/') {
      wasMobileOpen ? setTimeout(scroll, 300) : scroll()
    } else {
      navigate('/')
      setTimeout(scroll, wasMobileOpen ? 400 : 100)
    }
  }

  const isInsight = location.pathname.startsWith('/insight')

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-white/5 transition-colors duration-300 ${
        scrolled
          ? 'bg-dark/90 backdrop-blur-xl !border-amber-gold/10 shadow-lg shadow-amber-gold/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        {/* Logo */}
        <Link to="/" onClick={(e) => {
          if (location.pathname === '/') {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }
        }} className="flex items-center gap-3 group">
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="logo" className="h-8 w-8 rounded-full object-cover" />
          <span className="text-lg font-bold gradient-text">
            举个啥栗子 · 2026
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-sm transition-colors ${
                isInsight ? 'text-white/40 hover:text-amber-gold' : 'text-white/60 hover:text-amber-gold'
              }`}
            >
              {link.label}
            </a>
          ))}
          <span className="text-white/10">|</span>
          <Link
            to="/insight"
            className={`text-sm transition-colors ${
              isInsight
                ? 'text-amber-gold font-medium'
                : 'text-white/60 hover:text-amber-gold'
            }`}
          >
            栗子洞察
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden rounded-lg p-2 text-white/60 hover:text-amber-gold hover:bg-white/5 transition-all"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block text-sm text-white/70 hover:text-amber-gold transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <div className="border-t border-white/10 pt-3">
                <Link
                  to="/insight"
                  onClick={() => setMobileOpen(false)}
                  className={`block text-sm transition-colors py-2 ${
                    isInsight ? 'text-amber-gold font-medium' : 'text-white/70 hover:text-amber-gold'
                  }`}
                >
                  栗子洞察
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
