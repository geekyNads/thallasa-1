import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiUsers, FiMaximize } from "react-icons/fi";
import Reveal from "./Reveal";

export default function ApartmentCard({ apartment, index = 0 }) {
  return (
    <Reveal delay={index * 0.08} className="group">
      <Link to={`/apartments/${apartment.slug}`} className="block">
        <div className="relative overflow-hidden rounded-xl2 aspect-[4/5]">
          <motion.img
            src={apartment.image}
            alt={apartment.name}
            loading="lazy"
            className="h-full w-full object-cover"
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-navy-900/0 to-transparent" />
          <div className="absolute top-5 right-5 h-11 w-11 rounded-full bg-fog-100/90 backdrop-blur flex items-center justify-center text-navy opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-400">
            <FiArrowUpRight />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center gap-4 text-fog-100/90 text-xs font-label uppercase tracking-widest2">
            <span className="flex items-center gap-1.5">
              <FiUsers /> {apartment.guests} guests
            </span>
            <span className="flex items-center gap-1.5">
              <FiMaximize /> {apartment.size}
            </span>
          </div>
        </div>
        <div className="pt-5">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="font-display text-2xl text-navy">{apartment.name}</h3>
          </div>
          <p className="mt-2 text-navy-400 text-sm leading-relaxed">{apartment.short}</p>
          <p className="mt-3 text-teal-600 font-medium text-sm">{apartment.from}</p>
        </div>
      </Link>
    </Reveal>
  );
}
