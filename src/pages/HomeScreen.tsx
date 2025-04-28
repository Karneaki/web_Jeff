import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Bem-vindo ao Sistema de Gestão</h1>
      <p>Escolha uma das opções abaixo para gerenciar os dados.</p>
      <div style={{ marginTop: "20px" }}>
        <div>
          <Link
            to="/cadastro-pessoa"
            style={{
              display: "inline-block",
              margin: "10px",
              padding: "10px 20px",
              backgroundColor: "#007BFF",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "5px",
            }}
          >
            Cadastro de Pessoa
          </Link>
          <Link
            to="/cadastro-fornecedor"
            style={{
              display: "inline-block",
              margin: "10px",
              padding: "10px 20px",
              backgroundColor: "#28A745",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "5px",
            }}
          >
            Cadastro de Fornecedor
          </Link>
        </div>
        <div>
          <Link
            to="/cadastro-transacao"
            style={{
              display: "inline-block",
              margin: "10px",
              padding: "10px 20px",
              backgroundColor: "#FFC107",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "5px",
            }}
          >
            Cadastro de Transação
          </Link>
          <Link
            to="/produtos"
            style={{
              display: "inline-block",
              margin: "10px",
              padding: "10px 20px",
              backgroundColor: "#17A2B8",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "5px",
            }}
          >
            Cadastro de Produto
          </Link>
        </div>
        <div>
          <Link
            to="/cadastro-cliente"
            style={{
              display: "inline-block",
              margin: "10px",
              padding: "10px 20px",
              backgroundColor: "#DC3545",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "5px",
            }}
          >
            Cadastro de Cliente
          </Link>
        </div>
      </div>
    </div>
  );
}
