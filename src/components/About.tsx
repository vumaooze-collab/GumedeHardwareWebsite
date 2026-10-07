import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import { business } from "@/config/business";

export function About() {
  return (
    <section className="about-section section-pad" id="about" aria-labelledby="about-title">
      <div className="page-width about-layout">
        <div className="about-visual"><Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=86" alt="Modern building facade showing the materials and craft behind construction" fill sizes="(max-width: 760px) 100vw, 46vw" /><span className="about-vertical-label">Built for everyday projects</span></div>
        <div className="about-copy"><p className="eyebrow"><span className="eyebrow-rule" />About Gumede Hardware</p><h2 id="about-title">Rooted in Mzuzu.<br /><em>Ready for what’s next.</em></h2><p>Gumede Hardware is a hardware and building-materials supplier based in Mzuzu, Malawi. From a home improvement to a professional build, we’re here to help you source the essentials for your next step.</p><p>Tell us what you’re working on and our team can help you enquire about products, availability and pricing.</p><a className="text-link" href="#contact">Get in touch <ArrowUpRight size={15} aria-hidden="true" /></a><div className="about-location"><MapPin size={17} aria-hidden="true" /><span>{business.location}</span></div></div>
      </div>
    </section>
  );
}