import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
  { number: "01", title: "Home construction", detail: "Start with the essentials for a new home.", image: "photo-1600585154340-be6161a56a0c", alt: "A home under construction" },
  { number: "02", title: "Renovation", detail: "Refresh a room, repair a roof or update a finish.", image: "photo-1600607687939-ce8a6c25118c", alt: "Home renovation work in progress" },
  { number: "03", title: "Professional builds", detail: "Source materials for the next phase on site.", image: "photo-1504307651254-35680f356dfd", alt: "Construction workers on a building site" },
  { number: "04", title: "Maintenance", detail: "Keep everyday repairs moving with practical supplies.", image: "photo-1581092921461-eab62e97a780", alt: "Tools prepared for a maintenance task" },
];

export function ProjectTypes() {
  return (
    <section className="projects-section section-pad" aria-labelledby="projects-title">
      <div className="page-width">
        <div className="section-heading section-heading-row"><div><p className="eyebrow"><span className="eyebrow-rule" />For the work you do</p><h2 id="projects-title">One project at a <em>time.</em></h2></div><a className="text-link" href="#contact">Tell us what you’re planning <ArrowUpRight size={15} aria-hidden="true" /></a></div>
        <div className="project-grid">{projects.map((project) => <article className="project-item" key={project.number}><div className="project-image"><Image src={`https://images.unsplash.com/${project.image}?auto=format&fit=crop&w=900&q=82`} alt={project.alt} fill sizes="(max-width: 640px) 85vw, (max-width: 1000px) 44vw, 22vw" /></div><div className="project-label"><span>{project.number}</span><div><h3>{project.title}</h3><p>{project.detail}</p></div></div></article>)}</div>
      </div>
    </section>
  );
}