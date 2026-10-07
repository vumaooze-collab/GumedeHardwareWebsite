"use client";

import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { CategoryGrid } from "@/components/CategoryGrid";
import { ProductGrid } from "@/components/ProductGrid";
import { ProductSearch } from "@/components/ProductSearch";
import { products } from "@/data/products";
import type { ProductCategory } from "@/types/catalog";

export function ProductCatalog() {
  const [category, setCategory] = useState<ProductCategory | "All">("All");
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    const term = search.trim().toLowerCase();
    return products.filter((product) => {
      const matchesCategory = category === "All" || product.category === category;
      const matchesSearch = !term || `${product.name} ${product.category} ${product.description}`.toLowerCase().includes(term);
      return matchesCategory && matchesSearch;
    });
  }, [category, search]);

  const clearFilters = () => {
    setCategory("All");
    setSearch("");
  };

  return (
    <>
      <CategoryGrid activeCategory={category} onSelect={setCategory} />
      <section className="products-section section-pad" id="products" aria-labelledby="products-title">
        <div className="page-width">
          <div className="section-heading section-heading-row products-heading">
            <div><p className="eyebrow"><span className="eyebrow-rule" />A considered selection</p><h2 id="products-title">Ready for your <em>list.</em></h2><p className="section-intro">Ask us about current availability, sizes and pricing.</p></div>
            <ProductSearch value={search} onChange={setSearch} />
          </div>
          <div className="filter-summary" aria-live="polite"><span>{category === "All" ? "All categories" : category}</span><span>{filteredProducts.length} {filteredProducts.length === 1 ? "item" : "items"}</span></div>
          <ProductGrid products={filteredProducts} onClear={clearFilters} />
          <div className="catalog-bottom"><span>Looking for something specific?</span><a className="text-link" href="#contact">Send us your list <ArrowRight size={15} aria-hidden="true" /></a></div>
        </div>
      </section>
    </>
  );
}