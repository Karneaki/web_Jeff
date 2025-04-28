import { useState, useEffect } from "react";
import { Produto } from "../@types/produto";
import { saveProduto, loadProdutos, deleteProduto } from "../utils/produtoStorage";

// Componente de Listagem de Produtos
const ListaProdutos = ({ produtos, onDelete }: { produtos: Produto[]; onDelete: (id: number) => void }) => {
  return (
    <div style={{ flex: 1, marginLeft: "20px", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h2>Lista de Produtos</h2>
      <ul style={{ listStyleType: "none", padding: "0" }}>
        {produtos.map((produto) => (
          <li key={produto.id} style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
            <span>{produto.nome}</span>
            <span>{produto.quantidade}</span>
            <button
              onClick={() => onDelete(produto.id)}
              style={{
                backgroundColor: "#f44336",
                color: "#fff",
                padding: "5px",
                border: "none",
                borderRadius: "5px",
              }}
            >
              Deletar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Componente de Formulário de Produto
const FormularioProduto = ({ onSubmit }: { onSubmit: (produto: Produto) => void }) => {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState<number>(0);
  const [quantidade, setQuantidade] = useState<number>(0);
  const [imagem, setImagem] = useState("");
  const [fornecedorId, setFornecedorId] = useState<number>(0);

  const handleSubmit = () => {
    const produto: Produto = {
      id: Date.now(), // Gerar ID único com timestamp
      nome,
      descricao,
      preco,
      quantidade,
      imagem,
      fornecedorId,
    };

    onSubmit(produto);

    // Limpar os campos após submissão
    setNome("");
    setDescricao("");
    setPreco(0);
    setQuantidade(0);
    setImagem("");
    setFornecedorId(0);
  };

  return (
    <div style={{ flex: 1, padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h2>Cadastro de Produto</h2>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          style={{ padding: "10px", width: "100%", marginBottom: "10px" }}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          style={{ padding: "10px", width: "100%", marginBottom: "10px" }}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="number"
          placeholder="Preço"
          value={preco}
          onChange={(e) => setPreco(Number(e.target.value))}
          style={{ padding: "10px", width: "100%", marginBottom: "10px" }}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="number"
          placeholder="Quantidade"
          value={quantidade}
          onChange={(e) => setQuantidade(Number(e.target.value))}
          style={{ padding: "10px", width: "100%", marginBottom: "10px" }}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Imagem (URL)"
          value={imagem}
          onChange={(e) => setImagem(e.target.value)}
          style={{ padding: "10px", width: "100%", marginBottom: "10px" }}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="number"
          placeholder="ID do Fornecedor"
          value={fornecedorId}
          onChange={(e) => setFornecedorId(Number(e.target.value))}
          style={{ padding: "10px", width: "100%", marginBottom: "10px" }}
        />
      </div>
      <button
        onClick={handleSubmit}
        style={{
          backgroundColor: "#4CAF50",
          color: "#fff",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Salvar Produto
      </button>
    </div>
  );
};

export default function CadastroProdutoScreen() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  // Carregar produtos do localStorage
  useEffect(() => {
    const produtosSalvos = loadProdutos();
    setProdutos(produtosSalvos);
  }, []);

  const handleProdutoSubmit = (produto: Produto) => {
    // Salvar o produto no localStorage
    saveProduto(produto);

    // Atualizar a lista de produtos
    setProdutos((prevProdutos) => [...prevProdutos, produto]);
  };

  const handleProdutoDelete = (id: number) => {
    // Deletar o produto
    deleteProduto(id);

    // Atualizar a lista de produtos
    setProdutos((prevProdutos) => prevProdutos.filter((produto) => produto.id !== id));
  };

  return (
    <div style={{ display: "flex", flexDirection: "row", padding: "20px", justifyContent: "space-between" }}>
      {/* Formulário de Produto */}
      <FormularioProduto onSubmit={handleProdutoSubmit} />

      {/* Listagem de Produtos */}
      <ListaProdutos produtos={produtos} onDelete={handleProdutoDelete} />
    </div>
  );
}
