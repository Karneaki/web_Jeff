import { useState, useEffect } from "react";
import { Fornecedor } from "../@types/fornecedor";
import {
  saveFornecedor,
  loadFornecedores,
  deleteFornecedor,
} from "../utils/fornecedorStorage";
import CadastroFornecedor from "../components/CadastroFornecedor";
import ListaFornecedores from "../components/ListaFornecedores";

export default function CadastroFornecedorScreen() {
  const [fornecedores, setFornecedores] = useState<Fornecedor[]>([]);

  useEffect(() => {
    const fornecedoresSalvos = loadFornecedores();
    setFornecedores(fornecedoresSalvos);
  }, []);

  const handleFornecedorSubmit = (fornecedor: Fornecedor) => {
    saveFornecedor(fornecedor);
    setFornecedores((prevFornecedores) => [...prevFornecedores, fornecedor]);
  };

  const handleFornecedorDelete = (id: number) => {
    deleteFornecedor(id);
    setFornecedores((prevFornecedores) =>
      prevFornecedores.filter((fornecedor) => fornecedor.id !== id)
    );
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        padding: "20px",
        justifyContent: "space-between",
      }}
    >
      <CadastroFornecedor submit={handleFornecedorSubmit} />
      <ListaFornecedores />
    </div>
  );
}
