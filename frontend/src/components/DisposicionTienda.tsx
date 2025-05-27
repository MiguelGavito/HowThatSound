import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { useState } from "react";
import { Estante } from "./Estante";
import { Producto } from "./Producto";

export const DisposicionTienda = () => {
  const [layout, setLayout] = useState({
    estanteA: ["Pan", "Cereal"],
    estanteB: ["Leche", "Yogurt"],
  });

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const fromKey = Object.keys(layout).find((k) => layout[k as keyof typeof layout].includes(active.id as string)) as keyof typeof layout;
    const toKey = over.id as keyof typeof layout;

    if (fromKey && toKey && fromKey !== toKey) {
      const fromItems = [...layout[fromKey]];
      const toItems = [...layout[toKey]];
      const index = fromItems.indexOf(active.id as string);

      fromItems.splice(index, 1);
      toItems.push(active.id as string);

      setLayout({
        ...layout,
        [fromKey]: fromItems,
        [toKey]: toItems,
      });
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="p-6 space-y-6">
        {Object.entries(layout).map(([key, productos]) => (
          <div key={key}>
            <h2 className="font-bold mb-2">{key}</h2>
            <Estante id={key}>
              {productos.map((producto) => (
                <Producto key={producto} id={producto}>
                  {producto}
                </Producto>
              ))}
            </Estante>
          </div>
        ))}
      </div>
    </DndContext>
  );
};
