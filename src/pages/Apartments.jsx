import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import ApartmentCard from "../components/ApartmentCard";
import Button from "../components/Button";
import { apartments, images, site } from "../data/content";

export default function Apartments() {
  return (
    <PageWrapper>
      <section className="relative pt-40 pb-20 md:pt-52 md:pb-28 overflow-hidden bg-navy text-fog-100">
        <img src={images.twoBed} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/50" />
        <div className="container-tide relative">
          <SectionHeader
            eyebrow="Apartments"
            title="Three layouts, one address on Beau Vallon."
            description="From an efficient studio to a sea-view suite, every apartment is finished with the same calm, considered hand."
            light
            size="xl"
          />
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-tide grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8">
          {apartments.map((apt, i) => (
            <ApartmentCard apartment={apt} index={i} key={apt.slug} />
          ))}
        </div>
      </section>

      <section className="py-24 md:py-32 bg-sand-100/60">
        <div className="container-tide flex flex-col md:flex-row items-center justify-between gap-8 rounded-4xl bg-white p-10 md:p-14 shadow-card">
          <div className="max-w-xl">
            <Reveal>
              <h3 className="heading-display text-3xl md:text-4xl text-navy text-balance">
                Not sure which apartment fits your trip?
              </h3>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-navy-400">
                Send us your dates and party size — our team will recommend the right fit and hold the best rate for you.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <div className="flex gap-4 shrink-0">
              <Button as={Link} to="/contact" variant="ghost">
                Ask the team
              </Button>
              <Button as="a" href={site.bookingUrl} target="_blank" rel="noreferrer" variant="primary">
                Book Now <FiArrowRight />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </PageWrapper>
  );
}
