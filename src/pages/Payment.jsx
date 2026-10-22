import { Link, useParams } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { getOrder } from "../services/orders";
import { formatCurrency } from "../utils/currency";
export default function Payment() {
 const {orderId}=useParams(); const order=getOrder(orderId);
 return <><Navbar/><main className="page-shell"><p className="choose-type-eyebrow">PEMBAYARAN</p><h1>Pembayaran pesanan</h1>{!order?<><p>Pesanan tidak ditemukan di penyimpanan browser ini.</p><Link to="/">Kembali ke beranda</Link></>:<section className="template-selection-summary"><div><h2>{order.id}</h2><p>Total tagihan: <strong>{formatCurrency(order.total)}</strong></p><p>Status: {order.status}</p><h3>QRIS belum terhubung</h3><p>Website ini belum dikonfigurasi dengan payment gateway, jadi belum ada QR pembayaran asli. Jangan transfer ke QR yang tidak resmi.</p><p>Data pesanan tersimpan lokal di browser untuk demo.</p><Link to={`/order/${order.id}`} className="design-select-button">Lihat detail pesanan ↗</Link></div></section>}</main><Footer/></>;
}
