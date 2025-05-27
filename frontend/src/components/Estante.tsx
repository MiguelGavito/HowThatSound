import { useDroppable } from "@dnd-kit/core";
import React from "react";

interface EstanteProps {
  id: string;
  children: React.ReactNode;
}

export const Estante: React.FC<EstanteProps> = ({ id, children }) => {
  const { setNodeRef, isOver } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      className={`p-4 border rounded min-h-[6rem] flex gap-2 flex-wrap transition-colors ${
        isOver ? "bg-blue-100" : "bg-gray-100"
      }`}
    >
      {children}
    </div>
  );
};
