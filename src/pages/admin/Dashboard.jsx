import { Link } from "react-router-dom";
import { getOrders } from "../../services/orders";
export default function Dashboard(){const orders=getOrders();return <main className="page-shell"><p className="choose-type-eyebrow">ADMIN / OVERVIEW</p><h1>Dashboard</h1><section className="template-selection-summary"><div><h2>{orders.length} pesanan tersimpan</h2><p>Data ini hanya dari browser yang sedang digunakan, belum tersimpan di database bersama.</p><Link to="/admin/orders">Lihat pesanan ↗</Link></div></section><p><Link to="/admin/pricing">Pengaturan harga ↗</Link></p></main>;}
