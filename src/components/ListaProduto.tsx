import { useEffect, useState } from "react";
import { Produto } from "../@types/produto";
import { loadProdutos } from "../utils/produtoStorage";
import { searchByName } from "../utils/storage";

function ListaProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setProdutos(loadProdutos());
  }, []);

  const produtosFiltrados = search ? searchByName(produtos, search) : produtos;

  return (
    <div>
      <h2>Produtos</h2>
      <input
        type="text"
        placeholder="Buscar produto pelo nome..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {produtosFiltrados.map((produto) => (
          <li key={produto.id}>
            {produto.nome} - R$ {produto.preco}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaProdutos;
