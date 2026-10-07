import type { Category, Product } from "@/types/catalog";

const photo = (id: string, width = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`;

export const categories: Category[] = [
  {
    name: "Building Materials",
    image: photo("photo-1504307651254-35680f356dfd", 700),
    imageAlt: "Building work underway on a residential project",
  },
  {
    name: "Roofing",
    image: photo("photo-1635424710928-8bb16f6a81b7", 700),
    imageAlt: "Roof structure prepared for construction",
  },
  {
    name: "Plumbing",
    image: photo("photo-1607472586893-edb57bdc0e39", 700),
    imageAlt: "Plumbing fittings ready for installation",
  },
  {
    name: "Electrical",
    image: photo("photo-1621905251189-08b45d6a269e", 700),
    imageAlt: "Electrical work in progress",
  },
  {
    name: "Tools & Hardware",
    image: photo("photo-1504148455328-c376907d081c", 700),
    imageAlt: "Hand tools arranged on a workbench",
  },
  {
    name: "Paint & Finishing",
    image: photo("photo-1562259949-e8e7689d7828", 700),
    imageAlt: "Painting supplies ready for a finishing project",
  },
  {
    name: "Other Supplies",
    image: photo("photo-1581092921461-eab62e97a780", 700),
    imageAlt: "Construction supplies arranged for a project",
  },
];

export const products: Product[] = [
  {
    id: "cement",
    name: "Portland Cement",
    category: "Building Materials",
    description: "For general building, blockwork and concrete applications.",
    image: photo("photo-1518709594023-6eab9bab7b23"),
    imageAlt: "Cement bags at a construction site",
    featured: true,
  },
  {
    id: "roofing-sheets",
    name: "Corrugated Roofing Sheets",
    category: "Roofing",
    description: "Practical roof covering options for new builds and repairs.",
    image: photo("photo-1635424710928-8bb16f6a81b7"),
    imageAlt: "Corrugated metal roofing on a building",
    featured: true,
  },
  {
    id: "pipe-fittings",
    name: "PVC Pipe & Fittings",
    category: "Plumbing",
    description: "Everyday plumbing components for water and drainage work.",
    image: photo("photo-1607472586893-edb57bdc0e39"),
    imageAlt: "PVC plumbing fittings and pipework",
    featured: true,
  },
  {
    id: "power-tools",
    name: "Power Tools",
    category: "Tools & Hardware",
    description: "Tools for workshop tasks, site work and home projects.",
    image: photo("photo-1504148455328-c376907d081c"),
    imageAlt: "Power tools arranged on a wooden workbench",
    featured: true,
  },
  {
    id: "electrical-cable",
    name: "Electrical Cable & Accessories",
    category: "Electrical",
    description: "Electrical installation essentials. Ask about available sizes.",
    image: photo("photo-1621905251189-08b45d6a269e"),
    imageAlt: "Electrical cable and installation equipment",
    featured: true,
  },
  {
    id: "interior-paint",
    name: "Interior Paint",
    category: "Paint & Finishing",
    description: "Finishing options for refreshing interior walls and rooms.",
    image: photo("photo-1562259949-e8e7689d7828"),
    imageAlt: "Interior wall painting in progress",
    featured: true,
  },
  {
    id: "fasteners",
    name: "Fasteners & Fixings",
    category: "Other Supplies",
    description: "Everyday fixing essentials for assembly, repairs and finishing.",
    image: photo("photo-1504148455328-c376907d081c"),
    imageAlt: "Hardware and hand tools prepared for a repair project",
    featured: true,
  },
  {
    id: "masonry-blocks",
    name: "Masonry Supplies",
    category: "Building Materials",
    description: "Ask about available masonry materials for your build.",
    image: photo("photo-1504307651254-35680f356dfd"),
    imageAlt: "Masonry work on a building project",
    featured: true,
  },
  {
    id: "roofing-accessories",
    name: "Roofing Accessories",
    category: "Roofing",
    description: "Ask about the accessories and fittings for your roof project.",
    image: photo("photo-1635424710928-8bb16f6a81b7"),
    imageAlt: "Roofing materials prepared for installation",
    featured: true,
  },
];