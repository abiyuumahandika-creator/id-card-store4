import { Link, Outlet } from "react-router-dom";
export default function AdminLayout(){return <><header className="navbar"><Link className="brand" to="/admin">NEXORE ADMIN</Link><nav className="nav-links"><Link to="/admin">Dashboard</Link><Link to="/admin/orders">Pesanan</Link><Link to="/admin/pricing">Harga</Link><Link to="/">Lihat website</Link></nav></header><Outlet/></>;}
