import React, { useEffect } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Partners from "./components/Partners.jsx";
import Areas from "./components/Areas.jsx";
import Contacto from "./components/Contacto.jsx";
import Footer from "./components/Footer.jsx";

export default function App(){
  useEffect(()=>{
    // Lightbox simple para las galerías
    const lb = document.createElement('div');
    lb.className = 'fixed inset-0 bg-black/80 hidden place-items-center z-50';
    lb.innerHTML = '<button class="absolute top-4 right-4 bg-white rounded-full w-10 h-10 text-2xl font-bold">×</button><img class="max-w-[92vw] max-h-[85vh] rounded-xl shadow-2xl" />';
    document.body.appendChild(lb);
    const img = lb.querySelector('img');
    const close = ()=>{ lb.classList.add('hidden'); document.body.style.overflow=''; };
    lb.addEventListener('click', (e)=>{ if(e.target===lb || e.target.tagName==='BUTTON') close(); });
    document.addEventListener('click', (e)=>{
      const btn = e.target.closest('.photov');
      if(btn){
        img.src = btn.getAttribute('data-img');
        lb.classList.remove('hidden');
        document.body.style.overflow='hidden';
      }
    });
    return ()=> lb.remove();
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Partners />
      <Areas />
      <Contacto />
      <Footer />
    </>
  );
}