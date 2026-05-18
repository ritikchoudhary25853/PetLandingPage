import { SearchX } from "lucide-react";

const EmptyState = ({ title = "Nothing found", text = "Try adjusting your filters." }) => (
  <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center dark:border-slate-700 dark:bg-slate-900">
    <SearchX className="mx-auto mb-4 text-cyan-500" size={44} />
    <h3 className="text-2xl font-black text-slate-900 dark:text-white">{title}</h3>
    <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">{text}</p>
  </div>
);

export default EmptyState;
