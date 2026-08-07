// STAAH configuration
// ---------------------------------------------------------------------------
// Thalassa's booking engine is powered by STAAH (see `site.bookingUrl` in
// content.js, which already encodes the live `propertyId`). To show *real*
// live availability and rates on-site (rather than just deep-linking out to
// the booking engine), STAAH exposes a Channel Manager / Rates & Inventory
// API that needs a property-level API key.
//
// IMPORTANT: a STAAH API key is a server-side secret. It must never be
// shipped in client-side JS (anything in this bundle is publicly visible in
// the browser). The correct integration shape is:
//
//   Browser (BookingWidget.jsx)
//     → your own backend endpoint, e.g. POST /api/rates
//       → server calls STAAH's API using STAAH_API_KEY from an env var
//       → server returns just the rates JSON to the browser
//
// The constants below are placeholders so the wiring is obvious. Replace
// PROPERTY_ID with your real STAAH property id, and implement the small
// backend proxy described in `src/lib/staah.js` before going live — do not
// paste a real key into this file.
export const STAAH_CONFIG = {
  PROPERTY_ID: "621M2A2xdQ4mFUTJMDCEhqmJ95pSEgpsOSgjYzNzE=",
  API_KEY: "YOUR_STAAH_API_KEY", // placeholder — set via backend env var, not here
  RATES_ENDPOINT: "/api/staah/rates", // your backend proxy route, once built
};
