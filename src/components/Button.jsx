import { forwardRef } from "react";
import { motion } from "framer-motion";

const variants = {
  primary:
    "bg-teal text-fog-100 hover:bg-teal-600 shadow-card",
  ghost:
    "bg-transparent text-navy border border-navy/20 hover:border-navy/50",
  light:
    "bg-fog-100 text-navy hover:bg-white",
  outlineLight:
    "bg-transparent text-fog-100 border border-fog-100/50 hover:border-fog-100",
};

const Button = forwardRef(
  ({ as: Tag = "button", variant = "primary", className = "", children, ...props }, ref) => {
    const MotionTag = motion(Tag);
    return (
      <MotionTag
        ref={ref}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-body text-sm font-semibold tracking-wide transition-colors duration-300 ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </MotionTag>
    );
  }
);

Button.displayName = "Button";
export default Button;
