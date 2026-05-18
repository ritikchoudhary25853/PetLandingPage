import { Link } from "react-router-dom";
import { LogOut, ShoppingBag } from "lucide-react";
import { useAuth } from "../hooks/useAuth";
import { useStore } from "../hooks/useStore";
import { formatCurrency } from "../utils/formatters";

const ProfilePage = () => {
  const { user, logout } = useAuth();
  const { cartItems, cartTotal, favoritePets } = useStore();

  return (
    <div className="bg-[#f7fbf5] py-12 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="rounded-3xl bg-white p-6 shadow-sm dark:bg-slate-900">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div className="flex items-center gap-4">
              <img src={user.avatar} alt="" className="h-16 w-16 rounded-full bg-slate-100" />
              <div>
                <h1 className="text-3xl font-black text-slate-900 dark:text-white">{user.name}</h1>
                <p className="text-sm text-slate-500">{user.email}</p>
              </div>
            </div>
            <button type="button" onClick={logout} className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-100 px-5 py-3 text-sm font-bold text-slate-700 hover:text-rose-600 dark:bg-slate-800 dark:text-white">
              <LogOut size={17} />
              Sign out
            </button>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <section className="rounded-3xl bg-white p-6 shadow-sm dark:bg-slate-900">
            <div className="mb-5 flex items-center gap-2">
              <ShoppingBag className="text-cyan-500" />
              <h2 className="text-2xl font-black text-slate-900 dark:text-white">Adoption requests</h2>
            </div>
            {cartItems.length === 0 ? (
              <p className="text-sm text-slate-500">No adoption requests yet. Browse pets and add a match to start.</p>
            ) : (
              <div className="space-y-4">
                {cartItems.map(({ pet, quantity }) => (
                  <div key={pet.id} className="flex items-center gap-4 rounded-2xl bg-slate-50 p-3 dark:bg-slate-950">
                    <img src={pet.images[0]} alt={pet.name} className="h-16 w-16 rounded-xl object-cover" />
                    <div className="flex-1">
                      <Link to={`/pets/${pet.id}`} className="font-black text-slate-900 no-underline dark:text-white">{pet.name}</Link>
                      <p className="text-sm text-slate-500">{quantity} request{quantity === 1 ? "" : "s"} - {formatCurrency(pet.price * quantity)}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

          <aside className="rounded-3xl bg-white p-6 shadow-sm dark:bg-slate-900">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white">Summary</h2>
            <div className="mt-5 space-y-3 text-sm">
              <div className="flex justify-between"><span className="text-slate-500">Saved pets</span><strong>{favoritePets.length}</strong></div>
              <div className="flex justify-between"><span className="text-slate-500">Requests</span><strong>{cartItems.length}</strong></div>
              <div className="flex justify-between"><span className="text-slate-500">Estimated fees</span><strong>{formatCurrency(cartTotal)}</strong></div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
