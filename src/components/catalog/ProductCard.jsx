import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/currency";
export default function ProductCard({ template }) {
  return <article className="design-card">
    <div className="id-preview" style={{background:"linear-gradient(135deg,#263b52,#4c7188)",color:"#fff",padding:24,minHeight:180,borderRadius:8}}>
      <strong>NEXORE / IDENTITY</strong><div style={{fontSize:28,marginTop:36}}>{template.initials || "NX"}</div><strong>{template.name}</strong>
    </div>
    <div className="design-card-content"><h3>{template.name}</h3><p>{template.description}</p><p><strong>Mulai {formatCurrency(15000)}</strong></p>
    <Link className="design-select-button" to={`/order/standard?template=${encodeURIComponent(template.id)}`}>Pilih template ↗</Link></div>
  </article>;
}
