import { useEffect, useState } from 'react'
import LandingPage from './pages/LandingPage.jsx'
import StaysPage from './pages/StaysPage.jsx'
import HotelDetailPage from './pages/HotelDetailPage.jsx'

function App() {
  const [pathname, setPathname] = useState(window.location.pathname)

  useEffect(() => {
    const handleNavigation = () => setPathname(window.location.pathname)
    window.addEventListener('popstate', handleNavigation)
    return () => window.removeEventListener('popstate', handleNavigation)
  }, [])

  const Page = pathname === '/stays/hotel-fina' ? HotelDetailPage : pathname === '/stays' ? StaysPage : LandingPage

  return <div className="page-transition" key={pathname}><Page /></div>
}

export default App
