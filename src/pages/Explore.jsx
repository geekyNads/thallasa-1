import { FiArrowUpRight } from "react-icons/fi";
import PageWrapper from "../components/PageWrapper";
import SectionHeader from "../components/SectionHeader";
import Reveal from "../components/Reveal";
import MapEmbed from "../components/MapEmbed";
import { explore, images } from "../data/content";

export default function Explore() {
  return (
    <PageWrapper>
      <section className="relative pt-40 pb-20 md:pt-52 md:pb-28 overflow-hidden bg-navy text-fog-100">
        <img src={images.surrounding} alt="" className="absolute inset-0 h-full w-full object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-navy/40" />
        <div className="container-tide relative">
          <SectionHeader
            eyebrow="Explore Seychelles"
            title="Beau Vallon is the start, not the whole story."
            description="Beaches, trails and a city centre are all within easy reach — here's where our guests go once they leave the pool."
            light
            size="xl"
          />
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-tide grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {explore.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.08} className="group">
              <div className="relative rounded-xl2 overflow-hidden aspect-[4/5]">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/85 via-navy-900/10 to-transparent" />
                <span className="absolute top-5 left-5 eyebrow text-aqua-300 bg-navy-900/40 backdrop-blur px-3 py-1 rounded-full">
                  {item.category}
                </span>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-display text-2xl text-fog-100">{item.title}</h3>
                    <FiArrowUpRight className="text-fog-100 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                  </div>
                  <p className="text-fog-200/80 text-sm mt-2 leading-relaxed">{item.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-32 bg-sand-100/60">
        <div className="container-tide grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <SectionHeader
            eyebrow="Getting around"
            title="Everything's closer than it looks on the map."
            description="Beau Vallon's beach, restaurants and bus stop are all walkable from the property. Victoria's markets and cathedral are an 8-minute drive, and a paid airport shuttle can be arranged on request."
            size="md"
          />
          <Reveal delay={0.1}>
            <MapEmbed className="h-[380px] shadow-card" />
          </Reveal>
        </div>
      </section>
    </PageWrapper>
  );
}
