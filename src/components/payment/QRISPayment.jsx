import { formatCurrency } from "../../utils/currency";
export default function QRISPayment({amount=0,orderId=""}){return <section className="template-selection-summary"><div><h2>Pembayaran QRIS</h2><p>Pesanan: {orderId}</p><p>Total: {formatCurrency(amount)}</p><p>Payment gateway belum dikonfigurasi. QRIS belum tersedia untuk pembayaran nyata.</p></div></section>;}
