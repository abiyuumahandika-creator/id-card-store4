import { Link } from "react-router-dom";
import StandardOrder from "./StandardOrder";
export default function OrganizationOrder(){return <><StandardOrder/><div className="page-shell"><p>Untuk pesanan banyak anggota, lu bisa memasukkan data satu per satu pada tahap ini. Impor Excel belum diaktifkan.</p><Link to="/custom">Butuh desain khusus? Ajukan desain custom ↗</Link></div></>;}
