// ---------------------------------------------------------------
// SITE-WIDE DETAILS
// Edit this one file to update contact details, services and copy
// that appear across the whole site.
// Leave a field as "" to hide it until you have the real value.
// ---------------------------------------------------------------

export const site = {
  name: "FS Gonzalves Construction",
  shortName: "FSG",
  tagline: "Passion for Quality Workmanship",
  description:
    "FS Gonzalves Construction is a family-run construction company based in Port Shepstone, building commercial and healthcare spaces across the KZN South Coast.",
  serviceArea: "KZN South Coast",
  // TODO: change to the real domain once it is registered.
  url: "https://fsgcon.netlify.app",

  address: {
    line1: "13 Indus Road",
    line2: "Marburg",
    city: "Port Shepstone",
    region: "KwaZulu-Natal",
  },

  // TODO: fill these in. Empty values are hidden on the site.
  phone: "", // e.g. "039 123 4567"
  email: "", // e.g. "info@yourdomain.co.za"
  whatsapp: "", // international format, digits only, e.g. "27821234567"
  facebook: "",
  instagram: "",
  linkedin: "",
};

// TODO: confirm this list with the business before going live.
export const services = [
  {
    title: "Commercial Buildings",
    body: "Showrooms, offices and retail spaces delivered from groundworks to handover.",
  },
  {
    title: "Healthcare Facilities",
    body: "Clinical spaces built to the standards that hospitals and day clinics demand.",
  },
  {
    title: "Interior Fit-Outs",
    body: "Reception areas, offices and wards finished with care and attention to detail.",
  },
  {
    title: "Renovations & Extensions",
    body: "Upgrading and extending existing buildings with minimal disruption.",
  },
];

// The four headlines from the original Figma hero slides, reused as values.
export const values = [
  {
    title: "Quality Workmanship",
    body: "Every detail matters, from the foundations to the final finish.",
  },
  {
    title: "Safety First",
    body: "Safe sites protect our people, our clients and the public.",
  },
  {
    title: "Building the Future",
    body: "Modern methods and materials for buildings that last.",
  },
  {
    title: "Planning Your Dreams",
    body: "We work with you from the first conversation to handover.",
  },
];

export const process = [
  { step: "01", title: "Consult", body: "We meet on site, listen to what you need and talk through options." },
  { step: "02", title: "Plan & Quote", body: "A clear scope, programme and quotation, with no surprises." },
  { step: "03", title: "Build", body: "Experienced teams on site, with regular progress updates." },
  { step: "04", title: "Handover", body: "A finished building, checked, cleaned and ready to use." },
];

export const nav = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
