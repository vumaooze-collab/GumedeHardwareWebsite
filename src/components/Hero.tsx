import Image from "next/image";
import { ArrowDown, ArrowRight, MapPin } from "lucide-react";
import { business } from "@/config/business";

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-inner page-width">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-rule" />Your next project starts here</p>
          <h1 id="hero-title">Build well.<br /><em>Build with</em> Gumede.</h1>
          <p className="hero-description">
            Building materials, tools and everyday essentials for the work ahead. Find what you need at Gumede Hardware in Mzuzu.
          </p>
          <div className="hero-actions">
            <a className="button button-orange" href="#products">Explore products <ArrowRight size={17} aria-hidden="true" /></a>
            <a className="text-link" href="#contact">Talk to our team <ArrowDown size={15} aria-hidden="true" /></a>
          </div>
          <div className="hero-location"><MapPin size={16} aria-hidden="true" /><span>{business.location}</span></div>
        </div>
        <div className="hero-visual">
          <Image
            className="hero-image"
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=88"
            alt="A construction team at work on a building project"
            fill
            priority
            sizes="(max-width: 760px) 100vw, 54vw"
          />
          <div className="hero-image-caption"><span className="caption-mark" />Made for the work ahead</div>
          <div className="hero-stamp" aria-hidden="true"><span>GH</span><small>Gumede<br />Hardware</small></div>
        </div>
      </div>
      <div className="hero-bottom page-width"><span>Materials. Tools. Possibilities.</span><a href="#categories">Find your category <ArrowDown size={14} aria-hidden="true" /></a></div>
    </section>
  );
}