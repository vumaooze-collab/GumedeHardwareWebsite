"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { ArrowRight, Check, Clock3, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { business } from "@/config/business";

type FormStatus = "idle" | "loading" | "ready";

export function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    window.setTimeout(() => setStatus("ready"), 550);
  }

  return (
    <section className="contact-section section-pad" id="contact" aria-labelledby="contact-title">
      <div className="page-width">
        <div className="section-heading contact-heading"><p className="eyebrow"><span className="eyebrow-rule" />Get in touch</p><h2 id="contact-title">Tell us what you’re <em>building.</em></h2><p className="section-intro">Ask about a product, share a materials list or request a quotation. We’ll be glad to hear from you.</p></div>
        <div className="contact-layout">
          <div className="contact-details">
            <div className="contact-detail"><span className="contact-detail-icon"><MapPin size={18} aria-hidden="true" /></span><div><span className="contact-label">Find us</span><strong>{business.address}</strong><span>Exact shop address to be confirmed.</span></div></div>
            <div className="contact-detail"><span className="contact-detail-icon"><Phone size={18} aria-hidden="true" /></span><div><span className="contact-label">Call</span><strong>{business.phoneDisplay}</strong>{business.phone && <a href={`tel:${business.phone.replace(/\s/g, "")}`}>Call Gumede Hardware</a>}</div></div>
            <div className="contact-detail"><span className="contact-detail-icon"><MessageCircle size={18} aria-hidden="true" /></span><div><span className="contact-label">WhatsApp</span><strong>{business.whatsappDisplay}</strong><a href={business.whatsappHref} target={business.whatsappNumber ? "_blank" : undefined} rel={business.whatsappNumber ? "noreferrer" : undefined}>Start a conversation <ArrowRight size={13} aria-hidden="true" /></a></div></div>
            <div className="contact-detail"><span className="contact-detail-icon"><Clock3 size={18} aria-hidden="true" /></span><div><span className="contact-label">Opening hours</span><strong>{business.hoursDisplay}</strong><span>{business.hours}</span></div></div>
            <div className="map-placeholder" role="img" aria-label="Map location placeholder for Gumede Hardware in Mzuzu, Malawi"><span className="map-pin"><MapPin size={20} aria-hidden="true" /></span><span className="map-location">Mzuzu, Malawi</span><span className="map-note">Map embed to be added when the exact address is confirmed</span></div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-heading"><h3>Send an enquiry</h3><p>Fields marked with <span aria-hidden="true">*</span> are required.</p></div>
            <div className="form-row"><div className="form-field"><label htmlFor="name">Your name <span aria-hidden="true">*</span></label><input id="name" name="name" autoComplete="name" required maxLength={80} placeholder="Name" /></div><div className="form-field"><label htmlFor="phone">Phone number</label><input id="phone" name="phone" type="tel" autoComplete="tel" maxLength={30} placeholder="e.g. +265 …" /></div></div>
            <div className="form-field"><label htmlFor="email">Email address <span aria-hidden="true">*</span></label><input id="email" name="email" type="email" autoComplete="email" required maxLength={120} placeholder="you@example.com" /></div>
            <div className="form-field"><label htmlFor="enquiry-type">What can we help with? <span aria-hidden="true">*</span></label><select id="enquiry-type" name="enquiryType" required defaultValue=""><option value="" disabled>Select an enquiry type</option><option>Product availability</option><option>Price request</option><option>Quotation</option><option>General information</option></select></div>
            <div className="form-field"><label htmlFor="message">Your message <span aria-hidden="true">*</span></label><textarea id="message" name="message" required minLength={8} maxLength={1200} rows={4} placeholder="Tell us what you’re looking for…" /></div>
            <button className="button button-green form-submit" type="submit" disabled={status === "loading"}>{status === "loading" ? "Preparing…" : "Send enquiry"}{status === "loading" ? <Send className="loading-icon" size={16} aria-hidden="true" /> : <ArrowRight size={16} aria-hidden="true" />}</button>
            <p className="form-note" aria-live="polite">{status === "ready" ? <><Check size={15} aria-hidden="true" /> Demo only: your details have not been sent. Contact Gumede Hardware directly to confirm an enquiry.</> : "This demonstration form validates your enquiry locally and is not connected to a messaging service yet."}</p>
          </form>
        </div>
      </div>
    </section>
  );
}