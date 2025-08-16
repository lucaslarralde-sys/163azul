import React from "react";
export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="max-w-[1200px] mx-auto px-4 footer-inner">
        <span>© {new Date().getFullYear()} Ecowatt. Todos los derechos reservados.</span>
        <a href="#top" className="text-slate-700 hover:underline">Volver arriba</a>
      </div>
    </footer>
  );
}