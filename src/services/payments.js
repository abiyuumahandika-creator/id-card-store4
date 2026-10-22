// Integrasi payment gateway belum dikonfigurasi. Jangan menandai pembayaran sebagai lunas otomatis.
export function paymentInstructions(order) {
  return { orderId: order?.id || "", amount: Number(order?.total || 0), providerConfigured: false };
}
