import { useState } from "react";
import { Pedido } from "../@types/pedido";
import { savePedido, updatePedido } from "../utils/pedidoStorage";
import CustomInput from "../components/CustomInput";

const FormularioPedido = ({
  pedido,
  submit,
}: {
  pedido?: Pedido;
  submit: (pedido: Pedido) => void;
}) => {
  // Converte a data de string para Date (se for passado no formato correto)
  const [data, setData] = useState<string>(
    pedido?.data.toISOString().split("T")[0] || ""
  );
  const [clienteId, setClienteId] = useState<number>(pedido?.clienteId || 0);
  const [status, setStatus] = useState<"Concluído" | "Cancelado" | "Pendente">(
    pedido?.status || "Pendente"
  );
  const [total, setTotal] = useState<number>(pedido?.total || 0);

  const handleSubmit = () => {
    const newPedido: Pedido = {
      id: pedido ? pedido.id : 0,
      data: new Date(data), // Converte para Date antes de enviar
      clienteId,
      status,
      total,
    };

    if (pedido?.id === 0) {
      savePedido(newPedido);
      alert("Pedido registrado com sucesso!");
    } else {
      updatePedido(newPedido);
      alert("Pedido atualizado com sucesso!");
    }

    submit(newPedido);
  };

  return (
    <div>
      <CustomInput
        label="Data"
        value={data}
        onChange={setData}
        inputType="date" // Aqui é melhor usar o input tipo date
      />
      <CustomInput
        label="Cliente ID"
        value={String(clienteId)}
        onChange={(val) => setClienteId(Number(val))}
        inputType="number"
      />
      <div>
        <label>status</label>
        <select
          value={status}
          onChange={(e) =>
            setStatus(e.target.value as "Concluído" | "Pendente" | "Cancelado")
          }
        >
          <option value="Entrada">Entrada</option>
          <option value="Saída">Saída</option>
        </select>
      </div>
      <CustomInput
        label="Total"
        value={String(total)}
        onChange={(val) => setTotal(Number(val))}
        inputType="number"
      />
      <button type="button" onClick={handleSubmit}>
        {pedido ? "Atualizar Pedido" : "Adicionar Pedido"}
      </button>
    </div>
  );
};

export default FormularioPedido;
