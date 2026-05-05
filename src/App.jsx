import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import MatrixRain from './components/MatrixRain'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Insight from './components/Insight'
import ArticleList from './components/ArticleList'
import ArticleDetail from './components/ArticleDetail'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function HomePage() {
  return (
    <main id="top" className="relative z-10">
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-dark text-white">
      <MatrixRain />
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/insight" element={<Insight />} />
        <Route path="/insight/:category" element={<ArticleList />} />
        <Route path="/insight/:category/:slug" element={<ArticleDetail />} />
      </Routes>
      <Footer />
    </div>
  )
}
