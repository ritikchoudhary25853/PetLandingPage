import { useState } from "react";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { useStore } from "../hooks/useStore";
import { formatCurrency } from "../utils/formatters";

const ProductCard = ({ product }) => {
  const [qty, setQty] = useState(1);
  const { showToast } = useStore();

  return (
    <article className="mx-auto w-full max-w-sm rounded-3xl bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:bg-slate-900">
      <div className="flex justify-center rounded-2xl bg-slate-100 p-6 dark:bg-slate-800">
        <img src={product.image} alt={product.name} className="h-40 object-contain" />
      </div>

      <div className="mt-5 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-xl font-black text-slate-900 dark:text-white">{product.name}</h3>
          <p className="mt-1 text-sm text-slate-500">{product.description}</p>
        </div>
        <span className="shrink-0 font-black text-emerald-600">{formatCurrency(product.price)}</span>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <div className="flex items-center overflow-hidden rounded-full border border-slate-200 dark:border-slate-700">
          <button onClick={() => setQty(Math.max(1, qty - 1))} className="grid h-9 w-9 place-items-center bg-slate-100 dark:bg-slate-800" aria-label="Decrease quantity">
            <Minus size={14} />
          </button>
          <span className="w-10 text-center font-bold">{qty}</span>
          <button onClick={() => setQty(qty + 1)} className="grid h-9 w-9 place-items-center bg-slate-100 dark:bg-slate-800" aria-label="Increase quantity">
            <Plus size={14} />
          </button>
        </div>

        <button
          type="button"
          onClick={() => showToast(`${qty} ${product.name} added to your care kit.`, "success")}
          className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-4 py-2 text-sm font-bold text-white transition hover:bg-cyan-600"
        >
          <ShoppingCart size={16} />
          Add
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
