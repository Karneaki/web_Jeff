import { Fornecedor } from "../@types/fornecedor";
import {
  loadFromStorage,
  addItem,
  updateItem,
  deleteItem,
} from "./storage";

const key = "fornecedores";

export function saveFornecedor(fornecedor: Fornecedor): void {
  addItem(key, fornecedor);
}

export function updateFornecedor(fornecedor: Fornecedor): void {
  updateItem(key, fornecedor);
}

export function deleteFornecedor(id: number): void {
  deleteItem(key, id);
}

export function loadFornecedores(): Fornecedor[] {
  return loadFromStorage<Fornecedor>(key);
}
