import EmptyState from "../components/EmptyState";
import PetCard from "../components/PetCard";
import { useStore } from "../hooks/useStore";

const WishlistPage = () => {
  const { favoritePets } = useStore();

  return (
    <div className="bg-[#f7fbf5] py-12 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <p className="text-sm font-bold uppercase tracking-wide text-cyan-600">Wishlist</p>
        <h1 className="mt-2 text-4xl font-black text-slate-900 dark:text-white md:text-6xl">Favorite pets</h1>
        <div className="mt-8">
          {favoritePets.length === 0 ? (
            <EmptyState title="No favorites yet" text="Tap the heart on any pet card to save it here." />
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {favoritePets.map((pet) => (
                <PetCard key={pet.id} pet={pet} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;
