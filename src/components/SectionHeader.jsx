import Reveal from "./Reveal";

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  size = "lg",
}) {
  const alignClass = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  const sizeClass =
    size === "xl"
      ? "text-5xl md:text-7xl"
      : size === "lg"
      ? "text-4xl md:text-6xl"
      : "text-3xl md:text-5xl";

  return (
    <div className={`flex flex-col gap-5 max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <Reveal>
          <span className={`eyebrow ${light ? "text-aqua-300" : ""}`}>{eyebrow}</span>
        </Reveal>
      )}
      {title && (
        <Reveal delay={0.05}>
          <h2
            className={`heading-display text-balance ${sizeClass} ${
              light ? "text-fog-100" : "text-navy"
            }`}
          >
            {title}
          </h2>
        </Reveal>
      )}
      {description && (
        <Reveal delay={0.1}>
          <p className={`text-base md:text-lg leading-relaxed ${light ? "text-fog-300" : "text-navy-400"}`}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
