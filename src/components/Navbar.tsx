"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, MessageCircle, X } from "lucide-react";
import { business } from "@/config/business";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner page-width">
        <a className="brand" href="#top" aria-label="Gumede Hardware home" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark" aria-hidden="true">G</span>
          <span className="brand-name">Gumede <strong>Hardware</strong></span>
        </a>

        <button
          className="mobile-menu-toggle icon-button"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav id="primary-navigation" className={`primary-nav${menuOpen ? " is-open" : ""}`} aria-label="Main navigation">
          {business.navigation.map((item) => (
            <a href={item.href} key={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
          ))}
          <a className="button button-green nav-cta" href={business.whatsappHref} target={business.whatsappNumber ? "_blank" : undefined} rel={business.whatsappNumber ? "noreferrer" : undefined}>
            <MessageCircle size={16} aria-hidden="true" />
            WhatsApp us
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  );
}