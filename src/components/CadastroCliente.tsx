import { useState } from "react";
import { Cliente } from "../@types/cliente";
import { saveCliente, updateCliente } from "../utils/clienteStorage";
import CustomInput from "../components/CustomInput";

const FormularioCliente = ({
  cliente,
  submit,
}: {
  cliente?: Cliente;
  submit: (cliente: Cliente) => void;
}) => {
  const [nome, setNome] = useState(cliente?.nome || "");
  const [cpfCnpj, setCpfCnpj] = useState(cliente?.cpf_cnpj || "");
  const [contato, setContato] = useState(cliente?.contato || "");
  const [endereco, setEndereco] = useState(cliente?.endereco || "");

  const handleSubmit = () => {
    const newCliente: Cliente = {
      id: cliente ? cliente.id : 0,
      nome,
      cpf_cnpj: cpfCnpj,
      contato,
      endereco,
    };

    if (cliente?.id === 0) {
      saveCliente(newCliente);
      alert("Cliente adicionado com sucesso!");
    } else {
      updateCliente(newCliente);
      alert("Cliente atualizado com sucesso!");
    }

    submit(newCliente);
  };

  return (
    <div>
      <CustomInput
        label="Nome"
        value={nome}
        onChange={setNome}
        inputType="text"
      />
      <CustomInput
        label="CPF/CNPJ"
        value={cpfCnpj}
        onChange={setCpfCnpj}
        inputType="text"
      />
      <CustomInput
        label="Contato"
        value={contato}
        onChange={setContato}
        inputType="text"
      />
      <CustomInput
        label="Endereço"
        value={endereco}
        onChange={setEndereco}
        inputType="text"
      />
      <button type="button" onClick={handleSubmit}>
        {cliente ? "Atualizar Cliente" : "Adicionar Cliente"}
      </button>
    </div>
  );
};

export default FormularioCliente;
