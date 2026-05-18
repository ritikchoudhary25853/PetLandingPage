const SkeletonCard = () => (
  <div className="animate-pulse rounded-2xl border border-slate-100 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
    <div className="h-56 rounded-xl bg-slate-200 dark:bg-slate-800" />
    <div className="mt-5 h-4 w-2/3 rounded bg-slate-200 dark:bg-slate-800" />
    <div className="mt-3 h-3 w-1/2 rounded bg-slate-200 dark:bg-slate-800" />
    <div className="mt-6 h-10 rounded-full bg-slate-200 dark:bg-slate-800" />
  </div>
);

export default SkeletonCard;
