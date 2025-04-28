import { useEffect, useState } from "react";
import { ItemPedido } from "../@types/itemPedido";
import { loadItensPedido } from "../utils/itemPedidoStorage";

function ListaItensPedido() {
  const [itens, setItens] = useState<ItemPedido[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setItens(loadItensPedido());
  }, []);

  const itensFiltrados = search
    ? itens.filter(i => i.pedidoId.toString().includes(search))
    : itens;

  return (
    <div>
      <h2>Itens de Pedido</h2>
      <input
        type="text"
        placeholder="Buscar por ID do pedido..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {itensFiltrados.map(item => (
          <li key={item.id}>
            Pedido #{item.pedidoId} - Produto #{item.produtoId} - Quantidade: {item.quantidade}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaItensPedido;
