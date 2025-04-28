import { ItemPedido } from "../@types/itemPedido";
import {
  loadFromStorage,
  addItem,
  updateItem,
  deleteItem,
} from "./storage";

const key = "itensPedido";

export function saveItemPedido(itemPedido: ItemPedido): void {
  addItem(key, itemPedido);
}

export function updateItemPedido(itemPedido: ItemPedido): void {
  updateItem(key, itemPedido);
}

export function deleteItemPedido(id: number): void {
  deleteItem(key, id);
}

export function loadItensPedido(): ItemPedido[] {
  return loadFromStorage<ItemPedido>(key);
}
