import { useEffect, useState } from "react";
import { Transacao } from "../@types/transacao";
import { loadTransacoes } from "../utils/transacaoSotrage";

function ListaTransacoes() {
  const [transacoes, setTransacoes] = useState<Transacao[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setTransacoes(loadTransacoes());
  }, []);

  const transacoesFiltradas = search
    ? transacoes.filter((t) =>
        t.tipo.toLowerCase().includes(search.toLowerCase())
      )
    : transacoes;

  return (
    <div>
      <h2>Transações</h2>
      <input
        type="text"
        placeholder="Buscar por tipo de transação..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {transacoesFiltradas.map((transacao) => (
          <li key={transacao.id}>
            {transacao.tipo} - Valor: R$ {transacao.valor}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaTransacoes;
