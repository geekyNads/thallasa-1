export default function MapEmbed({ className = "" }) {
  return (
    <div className={`overflow-hidden rounded-xl2 ${className}`}>
      <iframe
        title="Thalassa Seychelles location — Beau Vallon"
        src="https://maps.google.com/maps?q=Beau%20Vallon%2C%20Mahe%2C%20Seychelles&t=&z=14&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: 380 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
