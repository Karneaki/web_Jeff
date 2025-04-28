import { Transacao } from "../@types/transacao";
import {
  loadFromStorage,
  addItem,
  updateItem,
  deleteItem,
} from "./storage";

const key = "transacoes";

export function saveTransacao(transacao: Transacao): void {
  addItem(key, transacao);
}

export function updateTransacao(transacao: Transacao): void {
  updateItem(key, transacao);
}

export function deleteTransacao(id: number): void {
  deleteItem(key, id);
}

export function loadTransacoes(): Transacao[] {
  return loadFromStorage<Transacao>(key);
}
