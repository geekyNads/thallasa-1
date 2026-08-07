import { useParams, Link, Navigate } from "react-router-dom";
import { FiArrowRight, FiUsers, FiMaximize, FiHome, FiEye, FiCheck } from "react-icons/fi";
import PageWrapper from "../components/PageWrapper";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import Badge from "../components/Badge";
import ApartmentCard from "../components/ApartmentCard";
import { apartments, site } from "../data/content";

export default function ApartmentDetail() {
  const { slug } = useParams();
  const apartment = apartments.find((a) => a.slug === slug);
  if (!apartment) return <Navigate to="/apartments" replace />;

  const others = apartments.filter((a) => a.slug !== slug);
  const specs = [
    { icon: <FiUsers />, label: `${apartment.guests} Guests` },
    { icon: <FiMaximize />, label: apartment.size },
    { icon: <FiHome />, label: apartment.bed },
    { icon: <FiEye />, label: apartment.view },
  ];

  return (
    <PageWrapper>
      <section className="relative h-[70vh] min-h-[480px] overflow-hidden">
        <img src={apartment.image} alt={apartment.name} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 container-tide pb-14">
          <Reveal>
            <span className="eyebrow text-aqua-300">Apartments</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="heading-display text-fog-100 text-5xl md:text-7xl mt-4">{apartment.name}</h1>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-tide grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-lg md:text-xl text-navy-500 leading-relaxed text-balance">
                {apartment.description}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 py-8 border-y border-navy/10">
                {specs.map((s) => (
                  <div key={s.label} className="flex flex-col items-start gap-3">
                    <span className="text-teal text-xl">{s.icon}</span>
                    <span className="text-sm text-navy-400">{s.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <h2 className="font-display text-2xl text-navy mt-12 mb-6">In-room amenities</h2>
              <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                {apartment.amenities.map((a) => (
                  <div key={a} className="flex items-center gap-3 text-navy-500">
                    <FiCheck className="text-teal shrink-0" />
                    <span className="text-sm">{a}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <h2 className="font-display text-2xl text-navy mt-14 mb-6">Gallery</h2>
              <div className="grid grid-cols-3 gap-4">
                {apartment.gallery.map((src, i) => (
                  <div key={i} className="rounded-xl overflow-hidden aspect-square">
                    <img src={src} alt="" className="h-full w-full object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.1} className="sticky top-28">
              <div className="rounded-xl2 border border-navy/10 bg-white shadow-card p-8">
                <Badge>Best rate, booked direct</Badge>
                <p className="font-display text-3xl text-navy mt-5">{apartment.from}</p>
                <p className="text-sm text-navy-400 mt-2">
                  Includes free WiFi, daily housekeeping and access to on-site dining.
                </p>
                <Button
                  as="a"
                  href={site.bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                  variant="primary"
                  className="w-full mt-7"
                >
                  Check Availability <FiArrowRight />
                </Button>
                <Button as={Link} to="/contact" variant="ghost" className="w-full mt-3">
                  Ask a question
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-sand-100/60">
        <div className="container-tide">
          <Reveal>
            <h2 className="heading-display text-3xl md:text-5xl text-navy mb-14">Other apartments</h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {others.map((a, i) => (
              <ApartmentCard apartment={a} index={i} key={a.slug} />
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
