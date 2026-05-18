import { useEffect, useMemo, useState } from "react";
import { Heart, MapPin, ShieldCheck, ShoppingBag } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import EmptyState from "../components/EmptyState";
import PetCard from "../components/PetCard";
import RatingStars from "../components/RatingStars";
import RecentlyViewed from "../components/RecentlyViewed";
import SkeletonCard from "../components/SkeletonCard";
import { useStore } from "../hooks/useStore";
import { pets } from "../data/pets";
import { getPetById } from "../services/petService";
import { formatCurrency, getAgeLabel } from "../utils/formatters";

const PetDetailsPage = () => {
  const { id } = useParams();
  const [pet, setPet] = useState(null);
  const [activeImage, setActiveImage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { addRecentlyViewed, addToCart, favorites, ratings, ratePet, toggleFavorite } = useStore();

  useEffect(() => {
    let mounted = true;
    getPetById(id)
      .then((data) => {
        if (mounted) {
          setPet(data);
          setActiveImage(0);
          addRecentlyViewed(data.id);
          setError("");
        }
      })
      .catch(() => mounted && setError("This pet profile could not be found."))
      .finally(() => mounted && setLoading(false));
    return () => {
      mounted = false;
    };
  }, [addRecentlyViewed, id]);

  const related = useMemo(() => {
    if (!pet) return [];
    return pets.filter((item) => item.id !== pet.id && item.category === pet.category).slice(0, 3);
  }, [pet]);

  if (loading) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <SkeletonCard />
      </div>
    );
  }

  if (error || !pet) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <EmptyState title="Pet not found" text={error} />
      </div>
    );
  }

  const isFavorite = favorites.includes(pet.id);
  const userRating = ratings[pet.id] || 0;

  return (
    <>
      <section className="bg-[#f7fbf5] py-12 dark:bg-slate-950">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-6 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <img src={pet.images[activeImage]} alt={pet.name} className="aspect-[4/3] w-full rounded-3xl object-cover shadow-sm" />
            <div className="mt-4 grid grid-cols-3 gap-3">
              {pet.images.map((image, index) => (
                <button key={image} type="button" onClick={() => setActiveImage(index)} className={`overflow-hidden rounded-2xl border-2 ${activeImage === index ? "border-cyan-500" : "border-transparent"}`} aria-label={`Show ${pet.name} image ${index + 1}`}>
                  <img src={image} alt="" className="aspect-[4/3] w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <Link to="/pets" className="text-sm font-bold text-cyan-600 no-underline">Back to pets</Link>
            <div className="mt-4 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-emerald-600">{pet.category}</p>
                <h1 className="mt-2 text-4xl font-black text-slate-900 dark:text-white md:text-6xl">{pet.name}</h1>
                <p className="mt-2 text-lg text-slate-500">{pet.breed}</p>
              </div>
              <button type="button" onClick={() => toggleFavorite(pet.id)} className={`grid h-12 w-12 place-items-center rounded-full bg-white shadow-sm dark:bg-slate-900 ${isFavorite ? "text-rose-500" : "text-slate-500"}`} aria-label="Toggle favorite">
                <Heart fill={isFavorite ? "currentColor" : "none"} />
              </button>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-4">
              <RatingStars value={pet.rating} />
              <span className="text-sm font-semibold text-slate-500">{pet.rating} from {pet.reviews} reviews</span>
              <span className="flex items-center gap-1 text-sm font-semibold text-slate-500"><MapPin size={16} /> {pet.location}</span>
            </div>

            <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-300">{pet.description}</p>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                ["Age", getAgeLabel(pet.age)],
                ["Gender", pet.gender],
                ["Weight", pet.weight],
                ["Fee", formatCurrency(pet.price)],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl bg-white p-4 shadow-sm dark:bg-slate-900">
                  <p className="text-xs font-bold uppercase text-slate-400">{label}</p>
                  <p className="mt-1 font-black text-slate-900 dark:text-white">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-3xl bg-white p-5 shadow-sm dark:bg-slate-900">
              <div className="flex items-center gap-2 font-black text-slate-900 dark:text-white">
                <ShieldCheck size={20} className="text-emerald-500" />
                Care story
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{pet.story}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {pet.temperament.map((trait) => (
                  <span key={trait} className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-bold text-cyan-700">{trait}</span>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button type="button" onClick={() => addToCart(pet.id)} className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-cyan-500 px-6 py-3 font-bold text-white transition hover:bg-cyan-600">
                <ShoppingBag size={18} />
                Start adoption
              </button>
              <Link to="/contact" className="inline-flex flex-1 items-center justify-center rounded-full bg-white px-6 py-3 font-bold text-slate-900 no-underline shadow-sm transition hover:text-cyan-600 dark:bg-slate-900 dark:text-white">
                Ask a question
              </Link>
            </div>

            <div className="mt-6 rounded-3xl border border-slate-100 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
              <p className="mb-3 font-black text-slate-900 dark:text-white">Your review</p>
              <RatingStars value={userRating} onChange={(rating) => ratePet(pet.id, rating)} size={24} label="Your rating" />
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-white py-16 dark:bg-slate-900">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white">Related pets</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {related.map((item) => (
                <PetCard key={item.id} pet={item} />
              ))}
            </div>
          </div>
        </section>
      )}
      <RecentlyViewed excludeId={pet.id} />
    </>
  );
};

export default PetDetailsPage;
