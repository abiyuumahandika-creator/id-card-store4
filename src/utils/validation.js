export function validateCustomer(customer) {
  const errors = {};
  if (!customer.name?.trim()) errors.name = "Nama pemesan wajib diisi.";
  if (!customer.whatsapp?.trim()) errors.whatsapp = "Nomor WhatsApp wajib diisi.";
  if (!customer.address?.trim()) errors.address = "Alamat pengiriman wajib diisi.";
  return errors;
}
