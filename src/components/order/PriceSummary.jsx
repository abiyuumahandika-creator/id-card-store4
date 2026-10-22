import { formatCurrency } from "../../utils/currency";
import { unitPrice } from "../../services/cart";
export default function PriceSummary({quantity=1}){const price=unitPrice(quantity);return <section className="template-selection-summary"><div><p>Harga satuan untuk {quantity} kartu</p><h2>{formatCurrency(price)}</h2><p>Subtotal: {formatCurrency(price*quantity)}</p></div></section>;}
