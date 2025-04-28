import { Pedido } from "../@types/pedido";
import {
  loadFromStorage,
  addItem,
  updateItem,
  deleteItem,
} from "./storage";

const key = "pedidos";

export function savePedido(pedido: Pedido): void {
  addItem(key, pedido);
}

export function updatePedido(pedido: Pedido): void {
  updateItem(key, pedido);
}

export function deletePedido(id: number): void {
  deleteItem(key, id);
}

export function loadPedidos(): Pedido[] {
  return loadFromStorage<Pedido>(key);
}
