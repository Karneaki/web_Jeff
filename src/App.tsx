import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomeScreen from "./pages/HomeScreen";
import ProdutoScreen from "./pages/Produtos";
// import FormProdutoScreen from './pages/FormProdutoScreen';
// import ListaProdutosScreen from './pages/ListaProdutosScreen';
// import FormFornecedorScreen from './pages/FormFornecedorScreen';
// import ListaFornecedoresScreen from './pages/ListaFornecedoresScreen';
// import FormClienteScreen from './pages/FormClienteScreen';
// import ListaClientesScreen from './pages/ListaClientesScreen';
// import FormPedidoScreen from './pages/FormPedidoScreen';
// import ListaPedidosScreen from './pages/ListaPedidosScreen';
// import FormTransacaoScreen from './pages/FormTransacaoScreen';
// import ListaTransacoesScreen from './pages/ListaTransacoesScreen';

import { ApiContext } from "./contexts/apiContext";
import { Api } from "./utils/api";

import Navbar from "./components/Navbar"; // Nosso novo componente de Navbar!

export default function App() {
  const api = new Api();

  return (
    <ApiContext.Provider value={{ api }}>
      <Router>
        <Navbar /> {/* Sempre presente no topo */}
        <div className="p-4">
          {" "}
          {/* Conteúdo das páginas */}
          <Routes>
            <Route path="/" element={<HomeScreen />} />

            {/* Produtos */}
            <Route path="/produtos" element={<ProdutoScreen />} />
          </Routes>
        </div>
      </Router>
    </ApiContext.Provider>
  );
}
//  {/* Fornecedores */}
//  <Route path="/formulario-fornecedor" element={<FormFornecedorScreen />} />
//  <Route path="/lista-fornecedores" element={<ListaFornecedoresScreen />} />

//  {/* Clientes */}
//  <Route path="/formulario-cliente" element={<FormClienteScreen />} />
//  <Route path="/lista-clientes" element={<ListaClientesScreen />} />

//  {/* Pedidos */}
//  <Route path="/formulario-pedido" element={<FormPedidoScreen />} />
//  <Route path="/lista-pedidos" element={<ListaPedidosScreen />} />

//  {/* Transações */}
//  <Route path="/formulario-transacao" element={<FormTransacaoScreen />} />
//  <Route path="/lista-transacoes" element={<ListaTransacoesScreen />} />
