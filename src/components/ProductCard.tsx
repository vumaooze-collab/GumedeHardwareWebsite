import Image from "next/image";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { business } from "@/config/business";
import type { Product } from "@/types/catalog";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const message = encodeURIComponent(`Hello, I would like to ask about ${product.name}. Please share current availability and price.`);
  const href = business.whatsappNumber ? `${business.whatsappHref}?text=${message}` : "#contact";

  return (
    <article className="product-card">
      <a className="product-image-wrap" href={href} aria-label={`Enquire about ${product.name}`} target={business.whatsappNumber ? "_blank" : undefined} rel={business.whatsappNumber ? "noreferrer" : undefined}>
        <Image src={product.image} alt={product.imageAlt} fill sizes="(max-width: 640px) 90vw, (max-width: 1000px) 44vw, 28vw" />
        <span className="product-image-action"><ArrowUpRight size={16} aria-hidden="true" /></span>
      </a>
      <div className="product-info">
        <p className="product-category">{product.category}</p>
        <h3>{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-footer"><span className="request-price">Request price</span><a className="product-enquire" href={href} target={business.whatsappNumber ? "_blank" : undefined} rel={business.whatsappNumber ? "noreferrer" : undefined} aria-label={`Ask about ${product.name} on WhatsApp`}><MessageCircle size={16} aria-hidden="true" /> Enquire</a></div>
      </div>
    </article>
  );
}