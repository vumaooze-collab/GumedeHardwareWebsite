import { MessageCircle } from "lucide-react";
import { business } from "@/config/business";

export function WhatsAppButton() {
  return <a className="whatsapp-float" href={business.whatsappHref} target={business.whatsappNumber ? "_blank" : undefined} rel={business.whatsappNumber ? "noreferrer" : undefined} aria-label="Contact Gumede Hardware on WhatsApp"><MessageCircle size={22} aria-hidden="true" /><span>Chat with us</span></a>;
}