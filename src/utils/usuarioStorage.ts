import { Usuario } from "../@types/usuario";
import {
  loadFromStorage,
  addItem,
  updateItem,
  deleteItem,
} from "./storage";

const key = "usuarios";

export function saveUsuario(usuario: Usuario): void {
  addItem(key, usuario);
}

export function updateUsuario(usuario: Usuario): void {
  updateItem(key, usuario);
}

export function deleteUsuario(id: number): void {
  deleteItem(key, id);
}

export function loadUsuarios(): Usuario[] {
  return loadFromStorage<Usuario>(key);
}
