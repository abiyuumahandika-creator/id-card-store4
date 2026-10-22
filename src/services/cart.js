const KEY = "nexore-cart";
export function getCart() {
  try { return JSON.parse(localStorage.getItem(KEY) || "[]"); } catch { return []; }
}
export function saveCart(items) {
  localStorage.setItem(KEY, JSON.stringify(items));
  window.dispatchEvent(new Event("nexore-cart-updated"));
  return items;
}
export function addToCart(item) {
  const cart = getCart();
  const key = `${item.templateId || item.id}-${item.variant || "standard"}`;
  const existing = cart.find((entry) => entry.key === key);
  if (existing) existing.quantity += Number(item.quantity || 1);
  else cart.push({ ...item, key, quantity: Number(item.quantity || 1) });
  return saveCart(cart);
}
export function updateCartQuantity(key, quantity) {
  return saveCart(getCart().map((item) => item.key === key ? { ...item, quantity: Math.max(1, Number(quantity) || 1) } : item));
}
export function removeFromCart(key) { return saveCart(getCart().filter((item) => item.key !== key)); }
export function clearCart() { return saveCart([]); }
export function cartCount() { return getCart().reduce((sum, item) => sum + item.quantity, 0); }
export function unitPrice(quantity) {
  if (quantity >= 50) return 11000;
  if (quantity >= 25) return 12500;
  if (quantity >= 10) return 13500;
  return 15000;
}
export function cartTotals(items = getCart()) {
  const lines = items.map((item) => {
    const price = item.price || unitPrice(item.quantity);
    return { ...item, unitPrice: price, subtotal: price * item.quantity };
  });
  return { lines, totalQuantity: lines.reduce((n, i) => n + i.quantity, 0), total: lines.reduce((n, i) => n + i.subtotal, 0) };
}
