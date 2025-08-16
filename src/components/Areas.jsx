import React from "react";

const AREAS = [
  { slug:"aguas", title:"Aguas", desc:"Soluciones para captación, potabilización y reúso de agua. Estudios, ingeniería y operación con foco en eficiencia y calidad de suministro.", galleryBg:"blue" },
  { slug:"efluentes-urbanos", title:"Efluentes urbanos", desc:"Diseño y operación de plantas de tratamiento municipal. Cumplimiento normativo, estabilidad de procesos y sostenibilidad.", galleryBg:"white", reverse:true },
  { slug:"efluentes-industriales-bioenergia", title:"Efluentes industriales y bioenergía", desc:"Tratamiento integral de efluentes industriales y valorización mediante biogás. Reducción de cargas, recuperación y uso eficiente.", galleryBg:"green" },
  { slug:"aire-gases", title:"Aire y gases", desc:"Abatimiento de olores y emisiones. Monitoreo y cumplimiento normativo con tecnologías apropiadas.", galleryBg:"white", reverse:true },
  { slug:"equipos", title:"Equipamiento electromecánico", desc:"Provisión e integración de equipos. Puesta en marcha, servicio y repuestos para operación eficiente.", galleryBg:"blue" },
];

const Gallery = ({slug, bg}) => {
  const bgClass = bg === "blue" ? "bg-photos-blue" : bg === "green" ? "bg-photos-green" : "bg-photos-white";
  const imgs = [1,2,3,4].map(n => `/src/assets/img/areas/${slug}/${n}.jpg`);
  return (
    <div className={"gallery " + bgClass}>
      {imgs.map((src, i) => <button key={i} className="photov" style={{"--bg":`url(${src})`}} data-img={src}></button>)}
    </div>
  );
};

export default function Areas(){
  return (
    <section id="areas">
      {AREAS.map((a, idx) => (
        <article key={a.slug} className="area-row">
          <div className={"max-w-[1200px] mx-auto px-4 area-grid " + (a.reverse ? "reverse": "")}>
            <div className="text text-card">
              <h3 className="text-2xl font-extrabold mb-2">{a.title}</h3>
              <p className="text-slate-600">{a.desc}</p>
              <ul className="list-disc ml-5 mt-2 text-slate-600 space-y-1">
                <li>Ingeniería y optimización de procesos.</li>
                <li>Operación asistida y mejoras de desempeño.</li>
                <li>Calidad de salida, reúso y eficiencia.</li>
              </ul>
            </div>
            <Gallery slug={a.slug} bg={a.galleryBg} />
          </div>
        </article>
      ))}
    </section>
  );
}