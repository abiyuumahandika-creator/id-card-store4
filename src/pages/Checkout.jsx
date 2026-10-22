import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import useCart from "../hooks/useCart";
import { createOrder } from "../services/orders";
import { validateCustomer } from "../utils/validation";
import { formatCurrency } from "../utils/currency";
export default function Checkout() {
 const {items,lines,total,totalQuantity}=useCart(); const [form,setForm]=useState({name:"",whatsapp:"",email:"",organization:"",address:"",notes:""}); const [errors,setErrors]=useState({}); const navigate=useNavigate();
 const change=e=>setForm({...form,[e.target.name]:e.target.value});
 function submit(e){e.preventDefault(); const next=validateCustomer(form);setErrors(next);if(Object.keys(next).length||!items.length)return;const order=createOrder(form,lines,total);navigate(`/payment/${order.id}`);}
 return <><Navbar/><main className="page-shell"><p className="choose-type-eyebrow">LANGKAH TERAKHIR</p><h1>Checkout</h1>{!items.length?<p>Keranjang kosong. <Link to="/pilih-tipe">Pilih template</Link> dulu.</p>:<div className="checkout-layout"><form className="checkout-form" onSubmit={submit}><h2>Informasi pemesan</h2>{[["name","Nama lengkap *"],["whatsapp","Nomor WhatsApp *"],["email","Email (opsional)"],["organization","Organisasi/perusahaan"],["address","Alamat pengiriman *"],["notes","Catatan pesanan"]].map(([name,label])=><label key={name} style={{display:"block",margin:"14px 0"}}>{label}{name==="address"||name==="notes"?<textarea name={name} value={form[name]} onChange={change} rows="3" style={{display:"block",width:"100%",padding:12}}/>:<input name={name} type={name==="email"?"email":"text"} value={form[name]} onChange={change} style={{display:"block",width:"100%",padding:12}}/>}{errors[name]&&<small role="alert">{errors[name]}</small>}</label>)}<button className="design-select-button" type="submit">Buat pesanan ↗</button></form><aside className="template-selection-summary"><div><h2>Ringkasan pesanan</h2>{lines.map(i=><p key={i.key}>{i.name} × {i.quantity}<br/><strong>{formatCurrency(i.subtotal)}</strong></p>)}<hr/><p>{totalQuantity} kartu</p><h2>{formatCurrency(total)}</h2><small>Harga grosir dihitung per template. Ongkir belum dihitung.</small></div></aside></div>}</main><Footer/></>;
}
