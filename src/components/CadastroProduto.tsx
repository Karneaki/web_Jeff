import { useState } from "react";
import { Produto } from "../@types/produto";
import { saveProduto, updateProduto } from "../utils/produtoStorage";
import CustomInput from "../components/CustomInput";

const FormularioProduto = ({ produto, submit }: { produto?: Produto, submit: (produto: Produto) => void }) => {
  const [nome, setNome] = useState(produto?.nome || "");
  const [descricao, setDescricao] = useState(produto?.descricao || "");
  const [preco, setPreco] = useState(produto?.preco || 0);
  const [quantidade, setQuantidade] = useState(produto?.quantidade || 0);
  const [imagem, setImagem] = useState(produto?.imagem || "");
  const [fornecedorId, setFornecedorId] = useState(produto?.fornecedorId || 0);

  const handleSubmit = () => {
    const newProduto: Produto = {
      id: produto ? produto.id : 0,
      nome,
      descricao,
      preco,
      quantidade,
      imagem,
      fornecedorId,
    };

    if (produto?.id === 0) {
      saveProduto(newProduto);
      alert("Produto adicionado com sucesso!");
    } else {
      updateProduto(newProduto);
      alert("Produto atualizado com sucesso!");
    }

    submit(newProduto);
  };

  return (
    <div>
      <CustomInput label="Nome" value={nome} onChange={setNome} inputType="text" />
      <CustomInput label="Descrição" value={descricao} onChange={setDescricao} inputType="text" />
      <CustomInput label="Preço" value={String(preco)} onChange={(val) => setPreco(Number(val))} inputType="number" />
      <CustomInput label="Quantidade" value={String(quantidade)} onChange={(val) => setQuantidade(Number(val))} inputType="number" />
      <CustomInput label="Imagem (URL)" value={imagem} onChange={setImagem} inputType="text" />
      <CustomInput label="ID do Fornecedor" value={String(fornecedorId)} onChange={(val) => setFornecedorId(Number(val))} inputType="number" />
      <button type="button" onClick={handleSubmit}>
        {produto ? "Atualizar Produto" : "Adicionar Produto"}
      </button>
    </div>
  );
};

export default FormularioProduto;
