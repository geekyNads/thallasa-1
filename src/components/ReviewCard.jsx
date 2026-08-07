import { FiStar } from "react-icons/fi";
import Reveal from "./Reveal";

export default function ReviewCard({ review, index = 0 }) {
  return (
    <Reveal delay={index * 0.08} className="h-full">
      <div className="h-full flex flex-col justify-between rounded-xl2 bg-white p-8 shadow-card border border-navy/5">
        <div>
          <div className="flex gap-1 text-aqua-500 mb-5">
            {Array.from({ length: review.rating }).map((_, i) => (
              <FiStar key={i} fill="currentColor" />
            ))}
          </div>
          <p className="font-display text-xl md:text-[22px] leading-snug text-navy text-balance">
            “{review.quote}”
          </p>
        </div>
        <div className="mt-8 flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-label text-sm font-semibold">
            {review.name.charAt(0)}
          </div>
          <div>
            <p className="text-sm font-semibold text-navy">{review.name}</p>
            <p className="text-xs text-navy-300">{review.origin}</p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
