const KEY = "nexore-orders";
export function getOrders() {
  try { return JSON.parse(localStorage.getItem(KEY) || "[]"); } catch { return []; }
}
export function getOrder(id) { return getOrders().find((order) => order.id === id); }
export function createOrder(customer, items, total) {
  const order = { id: `NXR-${Date.now().toString().slice(-8)}`, customer, items, total, status: "Menunggu pembayaran", createdAt: new Date().toISOString() };
  localStorage.setItem(KEY, JSON.stringify([order, ...getOrders()]));
  return order;
}
export function updateOrderStatus(id, status) {
  const orders = getOrders().map((order) => order.id === id ? { ...order, status } : order);
  localStorage.setItem(KEY, JSON.stringify(orders));
  return orders.find((order) => order.id === id);
}
