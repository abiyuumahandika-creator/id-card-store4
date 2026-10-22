import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import ProductCard from "../components/catalog/ProductCard";
import { getTemplates } from "../services/templates";
export default function Templates() {
  const [items,setItems]=useState([]); const [error,setError]=useState("");
  useEffect(()=>{getTemplates().then(setItems).catch(e=>setError(e.message));},[]);
  const demo = [{id:"corporate",name:"Corporate",description:"Profesional untuk tim perusahaan.",initials:"AK"},{id:"minimalist",name:"Minimalist",description:"Simpel dan elegan.",initials:"RA"},{id:"creative",name:"Creative Studio",description:"Warna berani untuk identitas kreatif.",initials:"DS"}];
  return <><Navbar/><main className="page-shell"><p className="choose-type-eyebrow">NEXORE COLLECTION</p><h1>Katalog template</h1><p>Pilih desain lalu isi data kartu lu.</p>{error&&<p role="status">API belum tersedia, ditampilkan contoh template.</p>}<div className="template-collection-grid">{(items.length?items:demo).map(t=><ProductCard key={t.id} template={t}/>)}</div><p><Link to="/pilih-tipe">Jelajahi kategori ID card ↗</Link></p></main><Footer/></>;
}
