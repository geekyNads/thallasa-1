import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiPlus } from "react-icons/fi";

export default function FAQItem({ faq, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-navy/10 py-6">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-6 text-left"
      >
        <span className="font-display text-xl md:text-2xl text-navy">{faq.q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0 h-9 w-9 rounded-full border border-navy/15 flex items-center justify-center text-navy"
        >
          <FiPlus />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-navy-400 leading-relaxed max-w-2xl">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
