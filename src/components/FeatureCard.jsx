import Reveal from "./Reveal";

export default function FeatureCard({ title, detail, icon, index = 0 }) {
  return (
    <Reveal delay={index * 0.05} className="group">
      <div className="p-7 md:p-8 rounded-xl2 border border-navy/8 bg-white/60 hover:bg-white hover:shadow-card transition-all duration-500 h-full">
        <div className="h-11 w-11 rounded-full bg-aqua-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shrink-0">
          {icon ? (
            <img src={icon} alt="" className="h-5 w-5 object-contain" />
          ) : null}
        </div>
        <h3 className="font-display text-xl text-navy mb-2">{title}</h3>
        <p className="text-sm text-navy-400 leading-relaxed">{detail}</p>
      </div>
    </Reveal>
  );
}
