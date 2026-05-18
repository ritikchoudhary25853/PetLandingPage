import RatingStars from "./RatingStars";

const Testimonial = ({ img, name, role, quote, rating }) => {
  return (
    <article className="h-full rounded-3xl bg-white p-6 text-left shadow-sm dark:bg-slate-900">
      <p className="text-slate-600 dark:text-slate-300">"{quote}"</p>
      <div className="mt-6 flex items-center gap-3">
        <img src={img} alt={name} className="h-12 w-12 rounded-full border-2 border-cyan-400 object-cover" />
        <div>
          <p className="font-black text-slate-900 dark:text-white">{name}</p>
          <p className="text-xs text-slate-500">{role}</p>
          <RatingStars value={rating} size={14} />
        </div>
      </div>
    </article>
  );
};

export default Testimonial;
