import React from "react";

export default function PlantillaPage() {
  return (
    <div style={{height: '100vh', width: '100vw', background: '#f7fafc'}}>
      <h1 style={{margin: '2rem 0 1rem 0', textAlign: 'center'}}>Vista Previa de la Plantilla de Estilos</h1>
      <iframe
        src="/plantilla/plantilla-estilos-validacion.html"
        title="Plantilla de Estilos"
        style={{width: '100%', height: '90vh', border: 'none', borderRadius: '8px', boxShadow: '0 2px 8px #0001'}}
      />
    </div>
  );
}
