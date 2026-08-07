import { useState } from "react";
import { FiPhone, FiMail, FiMapPin, FiArrowRight, FiCheck } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import PageWrapper from "../components/PageWrapper";
import SectionHeader from "../components/SectionHeader";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import MapEmbed from "../components/MapEmbed";
import { site } from "../data/content";

const inputClass =
  "w-full rounded-xl border border-navy/15 bg-white px-5 py-3.5 text-navy placeholder:text-navy-300 focus:border-teal focus:outline-none transition-colors";

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", dates: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-xl2 border border-teal/20 bg-teal-50 p-10 text-center">
        <div className="h-14 w-14 rounded-full bg-teal text-fog-100 flex items-center justify-center mx-auto mb-5">
          <FiCheck size={22} />
        </div>
        <h3 className="font-display text-2xl text-navy">Thank you, {form.name.split(" ")[0] || "there"}.</h3>
        <p className="text-navy-400 mt-2">
          Your message has been noted. Our reservations team will reply to {form.email || "your email"} shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <input
          required
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Full name"
          className={inputClass}
        />
        <input
          required
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email address"
          className={inputClass}
        />
      </div>
      <input
        name="dates"
        value={form.dates}
        onChange={handleChange}
        placeholder="Preferred dates (e.g. 12–19 Oct)"
        className={inputClass}
      />
      <textarea
        required
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Tell us about your stay — party size, apartment preference, anything else."
        rows={5}
        className={`${inputClass} resize-none`}
      />
      <Button type="submit" variant="primary" className="self-start mt-2">
        Send Inquiry <FiArrowRight />
      </Button>
    </form>
  );
}

export default function Contact() {
  return (
    <PageWrapper>
      <section className="pt-40 pb-16 md:pt-52 md:pb-20">
        <div className="container-tide">
          <SectionHeader
            eyebrow="Contact"
            title="Let's plan your stay."
            description="Reach out directly and our reservations team will help you find the right apartment and dates."
            size="xl"
          />
        </div>
      </section>

      <section className="pb-28 md:pb-36">
        <div className="container-tide grid grid-cols-1 lg:grid-cols-12 gap-14">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="rounded-xl2 border border-navy/10 bg-white shadow-card p-8 md:p-10">
                <ContactForm />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-4">
            <Reveal delay={0.05}>
              <a
                href={`tel:${site.phone}`}
                className="flex items-center gap-4 rounded-xl2 border border-navy/10 bg-white p-6 hover:shadow-card transition-shadow"
              >
                <span className="h-12 w-12 rounded-full bg-teal-50 text-teal flex items-center justify-center shrink-0">
                  <FiPhone />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-navy-300">Call us</p>
                  <p className="font-display text-lg text-navy">{site.phone}</p>
                </div>
              </a>
            </Reveal>
            <Reveal delay={0.1}>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-xl2 border border-navy/10 bg-white p-6 hover:shadow-card transition-shadow"
              >
                <span className="h-12 w-12 rounded-full bg-teal-50 text-teal flex items-center justify-center shrink-0">
                  <FaWhatsapp />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-navy-300">WhatsApp</p>
                  <p className="font-display text-lg text-navy">Quick booking chat</p>
                </div>
              </a>
            </Reveal>
            <Reveal delay={0.15}>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-4 rounded-xl2 border border-navy/10 bg-white p-6 hover:shadow-card transition-shadow"
              >
                <span className="h-12 w-12 rounded-full bg-teal-50 text-teal flex items-center justify-center shrink-0">
                  <FiMail />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-navy-300">Email</p>
                  <p className="font-display text-lg text-navy break-all">{site.email}</p>
                </div>
              </a>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex items-center gap-4 rounded-xl2 border border-navy/10 bg-white p-6">
                <span className="h-12 w-12 rounded-full bg-teal-50 text-teal flex items-center justify-center shrink-0">
                  <FiMapPin />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-navy-300">Address</p>
                  <p className="font-display text-lg text-navy">{site.address}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="pb-28 md:pb-36">
        <div className="container-tide">
          <Reveal>
            <MapEmbed className="h-[420px] shadow-card" />
          </Reveal>
        </div>
      </section>
    </PageWrapper>
  );
}
