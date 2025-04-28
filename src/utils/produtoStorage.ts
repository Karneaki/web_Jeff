import { Produto } from "../@types/produto";
import {
  loadFromStorage,
  addItem,
  updateItem,
  deleteItem,
} from "./storage";

const key = "produtos";

export function saveProduto(produto: Produto): void {
  addItem(key, produto);
}

export function updateProduto(produto: Produto): void {
  updateItem(key, produto);
}

export function deleteProduto(id: number): void {
  deleteItem(key, id);
}

export function loadProdutos(): Produto[] {
  return loadFromStorage<Produto>(key);
}
