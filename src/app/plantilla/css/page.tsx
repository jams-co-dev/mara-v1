"use client";
import React, { useEffect, useState } from "react";

export default function PlantillaCssPage() {
  const [cssContent, setCssContent] = useState<string>("");

  useEffect(() => {
    fetch("/plantilla/plantilla-estilos-validacion.css")
      .then((res) => res.text())
      .then((text) => setCssContent(text))
      .catch(() => setCssContent("No se pudo cargar el archivo CSS."));
  }, []);

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-4 text-center">Vista Previa del CSS de la Plantilla</h1>
      <div className="bg-black rounded border border-gray-800 p-4 overflow-auto">
        <pre className="whitespace-pre-wrap text-sm font-mono text-green-200">
          <code>{cssContent}</code>
        </pre>
      </div>
    </main>
  );
}
