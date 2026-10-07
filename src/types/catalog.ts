export type ProductCategory =
  | "Building Materials"
  | "Roofing"
  | "Plumbing"
  | "Electrical"
  | "Tools & Hardware"
  | "Paint & Finishing"
  | "Other Supplies";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
}

export interface Category {
  name: ProductCategory;
  image: string;
  imageAlt: string;
}