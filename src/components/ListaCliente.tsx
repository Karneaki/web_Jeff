import { useEffect, useState } from "react";
import { Cliente } from "../@types/cliente";
import { loadClientes } from "../utils/clienteStorage";
import { searchByName } from "../utils/storage";

function ListaClientes() {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setClientes(loadClientes());
  }, []);

  const clientesFiltrados = search ? searchByName(clientes, search) : clientes;

  return (
    <div>
      <h2>Clientes</h2>
      <input
        type="text"
        placeholder="Buscar cliente pelo nome..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {clientesFiltrados.map((cliente) => (
          <li key={cliente.id}>
            {cliente.nome} - {cliente.cpf_cnpj}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaClientes;
