import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={styles.navbar}>
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        <li>
          <Link to="/" style={styles.link}>
            Home
          </Link>
        </li>

        <li>
          <Link to="/produtos" style={styles.link}>
            Cadastrar Produto
          </Link>
        </li>
        {/* <li>
          <Link to="/lista-produtos" style={styles.link}>
            Listar Produtos
          </Link>
        </li>

        <li>
          <Link to="/formulario-fornecedor" style={styles.link}>
            Cadastrar Fornecedor
          </Link>
        </li>
        <li>
          <Link to="/lista-fornecedores" style={styles.link}>
            Listar Fornecedores
          </Link>
        </li>

        <li>
          <Link to="/formulario-cliente" style={styles.link}>
            Cadastrar Cliente
          </Link>
        </li>
        <li>
          <Link to="/lista-clientes" style={styles.link}>
            Listar Clientes
          </Link>
        </li>

        <li>
          <Link to="/formulario-pedido" style={styles.link}>
            Cadastrar Pedido
          </Link>
        </li>
        <li>
          <Link to="/lista-pedidos" style={styles.link}>
            Listar Pedidos
          </Link>
        </li>

        <li>
          <Link to="/formulario-item-pedido" style={styles.link}>
            Cadastrar Item Pedido
          </Link>
        </li>
        <li>
          <Link to="/lista-itens-pedido" style={styles.link}>
            Listar Itens Pedido
          </Link>
        </li>

        <li>
          <Link to="/formulario-transacao" style={styles.link}>
            Cadastrar Transação
          </Link>
        </li>
        <li>
          <Link to="/lista-transacoes" style={styles.link}>
            Listar Transações
          </Link>
        </li>

        <li>
          <Link to="/formulario-usuario" style={styles.link}>
            Cadastrar Usuário
          </Link>
        </li>
        <li>
          <Link to="/lista-usuarios" style={styles.link}>
            Listar Usuários
          </Link>
        </li> */}
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    backgroundColor: "#333",
    padding: "1rem",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "1rem",
  },
};
