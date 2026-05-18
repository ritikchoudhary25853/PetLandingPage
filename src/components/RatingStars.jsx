import { Star } from "lucide-react";

const RatingStars = ({ value = 0, onChange, size = 18, label = "Rating" }) => {
  const rounded = Math.round(value);

  return (
    <div className="flex items-center gap-1" aria-label={`${label}: ${value} out of 5`}>
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = star <= rounded;
        if (onChange) {
          return (
            <button
              type="button"
              key={star}
              onClick={() => onChange(star)}
              className={filled ? "text-amber-400" : "text-slate-300"}
              aria-label={`Rate ${star} out of 5`}
            >
              <Star size={size} fill="currentColor" />
            </button>
          );
        }

        return <Star key={star} size={size} fill="currentColor" className={filled ? "text-amber-400" : "text-slate-300"} />;
      })}
    </div>
  );
};

export default RatingStars;
