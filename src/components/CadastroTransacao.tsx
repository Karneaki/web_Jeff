import { useState } from "react";
import { Transacao } from "../@types/transacao";
import { saveTransacao, updateTransacao } from "../utils/transacaoStorage";
import CustomInput from "../components/CustomInput";

const FormularioTransacao = ({ transacao, submit }: { transacao?: Transacao, submit: (transacao: Transacao) => void }) => {
  const [data, setData] = useState(transacao?.data.toISOString().split('T')[0] || ""); // Inicia com data no formato "yyyy-mm-dd"
  const [tipo, setTipo] = useState<"Entrada" | "Saída">(transacao?.tipo || "Entrada"); // Limita o tipo
  const [valor, setValor] = useState(transacao?.valor || 0);
  const [produtoId, setProdutoId] = useState(transacao?.produtoId || 0);
  const [pedidoId, setPedidoId] = useState(transacao?.pedidoId || 0);

  const handleSubmit = () => {
    const dataFormatada = new Date(data); // Converte string para Date

    if (isNaN(dataFormatada.getTime())) {
      alert("Erro: Data inválida!");
      return;
    }

    const newTransacao: Transacao = {
      id: transacao ? transacao.id : 0,
      data: dataFormatada,
      tipo,
      valor,
      produtoId,
      pedidoId,
    };

    if (transacao?.id === 0) {
      saveTransacao(newTransacao);
      alert("Transação registrada com sucesso!");
    } else {
      updateTransacao(newTransacao);
      alert("Transação atualizada com sucesso!");
    }

    submit(newTransacao);
  };

  return (
    <div>
      <CustomInput label="Data" value={data} onChange={setData} inputType="date" />
      <div>
        <label>Tipo</label>
        <select value={tipo} onChange={(e) => setTipo(e.target.value as "Entrada" | "Saída")}>
          <option value="Entrada">Entrada</option>
          <option value="Saída">Saída</option>
        </select>
      </div>
      <CustomInput label="Valor" value={String(valor)} onChange={(val) => setValor(Number(val))} inputType="number" />
      <CustomInput label="Produto ID" value={String(produtoId)} onChange={(val) => setProdutoId(Number(val))} inputType="number" />
      <CustomInput label="Pedido ID" value={String(pedidoId)} onChange={(val) => setPedidoId(Number(val))} inputType="number" />
      <button type="button" onClick={handleSubmit}>
        {transacao ? "Atualizar Transação" : "Registrar Transação"}
      </button>
    </div>
  );
};

export default FormularioTransacao;
