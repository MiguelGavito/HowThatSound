import { useDroppable } from "@dnd-kit/core";

export const Estante = ({ id, children }: { id: string; children: React.ReactNode }) => {
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
