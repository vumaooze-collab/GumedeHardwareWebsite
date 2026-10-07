import { ArrowRight, MessageCircle } from "lucide-react";
import { business } from "@/config/business";

export function EnquiryCallout() {
  return (
    <section className="enquiry-callout" aria-labelledby="enquiry-title">
      <div className="page-width enquiry-inner"><div className="enquiry-icon"><MessageCircle size={23} aria-hidden="true" /></div><div className="enquiry-copy"><p className="eyebrow eyebrow-light"><span className="eyebrow-rule" />A quick question is a good start</p><h2 id="enquiry-title">Have a list? <em>Let’s talk.</em></h2><p>Check availability, request a price or ask us to prepare a quotation.</p></div><a className="button button-orange" href={business.whatsappHref} target={business.whatsappNumber ? "_blank" : undefined} rel={business.whatsappNumber ? "noreferrer" : undefined}>Start an enquiry <ArrowRight size={17} aria-hidden="true" /></a></div>
    </section>
  );
}