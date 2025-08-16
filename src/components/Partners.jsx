import React from "react";
export default function Partners(){
  return (
    <section id="partners" className="partners-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-xl font-extrabold">Alianzas estratégicas</h2>
        <ul className="partners-logos flex flex-wrap items-center justify-center gap-10 mt-6">
          <li><a href="https://www.fuchswater.com/es/" target="_blank" rel="noopener"><img src="/src/assets/img/logos/FUCHS.png" alt="FUCHS" /></a></li>
          <li><a href="https://aqana.com/" target="_blank" rel="noopener"><img src="/src/assets/img/logos/aqana.png" alt="AQANA" /></a></li>
          <li><a href="https://dagaequipment.com/es/" target="_blank" rel="noopener"><img src="/src/assets/img/logos/daga.png" alt="DAGA" /></a></li>
          <li><a href="https://2gservicos.com/" target="_blank" rel="noopener"><img src="/src/assets/img/logos/2g.png" alt="2G" /></a></li>
          <li><a href="https://aircleansrl.com/" target="_blank" rel="noopener"><img src="/src/assets/img/logos/airclean.png" alt="AirClean" /></a></li>
        </ul>
      </div>
    </section>
  );
}