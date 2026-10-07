const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") ?? "";

export const business = {
  name: "Gumede Hardware",
  location: "Mzuzu, Malawi",
  phone: process.env.NEXT_PUBLIC_BUSINESS_PHONE ?? "",
  phoneDisplay: process.env.NEXT_PUBLIC_BUSINESS_PHONE || "Phone number to be added",
  whatsappNumber,
  whatsappHref: whatsappNumber ? `https://wa.me/${whatsappNumber}` : "#contact",
  whatsappDisplay: whatsappNumber ? "Chat with our team" : "WhatsApp number to be added",
  address: "Mzuzu, Malawi",
  hoursDisplay: "Hours to be confirmed",
  hours: "Please contact us to confirm current hours.",
  navigation: [
    { label: "Products", href: "#products" },
    { label: "Categories", href: "#categories" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
} as const;