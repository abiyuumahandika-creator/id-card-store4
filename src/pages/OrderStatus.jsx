import { Link, useParams } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { getOrder } from "../services/orders";
import { formatCurrency } from "../utils/currency";
export default function OrderStatus(){const {orderId}=useParams();const order=getOrder(orderId);return <><Navbar/><main className="page-shell"><p className="choose-type-eyebrow">DETAIL PESANAN</p><h1>Status pesanan</h1>{!order?<p>Pesanan tidak ditemukan. <Link to="/cart">Buka keranjang</Link></p>:<section className="template-selection-summary"><div><h2>{order.id}</h2><p>Dibuat: {new Date(order.createdAt).toLocaleString("id-ID")}</p><p>Status: <strong>{order.status}</strong></p><p>Total: <strong>{formatCurrency(order.total)}</strong></p><h3>Data pemesan</h3><p>{order.customer.name} · {order.customer.whatsapp}</p><p>{order.customer.address}</p><h3>Item</h3>{order.items.map((i,n)=><p key={i.key||n}>{i.name} × {i.quantity} — {formatCurrency(i.subtotal)}</p>)}<Link to="/templates">Kembali ke katalog ↗</Link></div></section>}</main><Footer/></>;}
