import { ArrowUpRight, MapPin } from "lucide-react";
import { business } from "@/config/business";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-width footer-main"><div className="footer-brand-column"><a className="brand footer-brand" href="#top"><span className="brand-mark" aria-hidden="true">G</span><span className="brand-name">Gumede <strong>Hardware</strong></span></a><p>Materials, tools and essentials<br />for the work ahead.</p><span className="footer-location"><MapPin size={15} aria-hidden="true" />{business.location}</span></div>
        <div className="footer-column"><h2>Explore</h2><a href="#products">Products</a><a href="#categories">Categories</a><a href="#about">About us</a><a href="#contact">Contact</a></div>
        <div className="footer-column"><h2>Get in touch</h2><a href="#contact">{business.phoneDisplay}</a><a href={business.whatsappHref} target={business.whatsappNumber ? "_blank" : undefined} rel={business.whatsappNumber ? "noreferrer" : undefined}>WhatsApp <ArrowUpRight size={13} aria-hidden="true" /></a><span>{business.hoursDisplay}</span></div>
        <div className="footer-column"><h2>Follow along</h2><a href="#contact">Facebook <ArrowUpRight size={13} aria-hidden="true" /></a><a href="#contact">Instagram <ArrowUpRight size={13} aria-hidden="true" /></a><span className="placeholder-note">Social links to be confirmed</span></div>
      </div>
      <div className="footer-bottom page-width"><span>© {new Date().getFullYear()} Gumede Hardware. All rights reserved.</span><a href="#top">Back to top ↑</a><span>Mzuzu, Malawi</span></div>
    </footer>
  );
}