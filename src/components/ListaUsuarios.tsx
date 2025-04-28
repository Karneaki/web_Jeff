import { useEffect, useState } from "react";
import { Usuario } from "../@types/usuario";
import { loadUsuarios } from "../utils/usuarioStorage";
import { searchByName } from "../utils/storage";

function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setUsuarios(loadUsuarios());
  }, []);

  const usuariosFiltrados = search ? searchByName(usuarios, search) : usuarios;

  return (
    <div>
      <h2>Usuários</h2>
      <input
        type="text"
        placeholder="Buscar usuário pelo nome..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {usuariosFiltrados.map((usuario) => (
          <li key={usuario.id}>
            {usuario.nome} - {usuario.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaUsuarios;
