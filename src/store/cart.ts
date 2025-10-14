// src/store/cart.ts
import{ create} from "zustand";

export interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  add: (item: CartItem) => void;
  remove: (id: number) => void;
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
  clear: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  items: [],
  add: (item) =>
    set((state) => {
      const existing = state.items.find((i) => i.id === item.id);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      }
      return { items: [...state.items, { ...item, quantity: 1 }] };
    }),
  remove: (id) =>
    set((state) => ({ items: state.items.filter((i) => i.id !== id) })),
  increaseQty: (id) =>
    set((state) => ({
      items: state.items.map((i) =>
        i.id === id ? { ...i, quantity: i.quantity + 1 } : i
      ),
    })),
  decreaseQty: (id) =>
    set((state) => ({
      items: state.items.map((i) =>
        i.id === id ? { ...i, quantity: Math.max(1, i.quantity - 1) } : i
      ),
    })),
  clear: () => set({ items: [] }),
}));
