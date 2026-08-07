import { FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { site } from "../data/content";

export default function FloatingBooking() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-fog-100/95 backdrop-blur-md border-t border-navy/10 px-4 py-3 flex items-center gap-3 pb-[calc(env(safe-area-inset-bottom)+0.75rem)]">
      <a
        href={`tel:${site.phone}`}
        aria-label="Call Thalassa"
        className="h-12 w-12 shrink-0 rounded-full border border-navy/15 flex items-center justify-center text-navy"
      >
        <FiPhone />
      </a>
      <a
        href={site.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp Thalassa"
        className="h-12 w-12 shrink-0 rounded-full border border-navy/15 flex items-center justify-center text-teal-600"
      >
        <FaWhatsapp size={18} />
      </a>
      <a
        href={site.bookingUrl}
        target="_blank"
        rel="noreferrer"
        className="flex-1 h-12 rounded-full bg-teal text-fog-100 flex items-center justify-center font-semibold text-sm"
      >
        Book Now
      </a>
    </div>
  );
}
