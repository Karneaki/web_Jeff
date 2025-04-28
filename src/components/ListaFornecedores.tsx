import { useEffect, useState } from "react";
import { Fornecedor } from "../@types/fornecedor";
import { loadFornecedores } from "../utils/fornecedorStorage";
import { searchByName } from "../utils/storage";

function ListaFornecedores() {
  const [fornecedores, setFornecedores] = useState<Fornecedor[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setFornecedores(loadFornecedores());
  }, []);

  const fornecedoresFiltrados = search
    ? searchByName(fornecedores, search)
    : fornecedores;

  return (
    <div>
      <h2>Fornecedores</h2>
      <input
        type="text"
        placeholder="Buscar fornecedor pelo nome..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {fornecedoresFiltrados.map((fornecedor) => (
          <li key={fornecedor.id}>
            {fornecedor.nome} - {fornecedor.cnpj}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaFornecedores;
