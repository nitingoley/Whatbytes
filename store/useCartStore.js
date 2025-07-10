import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCartStore = create(
  persist(
    (set) => ({
      cart: [],
      addToCart: (product) => set((state) => {
        const existingItem = state.cart.find(item => item.id === product.id);
        if (existingItem) {
          return {
            cart: state.cart.map(item =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          };
        }
        return { cart: [...state.cart, { ...product, quantity: 1 }] };
      }),
      removeFromCart: (productId) => set((state) => ({
        cart: state.cart.filter(item => item.id !== productId)
      })),
      updateQuantity: (productId, quantity) => set((state) => ({
        cart: state.cart.map(item =>
          item.id === productId
            ? { ...item, quantity: Math.max(1, quantity) }
            : item
        )
      })),
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: 'cart-storage',
      getStorage: () => localStorage,
    }
  )
);


export default useCartStore;