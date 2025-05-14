import { Estante } from "./../Props/Estante";

export const DisposicionTienda = () => {
  const layout = [
    { nombre: "Estante A", productos: ["Pan", "Cereal", "Galletas"] },
    { nombre: "Estante B", productos: ["Leche", "Yogurt", "Queso"] },
    { nombre: "Estante C", productos: ["Jabón", "Shampoo", "Toalla"] },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2x1 font-bold mb-6">Simulador de Disposicion</h1>
      <div className="grid gap-4">
        {layout.map((estante, i) => (
          <Estante key={i} nombre={estante.nombre} productos={estante.productos} /> 
        ))}
      </div>
    </div>
  );
  
};
