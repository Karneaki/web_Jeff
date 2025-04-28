// import { useState, useEffect } from "react";
// import { Pedido } from "../@types/pedido";
// import { savePedido, loadPedidos, deletePedido } from "../utils/pedidoStorage";

// // Componente de Listagem de Pedidos
// const ListaPedidos = ({ pedidos, onDelete }: { pedidos: Pedido[]; onDelete: (id: number) => void }) => {
//   return (
//     <div style={{ flex: 1, marginLeft: "20px", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
//       <h2>Lista de Pedidos</h2>
//       <ul style={{ listStyleType: "none", padding: "0" }}>
//         {pedidos.map((pedido) => (
//           <li key={pedido.id} style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
//             <span>{pedido.data.toISOString()}</span>
//             <button
//               onClick={() => onDelete(pedido.id)}
//               style={{
//                 backgroundColor: "#f44336",
//                 color: "#fff",
//                 padding: "5px",
//                 border: "none",
//                 borderRadius: "5px",
//               }}
//             >
//               Deletar
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// // Componente de Formulário de Pedido
// const FormularioPedido = ({ onSubmit }: { onSubmit: (pedido: Pedido) => void }) => {
//   const [data, setData] = useState("");
//   const [clienteId, setClienteId] = useState<number>(0);
//   const [status, setStatus] = useState("");
//   const [total, setTotal] = useState<number>(0);

//   const handleSubmit = () => {
//     const pedido: Pedido = {
//       id: Date.now(), // Gerar ID único com timestamp
//       data,
//       clienteId,
//       status,
//       total,
//     };

//     onSubmit(pedido);

//     setData("");
//     setClienteId(0);
//     setStatus("");
//     setTotal(0);
//   };

//   return (
//     <div style={{ flex: 1, padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
//       <h2>Cadastro de Pedido</h2>
//       <div style={{ marginBottom: "10px" }}>
//         <input
//           type="text"
//           placeholder="Data"
//           value={data}
//           onChange={(e) => setData(e.target.value)}
//           style={{ padding: "10px", width: "100%", marginBottom: "10px" }}
//         />
//       </div>
//       <div style={{ marginBottom: "10px" }}>
//         <input
//           type="number"
//           placeholder="Cliente ID"
//           value={clienteId}
//           onChange={(e) => setClienteId(Number(e.target.value))}
//           style={{ padding: "10px", width: "100%", marginBottom: "10px" }}
//         />
//       </div>
//       <div style={{ marginBottom: "10px" }}>
//         <input
//           type="text"
//           placeholder="Status"
//           value={status}
//           onChange={(e) => setStatus(e.target.value)}
//           style={{ padding: "10px", width: "100%", marginBottom: "10px" }}
//         />
//       </div>
//       <div style={{ marginBottom: "10px" }}>
//         <input
//           type="number"
//           placeholder="Total"
//           value={total}
//           onChange={(e) => setTotal(Number(e.target.value))}
//           style={{ padding: "10px", width: "100%", marginBottom: "10px" }}
//         />
//       </div>
//       <button
//         onClick={handleSubmit}
//         style={{
//           backgroundColor: "#4CAF50",
//           color: "#fff",
//           padding: "10px 20px",
//           border: "none",
//           borderRadius: "5px",
//           cursor: "pointer",
//         }}
//       >
//         Salvar Pedido
//       </button>
//     </div>
//   );
// };

// export default function CadastroPedidoScreen() {
//   const [pedidos, setPedidos] = useState<Pedido[]>([]);

//   useEffect(() => {
//     const pedidosSalvos = loadPedidos();
//     setPedidos(pedidosSalvos);
//   }, []);

//   const handlePedidoSubmit = (pedido: Pedido) => {
//     savePedido(pedido);
//     setPedidos((prevPedidos) => [...prevPedidos, pedido]);
//   };

//   const handlePedidoDelete = (id: number) => {
//     deletePedido(id);
//     setPedidos((prevPedidos) => prevPedidos.filter((pedido) => pedido.id !== id));
//   };

//   return (
//     <div style={{ display: "flex", flexDirection: "row", padding: "20px", justifyContent: "space-between" }}>
//       <FormularioPedido onSubmit={handlePedidoSubmit} />
//       <ListaPedidos pedidos={pedidos} onDelete={handlePedidoDelete} />
//     </div>
//   );
// }
