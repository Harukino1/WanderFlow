import { useEffect, useState } from 'react'
import LandingPage from './pages/LandingPage.jsx'
import StaysPage from './pages/StaysPage.jsx'

function App() {
  const [pathname, setPathname] = useState(window.location.pathname)

  useEffect(() => {
    const handleNavigation = () => setPathname(window.location.pathname)
    window.addEventListener('popstate', handleNavigation)
    return () => window.removeEventListener('popstate', handleNavigation)
  }, [])

  const Page = pathname === '/stays' ? StaysPage : LandingPage

  return <div className="page-transition" key={pathname}><Page /></div>
}

export default App
