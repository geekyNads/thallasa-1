import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { nav, site } from "../data/content";
import Button from "./Button";
import Logo from "./Logo";

// Routes whose top section is a full-bleed dark/image hero — on these, the
// nav can start transparent with light text and switch to solid once the
// user scrolls past the hero. Every other route has a light page background
// right at the top, so the nav must be solid (dark text) from the very
// first frame, or the text disappears against the white page.
const DARK_HERO_ROUTES = [/^\/$/, /^\/apartments$/, /^\/apartments\/[^/]+$/, /^\/explore$/];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const hasDarkHero = DARK_HERO_ROUTES.some((re) => re.test(location.pathname));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Solid (navy-on-light) whenever: user has scrolled, the mobile menu is
  // open, or the current page simply has no dark hero to sit transparently
  // over in the first place.
  const solid = scrolled || open || !hasDarkHero;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        solid ? "bg-fog-100/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(12,43,51,0.08)]" : "bg-transparent"
      }`}
    >
      <nav className="container-tide flex items-center justify-between py-4 md:py-5">
        <Link
          to="/"
          className={`transition-colors duration-500 ${solid ? "text-navy" : "text-fog-100"}`}
        >
          <Logo markClassName={solid ? "text-teal" : "text-aqua-300"} />
        </Link>

        <div className="hidden md:flex items-center gap-9">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `relative font-body text-sm font-medium tracking-wide transition-colors tide-underline pb-1 ${
                  solid ? "text-navy-500" : "text-fog-100"
                } ${isActive ? "opacity-100" : "opacity-90 hover:opacity-100"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:block">
          <Button as="a" href={site.bookingUrl} target="_blank" rel="noreferrer" variant="primary" className="text-[13px] px-6 py-3">
            Book Now
          </Button>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden text-2xl transition-colors duration-500 ${solid ? "text-navy" : "text-fog-100"}`}
        >
          {open ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden bg-fog-100 border-t border-navy/10"
          >
            <div className="container-tide flex flex-col gap-1 py-6">
              {nav.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className="py-3 font-display text-2xl text-navy border-b border-navy/5"
                >
                  {item.label}
                </NavLink>
              ))}
              <Button
                as="a"
                href={site.bookingUrl}
                target="_blank"
                rel="noreferrer"
                variant="primary"
                className="mt-5 w-full"
              >
                Book Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
