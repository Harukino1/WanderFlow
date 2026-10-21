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
    pathname.startsWith("/stays/") && pathname !== "/stays"
      ? HotelDetailPage
      : pathname === "/stays"
        ? StaysPage
        : pathname.startsWith("/tours/") && pathname !== "/tours"
          ? TourDetailPage
          : pathname === "/tours"
            ? TourPage
            : LandingPage;

  return (
    <div className="animate-[page-enter_280ms_ease-out_both]" key={pathname}>
      <Page />
    </div>
  );
}

export default App;
