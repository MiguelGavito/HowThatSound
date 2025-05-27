import { useDraggable } from "@dnd-kit/core";
import React from "react";

interface ProductoProps {
  id: string;
  children: React.ReactNode;
}

export const Producto: React.FC<ProductoProps> = ({ id, children }) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({ id });

  const style = {
    transform: transform ? `translate(${transform.x}px, ${transform.y}px)` : undefined,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="border rounded p-2 shadow-md bg-white hover:bg-gray-100 transition-all cursor-grab"
    >
      {children}
    </div>
  );
};