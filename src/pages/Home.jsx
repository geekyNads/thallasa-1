import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowDown, FiArrowRight, FiMapPin } from "react-icons/fi";
import PageWrapper from "../components/PageWrapper";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import SectionHeader from "../components/SectionHeader";
import Stat from "../components/Stat";
import ApartmentCard from "../components/ApartmentCard";
import FeatureCard from "../components/FeatureCard";
import ReviewCard from "../components/ReviewCard";
import FAQItem from "../components/FAQItem";
import TideDivider from "../components/TideDivider";
import WaveMark from "../components/WaveMark";
import MapEmbed from "../components/MapEmbed";
import BookingWidget from "../components/BookingWidget";
import {
  site,
  images,
  apartments,
  amenities,
  stats,
  reviews,
  faqs,
  about,
  galleryImages,
} from "../data/content";

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <video
          src="output.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/85 via-navy-900/30 to-navy-900/40" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 h-full container-tide flex flex-col justify-end pb-28 md:pb-32">
        <div className="max-w-3xl">
          <Reveal delay={0.1}>
            <span className="eyebrow text-aqua-300">Beau Vallon, Mahé — Seychelles</span>
          </Reveal>
          <Reveal delay={0.2}>
            <h1 className="heading-display text-fog-100 text-[13vw] leading-[0.92] sm:text-6xl md:text-[86px] mt-5 text-balance">
              Where the tide sets
              <br />
              <span className="italic text-aqua-300">the pace.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.35}>
            <p className="mt-7 max-w-md text-fog-200/90 text-base md:text-lg leading-relaxed">
              New, modern apartments steps from Seychelles' longest beach.
              Authentic Creole hospitality, quietly elevated.
            </p>
          </Reveal>
          <Reveal delay={0.45}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button as="a" href={site.bookingUrl} target="_blank" rel="noreferrer" variant="primary">
                Book Your Stay <FiArrowRight />
              </Button>
              <Button as={Link} to="/apartments" variant="outlineLight">
                View Apartments
              </Button>
            </div>
          </Reveal>
        </div>
      </motion.div>

      <div className="absolute bottom-8 right-6 md:right-16 z-10 hidden sm:flex flex-col items-center gap-3 text-fog-100/80">
        <span className="font-label text-[10px] uppercase tracking-widest2 [writing-mode:vertical-rl]">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <FiArrowDown />
        </motion.span>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="py-28 md:py-36 overflow-hidden">
      <div className="container-tide grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
        <div className="lg:col-span-5">
          <SectionHeader eyebrow={about.eyebrow} title={about.heading} size="md" />
          <Reveal delay={0.15}>
            <p className="mt-6 text-navy-400 leading-relaxed">{about.body}</p>
          </Reveal>
          <Reveal delay={0.25}>
            <Button as={Link} to="/apartments" variant="ghost" className="mt-8">
              Discover the apartments <FiArrowRight />
            </Button>
          </Reveal>
        </div>
        <div className="lg:col-span-7 relative">
          <Reveal className="relative rounded-xl2 overflow-hidden aspect-[4/3]" delay={0.1}>
            <img src={images.exteriorA} alt="Thalassa exterior" className="h-full w-full object-cover" />
          </Reveal>
          <Reveal
            delay={0.3}
            className="absolute -bottom-10 -left-8 md:-left-14 w-2/5 rounded-xl2 overflow-hidden shadow-soft border-4 border-fog-100 aspect-[3/4] hidden sm:block"
          >
            <img src={images.poolA} alt="Pool terrace" className="h-full w-full object-cover" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function StatsStrip() {
  return (
    <section className="bg-navy py-16 md:py-20">
      <div className="container-tide grid grid-cols-2 md:grid-cols-4 gap-10">
        {stats.map((s) => (
          <Stat key={s.label} value={s.value} label={s.label} light />
        ))}
      </div>
    </section>
  );
}

function ApartmentsSection() {
  return (
    <section className="py-28 md:py-36">
      <div className="container-tide">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <SectionHeader
            eyebrow="Apartment highlights"
            title="Three ways to stay, one standard of calm."
            size="md"
          />
          <Reveal delay={0.15}>
            <Button as={Link} to="/apartments" variant="ghost" className="shrink-0">
              View all apartments <FiArrowRight />
            </Button>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8">
          {apartments.map((apt, i) => (
            <ApartmentCard apartment={apt} index={i} key={apt.slug} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AmenitiesSection() {
  return (
    <section className="py-28 md:py-36 bg-sand-100/60 relative">
      <div className="container-tide">
        <SectionHeader
          eyebrow="Amenities"
          title="Everything a holiday needs, nothing it doesn't."
          description="Considered details across the property, so your days are spent on the beach, not on logistics."
          align="center"
          size="md"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {amenities.map((a, i) => (
            <FeatureCard key={a.title} title={a.title} detail={a.detail} icon={a.icon} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryPreview() {
  const preview = galleryImages.slice(0, 5);
  return (
    <section className="py-28 md:py-36">
      <div className="container-tide">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <SectionHeader eyebrow="Gallery" title="A closer look at Thalassa." size="md" />
          <Reveal delay={0.15}>
            <Button as={Link} to="/gallery" variant="ghost" className="shrink-0">
              Open full gallery <FiArrowRight />
            </Button>
          </Reveal>
        </div>
      </div>
      <div className="container-tide grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
        <Reveal className="col-span-2 row-span-2 rounded-xl2 overflow-hidden aspect-square md:aspect-auto">
          <img src={preview[0].src} alt="" className="h-full w-full object-cover hover:scale-105 transition-transform duration-700" />
        </Reveal>
        {preview.slice(1).map((img, i) => (
          <Reveal key={i} delay={0.1 * (i + 1)} className="rounded-xl2 overflow-hidden aspect-square">
            <img src={img.src} alt="" className="h-full w-full object-cover hover:scale-105 transition-transform duration-700" />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function LocationSection() {
  return (
    <section className="py-28 md:py-36 bg-navy text-fog-100 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0">
        <TideDivider color="#F5F6F4" />
      </div>
      <div className="container-tide grid grid-cols-1 lg:grid-cols-2 gap-14 items-center pt-10">
        <div>
          <SectionHeader
            eyebrow="Location"
            title="Steps from Beau Vallon, minutes from everywhere else."
            description="Seychelles' longest beach is a short walk away, with restaurants, the bus stop and a European-standard supermarket built into the property. Victoria's city centre is just 8 minutes by car."
            light
            size="md"
          />
          <Reveal delay={0.2} className="mt-8 flex items-center gap-3 text-fog-200">
            <FiMapPin className="text-aqua-300" />
            <span>{site.address}</span>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <MapEmbed className="h-[380px] shadow-soft" />
        </Reveal>
      </div>
    </section>
  );
}

function ReviewsSection() {
  return (
    <section className="py-28 md:py-36">
      <div className="container-tide">
        <SectionHeader
          eyebrow="Guest reviews"
          title="9.5 rated by guests who've stayed."
          align="center"
          size="md"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-16">
          {reviews.map((r, i) => (
            <ReviewCard key={r.name} review={r} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section className="py-28 md:py-36 bg-sand-100/60">
      <div className="container-tide grid grid-cols-1 lg:grid-cols-12 gap-14">
        <div className="lg:col-span-4">
          <SectionHeader eyebrow="FAQ" title="Good to know before you arrive." size="md" />
        </div>
        <div className="lg:col-span-8">
          {faqs.map((f, i) => (
            <FAQItem faq={f} key={f.q} defaultOpen={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-28 md:py-36 relative overflow-hidden">
      <div className="container-tide">
        <div className="relative rounded-4xl overflow-hidden bg-teal px-8 py-20 md:py-28 text-center">
          <img
            src={images.exteriorB}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-overlay"
          />
          <WaveMark className="w-16 h-12 mx-auto mb-8 opacity-80" color="#F5F6F4" />
          <SectionHeader
            title="Your Beau Vallon stay starts here."
            description="Reserve directly for the best available rate — with a team on hand from arrival to departure."
            align="center"
            light
            size="lg"
          />
          <Reveal delay={0.2} className="mt-10 flex flex-wrap justify-center gap-4">
            <Button as="a" href={site.bookingUrl} target="_blank" rel="noreferrer" variant="light">
              Book Now <FiArrowRight />
            </Button>
            <Button as={Link} to="/contact" variant="outlineLight">
              Contact Us
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <PageWrapper>
      <Hero />
      <BookingWidget />
      <AboutSection />
      <StatsStrip />
      <ApartmentsSection />
      <AmenitiesSection />
      <GalleryPreview />
      <LocationSection />
      <ReviewsSection />
      <FAQSection />
      <CTASection />
    </PageWrapper>
  );
}
