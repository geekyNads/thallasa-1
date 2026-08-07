import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import SectionHeader from "../components/SectionHeader";
import Lightbox from "../components/Lightbox";
import { galleryImages } from "../data/content";

const categories = ["All", "Exterior", "Interior", "Pool", "Lounge", "Apartments", "Dining", "Surroundings"];

// Repeating tall/short pattern so the grid reads as a masonry without the
// reliability problems of CSS multi-column layout (which can leave columns
// unbalanced and large empty gaps depending on viewport width / item count).
const ROW_SPAN_PATTERN = ["tall", "short", "short", "tall", "short", "tall", "short", "short"];

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [activeIndex, setActiveIndex] = useState(null);

  const filtered = useMemo(
    () => (filter === "All" ? galleryImages : galleryImages.filter((g) => g.category === filter)),
    [filter]
  );

  const navigate = (dir) => {
    setActiveIndex((i) => (i + dir + filtered.length) % filtered.length);
  };

  return (
    <PageWrapper>
      <section className="pt-40 pb-16 md:pt-52 md:pb-20">
        <div className="container-tide">
          <SectionHeader
            eyebrow="Gallery"
            title="Thalassa, in detail."
            description="A closer look at the apartments, the grounds and Beau Vallon just beyond the door."
            size="xl"
          />
        </div>
      </section>

      <section className="pb-12">
        <div className="container-tide flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-300 ${
                filter === cat
                  ? "bg-teal text-fog-100 border-teal"
                  : "bg-transparent text-navy-400 border-navy/15 hover:border-navy/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="pb-28 md:pb-36">
        <div className="container-tide">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-[180px] sm:auto-rows-[220px] gap-4 md:gap-5">
            {filtered.map((img, i) => {
              const tall = ROW_SPAN_PATTERN[i % ROW_SPAN_PATTERN.length] === "tall";
              return (
                <motion.button
                  key={img.src}
                  onClick={() => setActiveIndex(i)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: (i % 8) * 0.04, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative block w-full h-full rounded-xl2 overflow-hidden group ${
                    tall ? "row-span-2" : "row-span-1"
                  }`}
                >
                  <img
                    src={img.src}
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/20 transition-colors duration-500" />
                </motion.button>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-navy-300 py-16">No photos in this category yet.</p>
          )}
        </div>
      </section>

      <Lightbox images={filtered} index={activeIndex} onClose={() => setActiveIndex(null)} onNav={navigate} />
    </PageWrapper>
  );
}
