import { pets } from "../data/pets";
import { useStore } from "../hooks/useStore";
import PetCard from "./PetCard";

const RecentlyViewed = ({ excludeId }) => {
  const { recentlyViewed } = useStore();
  const viewedPets = recentlyViewed
    .filter((id) => id !== excludeId)
    .map((id) => pets.find((pet) => pet.id === id))
    .filter(Boolean)
    .slice(0, 3);

  if (viewedPets.length === 0) return null;

  return (
    <section className="bg-[#f7fbf5] py-16 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="text-2xl font-black text-slate-900 dark:text-white">Recently viewed</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {viewedPets.map((pet) => (
            <PetCard key={pet.id} pet={pet} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentlyViewed;
