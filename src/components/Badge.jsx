export default function Badge({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white/70 px-4 py-1.5 font-label text-xs uppercase tracking-widest2 text-teal-700 backdrop-blur-sm ${className}`}
    >
      {children}
    </span>
  );
}
