import React from "react";
export default function Header(){
  return (
    <header className="site-header">
      <div className="max-w-[1200px] mx-auto px-4 py-2 flex items-center justify-between">
        <a href="#top" className="inline-flex items-center gap-2">
          <img className="brand-img" src="/public/logo/logo-ecowatt.png" alt="Ecowatt" />
        </a>
        <nav className="hidden md:flex items-center gap-5 font-semibold text-slate-800">
          <a href="#areas" className="hover:opacity-70">Áreas</a>
          <a href="#partners" className="hover:opacity-70">Alianzas</a>
          <a href="#contacto" className="hover:opacity-70">Contacto</a>
        </nav>
      </div>
    </header>
  );
}