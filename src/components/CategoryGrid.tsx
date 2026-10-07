import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/data/products";
import type { ProductCategory } from "@/types/catalog";

interface CategoryGridProps {
  activeCategory: ProductCategory | "All";
  onSelect: (category: ProductCategory | "All") => void;
}

export function CategoryGrid({ activeCategory, onSelect }: CategoryGridProps) {
  return (
    <section className="categories-section section-pad" id="categories" aria-labelledby="categories-title">
      <div className="page-width">
        <div className="section-heading section-heading-row">
          <div><p className="eyebrow"><span className="eyebrow-rule" />Browse by category</p><h2 id="categories-title">The right materials<br />for every <em>next step.</em></h2></div>
          <button className={`category-all${activeCategory === "All" ? " is-active" : ""}`} onClick={() => onSelect("All")} type="button" aria-pressed={activeCategory === "All"}>View all products <ArrowUpRight size={16} aria-hidden="true" /></button>
        </div>
        <div className="category-grid">
          {categories.map((category) => (
            <button
              className={`category-tile${activeCategory === category.name ? " is-active" : ""}`}
              key={category.name}
              type="button"
              aria-pressed={activeCategory === category.name}
              onClick={() => onSelect(category.name)}
            >
              <Image src={category.image} alt={category.imageAlt} fill sizes="(max-width: 640px) 46vw, (max-width: 1000px) 30vw, 15vw" />
              <span className="category-overlay" />
              <span className="category-label">{category.name}<ArrowUpRight size={15} aria-hidden="true" /></span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}