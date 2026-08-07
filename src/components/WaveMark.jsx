export default function WaveMark({ className = "", color = "#7FD1D3" }) {
  return (
    <svg viewBox="0 0 60 40" className={className} aria-hidden="true">
      <path d="M4 8 C 16 2, 22 2, 34 8" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
      <path d="M4 17 C 20 11, 40 23, 56 17" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
      <path d="M4 26 C 20 20, 40 32, 56 26" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
      <path d="M4 35 C 20 29, 40 41, 56 35" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}
