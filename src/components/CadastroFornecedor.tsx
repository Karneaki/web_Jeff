import { useState } from "react";
import { Fornecedor } from "../@types/fornecedor";
import {
  saveFornecedor,
  updateFornecedor,
} from "../utils/fornecedorStorage";
import CustomInput from "../components/CustomInput";

const FormularioFornecedor = ({
  fornecedor,
  submit,
}: {
  fornecedor?: Fornecedor;
  submit: (fornecedor: Fornecedor) => void;
}) => {
  const [nome, setNome] = useState(fornecedor?.nome || "");
  const [cnpj, setCnpj] = useState(fornecedor?.cnpj || "");
  const [contato, setContato] = useState(fornecedor?.contato || "");
  const [endereco, setEndereco] = useState(fornecedor?.endereco || "");

  const handleSubmit = () => {
    const newFornecedor: Fornecedor = {
      id: fornecedor ? fornecedor.id : 0,
      nome,
      cnpj,
      contato,
      endereco,
    };

    if (fornecedor?.id === 0) {
      saveFornecedor(newFornecedor);
      alert("Fornecedor adicionado com sucesso!");
    } else {
      updateFornecedor(newFornecedor);
      alert("Fornecedor atualizado com sucesso!");
    }

    submit(newFornecedor);
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
        label="CNPJ"
        value={cnpj}
        onChange={setCnpj}
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
        {fornecedor ? "Atualizar Fornecedor" : "Adicionar Fornecedor"}
      </button>
    </div>
  );
};

export default FormularioFornecedor;
