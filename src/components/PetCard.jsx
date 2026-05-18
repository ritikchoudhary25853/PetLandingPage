import { Heart, MapPin, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { useStore } from "../hooks/useStore";
import { formatCurrency, getAgeLabel } from "../utils/formatters";
import RatingStars from "./RatingStars";

const PetCard = ({ pet }) => {
  const { addToCart, favorites, toggleFavorite } = useStore();
  const isFavorite = favorites.includes(pet.id);

  return (
    <Motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <Link to={`/pets/${pet.id}`} aria-label={`View ${pet.name}`}>
          <img src={pet.images[0]} alt={pet.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
        </Link>
        <button
          type="button"
          onClick={() => toggleFavorite(pet.id)}
          className={`absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-white/90 shadow transition ${isFavorite ? "text-rose-500" : "text-slate-600 hover:text-rose-500"}`}
          aria-label={isFavorite ? `Remove ${pet.name} from wishlist` : `Save ${pet.name} to wishlist`}
        >
          <Heart size={19} fill={isFavorite ? "currentColor" : "none"} />
        </button>
        <span className="absolute left-3 top-3 rounded-full bg-cyan-500 px-3 py-1 text-xs font-bold text-white">
          {pet.category}
        </span>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <Link to={`/pets/${pet.id}`} className="text-xl font-black text-slate-900 no-underline dark:text-white">
              {pet.name}
            </Link>
            <p className="mt-1 text-sm text-slate-500">{pet.breed}</p>
          </div>
          <p className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-black text-emerald-700">{formatCurrency(pet.price)}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300">
          <span className="rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-800">{getAgeLabel(pet.age)}</span>
          <span className="rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-800">{pet.gender}</span>
          <span className="rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-800">{pet.availability}</span>
        </div>

        <div className="mt-4 flex items-center justify-between gap-3">
          <div>
            <RatingStars value={pet.rating} size={15} />
            <p className="mt-1 flex items-center gap-1 text-xs text-slate-500">
              <MapPin size={13} /> {pet.location}
            </p>
          </div>
          <button
            type="button"
            onClick={() => addToCart(pet.id)}
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-bold text-white transition hover:bg-cyan-600 dark:bg-cyan-500"
          >
            <ShoppingBag size={16} />
            Adopt
          </button>
        </div>
      </div>
    </Motion.article>
  );
};

export default PetCard;
