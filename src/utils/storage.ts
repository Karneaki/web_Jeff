export function searchByName<T extends { nome?: string }>(
  items: T[],
  search: string
): T[] {
  const lowerSearch = search.toLowerCase();
  return items.filter((item) => item.nome?.toLowerCase().includes(lowerSearch));
}

export function saveToStorage<T>(key: string, data: T[]): void {
  localStorage.setItem(key, JSON.stringify(data));
}

export function loadFromStorage<T>(key: string): T[] {
  const data = localStorage.getItem(key);
  try {
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Erro ao carregar dados do localStorage:", error);
    return [];
  }
}

export function addItem<T extends { id: number }>(key: string, item: T): void {
  const items = loadFromStorage<T>(key);
  if (!items.some((existingItem) => existingItem.id === item.id)) {
    items.push(item);
    saveToStorage(key, items);
  } else {
    console.log(`Item com id ${item.id} já existe.`);
  }
}

export function updateItem<T extends { id: number }>(
  key: string,
  updatedItem: T
): void {
  let items = loadFromStorage<T>(key);
  items = items.map((item) =>
    item.id === updatedItem.id ? updatedItem : item
  );
  saveToStorage(key, items);
}

export function deleteItem<T extends { id: number }>(
  key: string,
  id: number
): void {
  let items = loadFromStorage<T>(key);
  items = items.filter((item) => item.id !== id);
  saveToStorage(key, items);
}
