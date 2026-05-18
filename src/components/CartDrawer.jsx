import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useStore } from "../hooks/useStore";
import { formatCurrency } from "../utils/formatters";

const CartDrawer = () => {
  const { cartItems, cartCount, cartTotal, isCartOpen, removeFromCart, setIsCartOpen, updateQuantity } = useStore();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <Motion.button
            type="button"
            aria-label="Close adoption list"
            className="fixed inset-0 z-50 bg-slate-950/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
          />
          <Motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 260 }}
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-white shadow-2xl dark:bg-slate-900"
            aria-label="Adoption list"
          >
            <header className="flex items-center justify-between border-b border-slate-100 p-5 dark:border-slate-800">
              <div>
                <p className="text-sm font-semibold text-cyan-600">Adoption list</p>
                <h2 className="text-2xl font-black text-slate-900 dark:text-white">{cartCount} saved request{cartCount === 1 ? "" : "s"}</h2>
              </div>
              <button
                type="button"
                onClick={() => setIsCartOpen(false)}
                className="grid h-10 w-10 place-items-center rounded-full bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-white"
                aria-label="Close cart"
              >
                <X size={20} />
              </button>
            </header>

            <div className="flex-1 overflow-y-auto p-5">
              {cartItems.length === 0 ? (
                <div className="grid h-full place-items-center text-center">
                  <div>
                    <ShoppingBag className="mx-auto mb-4 text-cyan-500" size={42} />
                    <p className="text-lg font-black">Your list is empty</p>
                    <p className="mt-2 text-sm text-slate-500">Add pets you would like to meet.</p>
                    <Link
                      to="/pets"
                      onClick={() => setIsCartOpen(false)}
                      className="mt-5 inline-flex rounded-full bg-cyan-500 px-5 py-3 text-sm font-bold text-white no-underline"
                    >
                      Browse pets
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map(({ pet, quantity }) => (
                    <article key={pet.id} className="flex gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-950">
                      <img src={pet.images[0]} alt={pet.name} className="h-20 w-20 rounded-xl object-cover" />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <Link to={`/pets/${pet.id}`} onClick={() => setIsCartOpen(false)} className="font-black text-slate-900 no-underline dark:text-white">
                              {pet.name}
                            </Link>
                            <p className="text-xs text-slate-500">{pet.breed}</p>
                          </div>
                          <button type="button" onClick={() => removeFromCart(pet.id)} className="text-slate-400 hover:text-rose-500" aria-label={`Remove ${pet.name}`}>
                            <Trash2 size={17} />
                          </button>
                        </div>
                        <div className="mt-3 flex items-center justify-between">
                          <div className="flex items-center overflow-hidden rounded-full border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900">
                            <button type="button" onClick={() => updateQuantity(pet.id, quantity - 1)} className="grid h-8 w-8 place-items-center" aria-label="Decrease quantity">
                              <Minus size={14} />
                            </button>
                            <span className="w-8 text-center text-sm font-bold">{quantity}</span>
                            <button type="button" onClick={() => updateQuantity(pet.id, quantity + 1)} className="grid h-8 w-8 place-items-center" aria-label="Increase quantity">
                              <Plus size={14} />
                            </button>
                          </div>
                          <p className="text-sm font-black text-slate-900 dark:text-white">{formatCurrency(pet.price * quantity)}</p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>

            {cartItems.length > 0 && (
              <footer className="border-t border-slate-100 p-5 dark:border-slate-800">
                <div className="mb-4 flex items-center justify-between text-lg font-black">
                  <span>Estimated fees</span>
                  <span>{formatCurrency(cartTotal)}</span>
                </div>
                <Link
                  to="/profile"
                  onClick={() => setIsCartOpen(false)}
                  className="block rounded-full bg-slate-900 px-5 py-3 text-center text-sm font-bold text-white no-underline transition hover:bg-cyan-600 dark:bg-cyan-500"
                >
                  Continue adoption request
                </Link>
              </footer>
            )}
          </Motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
