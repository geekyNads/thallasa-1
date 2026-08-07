import { STAAH_CONFIG } from "../config";
import { apartments } from "../data/content";

// Base "rack rate" per apartment, parsed from the placeholder pricing in
// content.js (e.g. "From €120 / night" → 120). Used only by the local demo
// calculator below when no backend is configured.
function baseRate(apartment) {
  const match = apartment.from.match(/(\d+)/);
  return match ? parseInt(match[1], 10) : 150;
}

function nightsBetween(checkIn, checkOut) {
  const inDate = new Date(checkIn);
  const outDate = new Date(checkOut);
  const diff = Math.round((outDate - inDate) / (1000 * 60 * 60 * 24));
  return Number.isFinite(diff) && diff > 0 ? diff : 0;
}

/**
 * Fetch live per-apartment rates for a date range.
 *
 * In production this should call your backend proxy
 * (`STAAH_CONFIG.RATES_ENDPOINT`), which in turn calls STAAH's Rates &
 * Inventory API using the real `STAAH_CONFIG.API_KEY` server-side. That
 * backend does not exist in this project yet — see `src/config.js` for the
 * integration notes.
 *
 * Until that backend is live, this function falls back to a clearly-labelled
 * local estimate (rack rate × a small seasonal/weekend multiplier), so the
 * UI can be built and demoed end-to-end today.
 */
export async function getRates({ checkIn, checkOut, guests = 2 }) {
  const nights = nightsBetween(checkIn, checkOut);
  if (!nights) {
    throw new Error("Select a valid check-in and check-out date.");
  }

  // Real integration:
  // const res = await fetch(STAAH_CONFIG.RATES_ENDPOINT, {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({ propertyId: STAAH_CONFIG.PROPERTY_ID, checkIn, checkOut, guests }),
  // });
  // if (!res.ok) throw new Error("Unable to fetch live rates.");
  // return res.json();

  // Demo fallback — simulates network latency and a light weekend markup.
  await new Promise((resolve) => setTimeout(resolve, 900));

  return {
    source: "estimate", // flip to "live" once the real endpoint above is wired in
    nights,
    results: apartments
      .filter((a) => a.guests >= guests)
      .map((a) => {
        const rate = baseRate(a);
        const weekendNights = countWeekendNights(checkIn, nights);
        const nightly = rate + weekendNights * 6;
        return {
          slug: a.slug,
          name: a.name,
          image: a.image,
          nightly,
          total: nightly * nights,
        };
      }),
  };
}

function countWeekendNights(checkIn, nights) {
  let count = 0;
  const d = new Date(checkIn);
  for (let i = 0; i < nights; i++) {
    const day = d.getDay();
    if (day === 5 || day === 6) count++;
    d.setDate(d.getDate() + 1);
  }
  return count;
}
