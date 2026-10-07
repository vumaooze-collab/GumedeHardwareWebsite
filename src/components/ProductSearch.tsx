import { Search, X } from "lucide-react";

interface ProductSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export function ProductSearch({ value, onChange }: ProductSearchProps) {
  return (
    <div className="product-search">
      <Search size={18} aria-hidden="true" />
      <label className="visually-hidden" htmlFor="product-search">Search products</label>
      <input id="product-search" type="search" placeholder="Search products or categories" value={value} onChange={(event) => onChange(event.target.value)} />
      {value && <button type="button" className="search-clear icon-button" onClick={() => onChange("")} aria-label="Clear search"><X size={16} /></button>}
    </div>
  );
}