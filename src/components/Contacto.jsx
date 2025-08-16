import React from "react";
export default function Contacto(){
  return (
    <section id="contacto" className="contact">
      <div className="max-w-[1200px] mx-auto px-4 contact-grid">
        <div>
          <h2 className="text-2xl font-extrabold mb-2">Contacto</h2>
          <p className="text-slate-600">¿Querés conversar un proyecto o conocer más sobre nuestras soluciones?</p>
          <ul className="mt-3 space-y-1 text-slate-700">
            <li><strong>Correo:</strong> <a className="text-emerald-700 underline" href="mailto:info@ecowatt.com">info@ecowatt.com</a></li>
            <li><strong>Teléfono:</strong> +54 9 11 6047 0663</li>
            <li><strong>Dirección:</strong> Completar dirección</li>
            <li><strong>LinkedIn:</strong> <a className="text-emerald-700 underline" href="#" target="_blank" rel="noopener">[link]</a></li>
          </ul>
        </div>
        <div className="card">
          <form name="contact" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <label className="block mb-2">Nombre<input className="w-full border rounded-lg p-2 mt-1" type="text" name="nombre" required /></label>
            <label className="block mb-2">Email<input className="w-full border rounded-lg p-2 mt-1" type="email" name="email" required /></label>
            <label className="block mb-3">Mensaje<textarea className="w-full border rounded-lg p-2 mt-1" rows="4" name="mensaje" required></textarea></label>
            <button className="inline-flex items-center bg-emerald-600 text-white font-bold px-4 py-2 rounded-full" type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </section>
  );
}