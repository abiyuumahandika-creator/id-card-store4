import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/currency";
export default function CartSummary({total=0,totalQuantity=0}){return <aside className="template-selection-summary"><div><h2>Ringkasan</h2><p>{totalQuantity} kartu</p><strong>{formatCurrency(total)}</strong><p>Harga grosir dihitung per template.</p><Link className="design-select-button" to="/checkout">Lanjut checkout ↗</Link></div></aside>;}
