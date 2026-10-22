export default function CartQuantityControl({value,onChange}){return <label>Jumlah <input type="number" min="1" value={value} onChange={e=>onChange(Math.max(1,Number(e.target.value)||1))}/></label>;}
