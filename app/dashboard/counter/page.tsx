import type { Metadata } from "next";
import { Counter } from "@/components/shopping-cart";

export const metadata: Metadata = {
  title: "Shopping Cart",
};

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito de compras</span>
      <Counter value={20} />
    </div>
  );
}
