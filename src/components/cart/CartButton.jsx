import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
import { cartCount } from "../../services/cart";
export default function CartButton(){const [count,setCount]=useState(cartCount());useEffect(()=>{const update=()=>setCount(cartCount());window.addEventListener("nexore-cart-updated",update);return()=>window.removeEventListener("nexore-cart-updated",update);},[]);return <Link className="button button-dark" to="/cart">Keranjang ({count})</Link>;}
