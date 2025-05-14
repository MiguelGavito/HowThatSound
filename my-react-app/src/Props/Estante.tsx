type EstanteProps = {
  productos: string[];
  nombre: string;
};

export const Estante = ({ productos, nombre }: EstanteProps) => {
  return (
    <div className="mb-4">
      <h3 className="text-sm font-bold mb-1">{nombre}</h3>
      <div className="flex gap-2 border p-2 rounded bg-gray-100">
        {productos.map((producto, idx) => (
          <div
            key={idx}
            className="w-24 h-24 bg-white border rounded shadow text-xs flex items-center justify-center text-center"
          >
            {producto}
          </div>
        ))}
      </div>
    </div>
  )
}