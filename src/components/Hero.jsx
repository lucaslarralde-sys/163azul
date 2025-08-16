import React from "react";
export default function Hero(){
  return (
    <section id="top" className="hero">
      <video autoPlay muted loop playsInline poster="/public/img/hero-poster.jpg">
        <source src="/public/video/hero.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay"></div>
      <div className="max-w-[1200px] mx-auto px-4 hero-content">
        <p className="tracking-widest uppercase text-sm text-teal-200 mb-2">TRATAMIENTO DE AGUAS Y EFLUENTES</p>
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-3">
          Soluciones integrales con foco en desempeño ambiental
        </h1>
        <p className="max-w-[60ch] opacity-95 mb-4">
          Diseño, operación y optimización de plantas. Reúso y eficiencia de recursos.
        </p>
        <div className="flex gap-3">
          <a href="#areas" className="inline-flex items-center font-bold rounded-full bg-emerald-600 text-white px-4 py-2">Conocer áreas</a>
          <a href="#contacto" className="inline-flex items-center font-bold rounded-full border-2 border-white text-white px-4 py-2">Contactar</a>
        </div>
      </div>
    </section>
  );
}