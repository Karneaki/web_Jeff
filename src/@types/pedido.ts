export type Pedido = {
  id: number;
  data: Date;
  clienteId: number;
  status: "Pendente" | "Concluído" | "Cancelado"; // melhor restringir aqui
  total: number;
};
