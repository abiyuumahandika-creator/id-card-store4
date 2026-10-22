import { formatCurrency } from "../../utils/currency";
export default function OrderTable({orders=[]}){return <div>{orders.map(o=><article key={o.id} className="template-selection-summary"><div><strong>{o.id}</strong><p>{o.customer?.name} · {formatCurrency(o.total)}</p><p>{o.status}</p></div></article>)}</div>;}
