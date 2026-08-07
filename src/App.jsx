import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingBooking from "./components/FloatingBooking";
import ScrollToTop from "./components/ScrollToTop";
import useLenis from "./lib/useLenis";

import Home from "./pages/Home";
import Apartments from "./pages/Apartments";
import ApartmentDetail from "./pages/ApartmentDetail";
import Gallery from "./pages/Gallery";
import Explore from "./pages/Explore";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  useLenis();
  const location = useLocation();

  return (
    <div className="relative">
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/apartments" element={<Apartments />} />
          <Route path="/apartments/:slug" element={<ApartmentDetail />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
      <Footer />
      <FloatingBooking />
    </div>
  );
}
