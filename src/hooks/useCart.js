import { useCallback, useEffect, useState } from "react";
import { addToCart, getCart, removeFromCart, updateCartQuantity, cartTotals } from "../services/cart";
export default function useCart() {
  const [items, setItems] = useState(() => getCart());
  useEffect(() => {
    const sync = () => setItems(getCart());
    window.addEventListener("nexore-cart-updated", sync);
    window.addEventListener("storage", sync);
    return () => { window.removeEventListener("nexore-cart-updated", sync); window.removeEventListener("storage", sync); };
  }, []);
  const add = useCallback((item) => { addToCart(item); setItems(getCart()); }, []);
  const remove = useCallback((key) => { removeFromCart(key); setItems(getCart()); }, []);
  const update = useCallback((key, quantity) => { updateCartQuantity(key, quantity); setItems(getCart()); }, []);
  return { items, add, remove, update, ...cartTotals(items) };
}
