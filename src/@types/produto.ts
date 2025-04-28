export type Produto = {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  quantidade: number;
  imagem: string; // URL da imagem
  fornecedorId: number;
};
