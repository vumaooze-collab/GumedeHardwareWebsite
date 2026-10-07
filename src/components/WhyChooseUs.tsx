import { BadgeCheck, HandCoins, Headset, ShoppingBasket } from "lucide-react";

const reasons = [
  { icon: BadgeCheck, title: "A considered range", text: "Building materials, finishing supplies and everyday hardware in one place." },
  { icon: HandCoins, title: "Know your options", text: "Ask our team for current prices and available options for your project." },
  { icon: Headset, title: "Helpful conversations", text: "Talk through what you need and get clear answers before you buy." },
  { icon: ShoppingBasket, title: "Simple to enquire", text: "Share a product name or materials list to ask about availability." },
];

export function WhyChooseUs() {
  return (
    <section className="reasons-section section-pad" aria-labelledby="reasons-title">
      <div className="page-width">
        <div className="reasons-header"><p className="eyebrow eyebrow-light"><span className="eyebrow-rule" />A good place to begin</p><h2 id="reasons-title">Good materials.<br /><em>Good people.</em></h2><p>Every project is different. We make it straightforward to find supplies and get the information you need.</p></div>
        <div className="reason-grid">{reasons.map(({ icon: Icon, title, text }, index) => <article className="reason-item" key={title}><span className="reason-number">0{index + 1}</span><Icon size={22} strokeWidth={1.6} aria-hidden="true" /><h3>{title}</h3><p>{text}</p></article>)}</div>
      </div>
    </section>
  );
}