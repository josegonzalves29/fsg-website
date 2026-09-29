// ---------------------------------------------------------------
// PROJECTS
// To add a project:
//   1. Create a folder: public/projects/<your-project-slug>/
//   2. Put the photos in it (JPG, ideally 1920px wide or more)
//   3. Copy one of the entries below, paste it into the list and edit it
// The Projects page, project detail pages and homepage pick it up
// automatically. Set `featured: true` to show it on the homepage.
// ---------------------------------------------------------------

export type ProjectCategory = "Commercial" | "Healthcare" | "Public Sector" | "Residential" | "Industrial";

export type ProjectImage = {
  src: string;
  alt: string;
};

export type Project = {
  slug: string; // used in the URL: /projects/<slug>
  title: string;
  location: string;
  category: ProjectCategory;
  year?: string; // optional, e.g. "2019"
  summary: string; // one line, shown on cards
  description?: string[]; // paragraphs, shown on the project page
  note?: string; // optional small print on the project page
  cover: ProjectImage;
  images: ProjectImage[];
  featured?: boolean;
};

const img = (slug: string, file: string, alt: string): ProjectImage => ({
  src: `/projects/${slug}/${file}`,
  alt,
});

export const projects: Project[] = [
  {
    slug: "audi-centre-margate",
    title: "Audi Centre Margate",
    location: "Marine Drive, Margate",
    category: "Commercial",
    summary: "A modern motor dealership with a glass-fronted showroom.",
    description: [
      "A motor dealership on Marine Drive in Margate, with a full-height glass showroom and a clean, modern facade.",
    ],
    note: "The building has since been rebranded. The rebranding was not carried out by FS Gonzalves Construction.",
    cover: img("audi-centre-margate", "01-showroom-dusk.jpg", "Audi Centre Margate showroom lit up at dusk"),
    images: [
      img("audi-centre-margate", "01-showroom-dusk.jpg", "Audi Centre Margate showroom lit up at dusk"),
      img("audi-centre-margate", "02-frontage.jpg", "Glass showroom frontage of Audi Centre Margate"),
    ],
    featured: true,
  },
  {
    slug: "hibiscus-hospital",
    title: "Hibiscus Hospital",
    location: "George Street, Port Shepstone",
    category: "Healthcare",
    summary: "A modern medical facility with wards, clinical areas and offices.",
    description: [
      "A multi-storey medical facility on George Street in Port Shepstone, including patient wards, a nurses' station, reception and waiting areas, and administrative offices.",
    ],
    cover: img("hibiscus-hospital", "01-exterior-dusk.jpg", "Hibiscus Hospital exterior lit up at dusk"),
    images: [
      img("hibiscus-hospital", "01-exterior-dusk.jpg", "Hibiscus Hospital exterior lit up at dusk"),
      img("hibiscus-hospital", "04-reception-lounge.jpg", "Bright reception and lounge area"),
      img("hibiscus-hospital", "05-offices.jpg", "Administrative offices"),
      img("hibiscus-hospital", "06-nurses-station.jpg", "Nurses' station"),
      img("hibiscus-hospital", "07-ward.jpg", "Patient ward"),
    ],
    featured: true,
  },
  {
    slug: "fsg-head-office",
    title: "FSG Head Office",
    location: "13 Indus Road, Marburg, Port Shepstone",
    category: "Commercial",
    summary: "Our own head office, finished in stone, timber and glass.",
    description: [
      "Our own head office in Marburg, Port Shepstone, combining natural stone cladding, timber-look panelling and full-height glazing.",
    ],
    cover: img("fsg-head-office", "01-exterior.jpg", "FS Gonzalves Construction head office"),
    images: [img("fsg-head-office", "01-exterior.jpg", "FS Gonzalves Construction head office")],
    featured: true,
  },
  {
    slug: "ugu-municipality",
    title: "Ugu Municipality",
    // TODO: confirm the street address and the official building name.
    location: "KZN South Coast",
    category: "Public Sector",
    summary: "Modern municipal offices in face brick, render and glass.",
    description: [
      "Multi-storey municipal offices combining face brick, rendered panels and extensive glazing, with landscaped parking at the entrance.",
    ],
    cover: img("ugu-municipality", "01-entrance.jpg", "Ugu Municipality offices entrance and parking"),
    images: [
      img("ugu-municipality", "01-entrance.jpg", "Ugu Municipality offices entrance and parking"),
      img("ugu-municipality", "02-exterior.jpg", "Ugu Municipality offices exterior"),
      img("ugu-municipality", "03-exterior-side.jpg", "Side view of the Ugu Municipality offices"),
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const categories = Array.from(new Set(projects.map((p) => p.category)));
