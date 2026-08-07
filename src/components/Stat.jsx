import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

function useCountUp(target, inView) {
  const [display, setDisplay] = useState("0");
  const numeric = parseFloat(String(target).replace(/[^0-9.]/g, ""));
  const suffix = String(target).replace(/^[0-9.]+/, "");
  const prefix = String(target).match(/^[^0-9]*/)?.[0] ?? "";

  useEffect(() => {
    if (!inView || isNaN(numeric)) {
      if (isNaN(numeric)) setDisplay(target);
      return;
    }
    const controls = animate(0, numeric, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        const isInt = Number.isInteger(numeric);
        setDisplay(prefix + (isInt ? Math.round(v) : v.toFixed(1)) + suffix);
      },
    });
    return () => controls.stop();
  }, [inView]);

  return display;
}

export default function Stat({ value, label, light = false }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const display = useCountUp(value, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col gap-1.5"
    >
      <span className={`heading-display text-4xl md:text-5xl ${light ? "text-fog-100" : "text-navy"}`}>
        {display}
      </span>
      <span className={`text-sm ${light ? "text-fog-300" : "text-navy-400"}`}>{label}</span>
    </motion.div>
  );
}
