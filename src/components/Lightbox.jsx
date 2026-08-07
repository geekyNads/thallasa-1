import { AnimatePresence, motion } from "framer-motion";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useEffect, useCallback } from "react";

export default function Lightbox({ images, index, onClose, onNav }) {
  const handleKey = useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNav(1);
      if (e.key === "ArrowLeft") onNav(-1);
    },
    [onClose, onNav]
  );

  useEffect(() => {
    if (index === null) return;
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [index, handleKey]);

  return (
    <AnimatePresence>
      {index !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-navy-900/95 backdrop-blur-md flex items-center justify-center px-4"
          onClick={onClose}
        >
          <button
            aria-label="Close preview"
            onClick={onClose}
            className="absolute top-6 right-6 h-11 w-11 rounded-full border border-fog-100/25 text-fog-100 flex items-center justify-center hover:bg-fog-100/10"
          >
            <FiX size={20} />
          </button>
          <button
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              onNav(-1);
            }}
            className="absolute left-4 md:left-8 h-12 w-12 rounded-full border border-fog-100/25 text-fog-100 flex items-center justify-center hover:bg-fog-100/10"
          >
            <FiChevronLeft size={22} />
          </button>
          <motion.img
            key={images[index].src}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            src={images[index].src}
            alt=""
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain shadow-soft"
          />
          <button
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              onNav(1);
            }}
            className="absolute right-4 md:right-8 h-12 w-12 rounded-full border border-fog-100/25 text-fog-100 flex items-center justify-center hover:bg-fog-100/10"
          >
            <FiChevronRight size={22} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
