export type Transacao = {
  id: number;
  data: Date;
  tipo: "Entrada" | "Saída";
  valor: number;
  produtoId: number;
  pedidoId?: number; // pode ou não existir
};
