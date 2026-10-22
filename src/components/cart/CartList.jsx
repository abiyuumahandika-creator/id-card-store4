import CartItem from "./CartItem";
export default function CartList({items=[],onQuantityChange,onRemove}){return <div>{items.map(item=><CartItem key={item.key} item={item} onQuantityChange={q=>onQuantityChange?.(item.key,q)} onRemove={()=>onRemove?.(item.key)}/>)}</div>;}
