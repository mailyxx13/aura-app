"use client";

import { useState } from "react";

export default function Page() {
  const [amigas, setAmigas] = useState([
    { nombre: "Luna", aura: 3400, emoji: "🔵", estado: "Rota, pero elegante" },
    { nombre: "Paula", aura: 7100, emoji: "🌸", estado: "En su era bruja buena" },
    { nombre: "Cris", aura: -800, emoji: "🦷", estado: "Aura KO desde junio" },
    { nombre: "Naia", aura: 1200, emoji: "🧃", estado: "Le han drenado el aura" },
  ]);

  const cambiarAura = (i, cant) => {
    const nuevas = [...amigas];
    nuevas[i].aura += cant;
    setAmigas(nuevas);
  };

  return (
    <div className="p-6 bg-green-50 min-h-screen">
      <h1 className="text-3xl text-center font-bold mb-6">🌿 Mi Aura Está Rota</h1>
      {amigas.map((a, i) => (
        <div key={i} className="p-4 bg-white shadow rounded mb-4">
          <div className="text-xl">{a.emoji} {a.nombre}</div>
          <div>Aura: {a.aura}</div>
          <div className="italic text-gray-600">{a.estado}</div>
          <div className="mt-2 flex space-x-2">
            <button onClick={() => cambiarAura(i, +100)} className="px-2 py-1 bg-green-200 rounded">+100</button>
            <button onClick={() => cambiarAura(i, -100)} className="px-2 py-1 bg-red-200 rounded">-100</button>
          </div>
        </div>
      ))}
    </div>
  );
}