import { useEffect, useState } from "react";
import { Pedido } from "../@types/pedido";
import { loadPedidos } from "../utils/pedidoStorage";

function ListaPedidos() {
  const [pedidos, setPedidos] = useState<Pedido[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setPedidos(loadPedidos());
  }, []);

  const pedidosFiltrados = search
    ? pedidos.filter((p) =>
        p.status.toLowerCase().includes(search.toLowerCase())
      )
    : pedidos;

  return (
    <div>
      <h2>Pedidos</h2>
      <input
        type="text"
        placeholder="Buscar pedido por status..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {pedidosFiltrados.map((pedido) => (
          <li key={pedido.id}>
            Pedido #{pedido.id} - {pedido.status} - Total: R$ {pedido.total}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaPedidos;
