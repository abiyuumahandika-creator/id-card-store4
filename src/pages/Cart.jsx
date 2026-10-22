import { Link } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import useCart from "../hooks/useCart";
import { formatCurrency } from "../utils/currency";
export default function Cart() {
 const {items,lines,total,totalQuantity,update,remove}=useCart();
 return <><Navbar/><main className="page-shell"><p className="choose-type-eyebrow">PESANAN LU</p><h1>Keranjang</h1>
 {!items.length?<section className="template-selection-summary"><div><h2>Keranjang masih kosong</h2><p>Pilih template dulu untuk mulai memesan.</p></div><Link className="design-select-button" to="/pilih-tipe">Pilih template ↗</Link></section>:
 <><div className="cart-lines">{lines.map(item=><article key={item.key} className="template-selection-summary"><div><h2>{item.name}</h2><p>{item.categoryTitle||item.category||"ID Card"} · {formatCurrency(item.unitPrice)} / kartu</p><p>Subtotal: <strong>{formatCurrency(item.subtotal)}</strong></p></div><div><label>Jumlah <input aria-label={`Jumlah ${item.name}`} type="number" min="1" value={item.quantity} onChange={e=>update(item.key,e.target.value)} style={{width:85}}/></label><button type="button" className="design-select-button" onClick={()=>remove(item.key)}>Hapus</button></div></article>)}</div><section className="template-selection-summary"><div><h2>Ringkasan</h2><p>{totalQuantity} kartu · Harga grosir dihitung per template</p><strong>{formatCurrency(total)}</strong></div><Link className="design-select-button" to="/checkout">Lanjut checkout ↗</Link></section></>}
 </main><Footer/></>;
}
