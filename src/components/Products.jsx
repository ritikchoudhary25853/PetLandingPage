import ProductCard from "./ProductCard";
import { products } from "../data/products";

const Products = () => {
  return (
    <section id="products" className="bg-gradient-to-br from-[#e2f9c8] to-[#b1d7e6] py-20">
      <div className="mx-auto max-w-7xl px-4 text-center md:px-6">
        <p className="mb-2 text-sm font-bold uppercase tracking-wide text-emerald-700">Care products</p>
        <h2 className="text-3xl font-black text-slate-900 md:text-5xl">Explore our natural offerings</h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-600">
          A small starter collection for treats, food, and enrichment products that pair well with your adoption journey.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
