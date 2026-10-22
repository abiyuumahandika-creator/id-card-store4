import { useMemo } from "react";
import { cartTotals, unitPrice } from "../services/cart";
export default function useOrderPricing(items) {
  return useMemo(() => ({ ...cartTotals(items), priceForQuantity: unitPrice }), [items]);
}
