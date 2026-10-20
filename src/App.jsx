import { useEffect, useState } from "react";
import LandingPage from "./pages/LandingPage.jsx";
import StaysPage from "./pages/StaysPage.jsx";
import HotelDetailPage from "./pages/HotelDetailPage.jsx";
import TourPage from "./pages/TourPage.jsx";
import TourDetailPage from "./pages/TourDetailPage.jsx";

function App() {
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    const handleNavigation = () => setPathname(window.location.pathname);
    window.addEventListener("popstate", handleNavigation);
    return () => window.removeEventListener("popstate", handleNavigation);
  }, []);

  const Page =
    pathname === "/stays/hotel-fina"
      ? HotelDetailPage
      : pathname === "/stays"
        ? StaysPage
        : pathname === "/tours"
          ? TourPage
          : pathname === "/tours/mayon-black-lava-atv-trail"
            ? TourDetailPage
            : LandingPage;

  return (
    <div className="page-transition" key={pathname}>
      <Page />
    </div>
  );
}

export default App;
