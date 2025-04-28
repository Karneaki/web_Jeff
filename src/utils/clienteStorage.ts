import { Cliente } from "../@types/cliente";
import {
  loadFromStorage,
  addItem,
  updateItem,
  deleteItem,
} from "./storage";

const key = "clientes";

export function saveCliente(cliente: Cliente): void {
  addItem(key, cliente);
}

export function updateCliente(cliente: Cliente): void {
  updateItem(key, cliente);
}

export function deleteCliente(id: number): void {
  deleteItem(key, id);
}

export function loadClientes(): Cliente[] {
  return loadFromStorage<Cliente>(key);
}
