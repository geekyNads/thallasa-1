import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCalendar, FiUsers, FiArrowRight, FiLoader } from "react-icons/fi";
import Reveal from "./Reveal";
import Button from "./Button";
import { getRates } from "../lib/staah";
import { site } from "../data/content";

function todayISO(offsetDays = 0) {
  const d = new Date();
  d.setDate(d.getDate() + offsetDays);
  return d.toISOString().slice(0, 10);
}

export default function BookingWidget() {
  const [checkIn, setCheckIn] = useState(todayISO(14));
  const [checkOut, setCheckOut] = useState(todayISO(17));
  const [guests, setGuests] = useState(2);
  const [status, setStatus] = useState("idle"); // idle | loading | done | error
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleCheckRates = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setError("");
    try {
      const data = await getRates({ checkIn, checkOut, guests });
      setResult(data);
      setStatus("done");
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  const bookingLink = (slug) =>
    `${site.bookingUrl}&checkin=${checkIn}&checkout=${checkOut}&adults=${guests}${
      slug ? `&room=${slug}` : ""
    }`;

  return (
    <div className="relative z-20">
      <div className="container-tide">
        <Reveal delay={0.5}>
          <div className="-mt-16 md:-mt-20 rounded-2xl bg-white shadow-soft p-6 md:p-8">
            <form
              onSubmit={handleCheckRates}
              className="grid grid-cols-1 md:grid-cols-[1fr_1fr_auto_auto] gap-4 md:gap-5 items-end"
            >
              <label className="flex flex-col gap-2">
                <span className="flex items-center gap-1.5 text-xs font-label uppercase tracking-widest2 text-navy-300">
                  <FiCalendar /> Check-in
                </span>
                <input
                  required
                  type="date"
                  min={todayISO()}
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="rounded-xl border border-navy/15 px-4 py-3 text-navy focus:border-teal focus:outline-none"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="flex items-center gap-1.5 text-xs font-label uppercase tracking-widest2 text-navy-300">
                  <FiCalendar /> Check-out
                </span>
                <input
                  required
                  type="date"
                  min={checkIn || todayISO()}
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="rounded-xl border border-navy/15 px-4 py-3 text-navy focus:border-teal focus:outline-none"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="flex items-center gap-1.5 text-xs font-label uppercase tracking-widest2 text-navy-300">
                  <FiUsers /> Guests
                </span>
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="rounded-xl border border-navy/15 px-4 py-3 text-navy focus:border-teal focus:outline-none bg-white"
                >
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "guest" : "guests"}
                    </option>
                  ))}
                </select>
              </label>

              <Button type="submit" variant="primary" className="h-[50px] w-full md:w-auto justify-self-stretch">
                {status === "loading" ? (
                  <motion.span animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}>
                    <FiLoader />
                  </motion.span>
                ) : (
                  <>
                    Check Rates <FiArrowRight />
                  </>
                )}
              </Button>
            </form>

            <AnimatePresence mode="wait">
              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-sm text-red-500 mt-4"
                >
                  {error}
                </motion.p>
              )}

              {status === "done" && result && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="mt-6 pt-6 border-t border-navy/10 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {result.results.map((r) => (
                      <a
                        key={r.slug}
                        href={bookingLink(r.slug)}
                        target="_blank"
                        rel="noreferrer"
                        className="group rounded-xl border border-navy/10 p-4 flex items-center gap-4 hover:border-teal/40 hover:shadow-card transition-all"
                      >
                        <img src={r.image} alt="" className="h-14 w-14 rounded-lg object-cover shrink-0" />
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-navy truncate">{r.name}</p>
                          <p className="text-teal-600 font-display text-lg">
                            €{r.nightly}
                            <span className="text-xs text-navy-300 font-body"> / night</span>
                          </p>
                          <p className="text-xs text-navy-300">
                            €{r.total} total · {result.nights} {result.nights === 1 ? "night" : "nights"}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                  <p className="text-[11px] text-navy-300 mt-4">
                    Indicative rates shown for demonstration. Connect a STAAH Rates &amp; Inventory backend
                    (see <code className="font-mono">src/lib/staah.js</code>) for live, bookable pricing.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
