import { Link } from "react-router-dom";
import { FiInstagram, FiFacebook, FiArrowUpRight } from "react-icons/fi";
import { nav, site, apartments } from "../data/content";
import TideDivider from "./TideDivider";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-navy text-fog-100 pt-14 md:pt-16 pb-6 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0">
        <TideDivider color="#F5F6F4" flip />
      </div>

      <div className="container-tide">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-x-8 gap-y-10 pb-10 border-b border-fog-100/10">
          <div className="col-span-2 md:col-span-4">
            <Logo className="text-fog-100" markClassName="text-aqua-300" />
            <p className="mt-4 text-sm text-fog-300 leading-relaxed max-w-sm">
              A quiet, modern retreat steps from Beau Vallon beach — Seychelles'
              longest stretch of white sand. Authentic Creole hospitality, reimagined.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="h-10 w-10 rounded-full border border-fog-100/20 flex items-center justify-center hover:bg-fog-100 hover:text-navy transition-colors duration-300"
              >
                <FiInstagram size={16} />
              </a>
              <a
                href={site.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="h-10 w-10 rounded-full border border-fog-100/20 flex items-center justify-center hover:bg-fog-100 hover:text-navy transition-colors duration-300"
              >
                <FiFacebook size={16} />
              </a>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2">
            <p className="eyebrow text-aqua-300 mb-4">Navigate</p>
            <ul className="flex flex-col gap-2.5">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-fog-200 hover:text-fog-100 transition-colors inline-flex items-center gap-1.5 group"
                  >
                    {item.label}
                    <FiArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={13} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 md:col-span-3">
            <p className="eyebrow text-aqua-300 mb-4">Apartments</p>
            <ul className="flex flex-col gap-2.5">
              {apartments.map((a) => (
                <li key={a.slug}>
                  <Link
                    to={`/apartments/${a.slug}`}
                    className="text-sm text-fog-200 hover:text-fog-100 transition-colors inline-flex items-center gap-1.5 group"
                  >
                    {a.name}
                    <FiArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={13} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-3">
            <p className="eyebrow text-aqua-300 mb-4">Reach us</p>
            <ul className="flex flex-col gap-2.5 text-sm text-fog-200">
              <li>{site.address}</li>
              <li>
                <a href={`tel:${site.phone}`} className="hover:text-fog-100 transition-colors">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-fog-100 transition-colors break-all">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-fog-300/70">
          <p>&copy; {new Date().getFullYear()} Thalassa Seychelles. All rights reserved.</p>
          <p>Beau Vallon, Mahé, Seychelles</p>
        </div>
      </div>
    </footer>
  );
}
