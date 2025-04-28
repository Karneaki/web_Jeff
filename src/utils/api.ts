// Importando as funções do storage
import {
  searchByName,
  saveToStorage,
  loadFromStorage,
  addItem,
  updateItem,
  deleteItem,
} from "./storage";

export class Api {
  constructor() {}

  // Função genérica para salvar dados no localStorage
  salvarDados<T>(key: string, dados: T[]): void {
    try {
      saveToStorage(key, dados);
    } catch (error) {
      console.error("Erro ao salvar dados:", error);
    }
  }

  // Função genérica para carregar dados do localStorage
  carregarDados<T>(key: string): T[] {
    try {
      return loadFromStorage<T>(key);
    } catch (error) {
      console.error("Erro ao carregar dados:", error);
      return [];
    }
  }

  // Função de pesquisa genérica, permite pesquisar por nome (ou qualquer campo de tipo string)
  fazPesquisa<T extends { nome?: string }>(dados: T[], pesquisa: string): T[] {
    return searchByName(dados, pesquisa);
  }

  // Função para adicionar um item no localStorage
  adicionarItem<T extends { id: number }>(key: string, item: T): void {
    try {
      addItem(key, item);
    } catch (error) {
      console.error("Erro ao adicionar item:", error);
    }
  }

  // Função para atualizar um item no localStorage
  atualizarItem<T extends { id: number }>(key: string, updatedItem: T): void {
    try {
      updateItem(key, updatedItem);
    } catch (error) {
      console.error("Erro ao atualizar item:", error);
    }
  }

  // Função para excluir um item do localStorage
  excluirItem<T extends { id: number }>(key: string, id: number): void {
    try {
      deleteItem(key, id);
    } catch (error) {
      console.error("Erro ao excluir item:", error);
    }
  }

  // Função para pegar um item pelo ID do localStorage
  pegarPorId<T extends { id: number }>(key: string, id: number): T | undefined {
    const dados = this.carregarDados<T>(key);
    return dados.find((item) => item.id === id);
  }
}
