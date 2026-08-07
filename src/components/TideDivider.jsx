export default function TideDivider({ color = "#0C2B33", flip = false, className = "" }) {
  return (
    <svg
      viewBox="0 0 1440 60"
      className={`w-full h-auto ${flip ? "rotate-180" : ""} ${className}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 30 C 240 0, 480 60, 720 30 C 960 0, 1200 60, 1440 30"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
