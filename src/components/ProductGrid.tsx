import { PackageSearch } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import type { Product } from "@/types/catalog";

interface ProductGridProps {
  products: Product[];
  onClear: () => void;
}

export function ProductGrid({ products, onClear }: ProductGridProps) {
  if (products.length === 0) {
    return <div className="empty-state"><PackageSearch size={27} aria-hidden="true" /><h3>No matching products</h3><p>Try another search or browse all categories.</p><button className="button button-outline" type="button" onClick={onClear}>Clear filters</button></div>;
  }

  return <div className="product-grid">{products.map((product) => <ProductCard key={product.id} product={product} />)}</div>;
}