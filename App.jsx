
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const App = () => {
  const [amigas, setAmigas] = useState([
    { nombre: "Luna", aura: 3400, emoji: "🔵", estado: "Rota, pero elegante" },
    { nombre: "Paula", aura: 7100, emoji: "🌸", estado: "En su era bruja buena" },
    { nombre: "Cris", aura: -800, emoji: "🦷", estado: "Aura KO desde junio" },
    { nombre: "Naia", aura: 1200, emoji: "🧃", estado: "Le han drenado el aura" },
  ]);

  const [editIndex, setEditIndex] = useState(null);
  const [editForm, setEditForm] = useState({ nombre: "", aura: 0, emoji: "", estado: "" });

  const cambiarAura = (index, cantidad) => {
    const nuevas = [...amigas];
    nuevas[index].aura += cantidad;
    setAmigas(nuevas);
  };

  const abrirEditor = (index) => {
    setEditIndex(index);
    setEditForm(amigas[index]);
  };

  const guardarCambios = () => {
    const nuevas = [...amigas];
    nuevas[editIndex] = editForm;
    setAmigas(nuevas);
    setEditIndex(null);
  };

  return (
    <div className="p-4 bg-green-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-green-800 mb-6">
        🌿 Mi Aura Está Rota 🌿
      </h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {amigas.map((amiga, i) => (
          <Card key={i} className="bg-green-200 shadow-xl rounded-2xl">
            <CardContent className="p-4">
              {editIndex === i ? (
                <div className="space-y-2">
                  <Input
                    value={editForm.nombre}
                    onChange={(e) => setEditForm({ ...editForm, nombre: e.target.value })}
                    placeholder="Nombre"
                  />
                  <Input
                    value={editForm.emoji}
                    onChange={(e) => setEditForm({ ...editForm, emoji: e.target.value })}
                    placeholder="Emoji"
                  />
                  <Input
                    type="number"
                    value={editForm.aura}
                    onChange={(e) => setEditForm({ ...editForm, aura: parseInt(e.target.value) })}
                    placeholder="Aura"
                  />
                  <Input
                    value={editForm.estado}
                    onChange={(e) => setEditForm({ ...editForm, estado: e.target.value })}
                    placeholder="Estado"
                  />
                  <div className="flex gap-2">
                    <Button onClick={guardarCambios}>💾 Guardar</Button>
                    <Button variant="outline" onClick={() => setEditIndex(null)}>❌ Cancelar</Button>
                  </div>
                </div>
              ) : (
                <>
                  <p className="text-2xl">{amiga.emoji} {amiga.nombre}</p>
                  <p className="text-xl">Aura: {amiga.aura}</p>
                  <p className="italic">{amiga.estado}</p>
                  <div className="flex gap-2 mt-2">
                    <Button onClick={() => cambiarAura(i, +100)}>+100</Button>
                    <Button onClick={() => cambiarAura(i, -100)}>-100</Button>
                    <Button variant="outline" onClick={() => abrirEditor(i)}>✏️ Editar</Button>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default App;
