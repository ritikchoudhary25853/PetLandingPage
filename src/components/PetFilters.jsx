import { Search, SlidersHorizontal, X } from "lucide-react";
import { categories } from "../data/pets";

const ageOptions = [
  { label: "Any age", value: "all" },
  { label: "Under 2 years", value: "young" },
  { label: "2-4 years", value: "adult" },
  { label: "5+ years", value: "senior" },
];

const priceOptions = [
  { label: "Any fee", value: "all" },
  { label: "Under $60", value: "under-60" },
  { label: "$60-$100", value: "60-100" },
  { label: "$100+", value: "100-plus" },
];

const PetFilters = ({ filters, breeds, onChange, onReset }) => {
  const update = (key, value) => onChange({ ...filters, [key]: value });

  return (
    <section className="rounded-3xl border border-slate-100 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 md:p-5">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <SlidersHorizontal size={18} className="text-cyan-500" />
          <h2 className="text-lg font-black text-slate-900 dark:text-white">Find your match</h2>
        </div>
        <button type="button" onClick={onReset} className="inline-flex items-center gap-1 text-sm font-bold text-slate-500 hover:text-rose-500">
          <X size={15} /> Reset
        </button>
      </div>

      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-5">
        <label className="lg:col-span-2">
          <span className="sr-only">Search pets</span>
          <span className="flex items-center rounded-2xl border border-slate-200 px-3 py-3 dark:border-slate-700">
            <Search size={17} className="text-slate-400" />
            <input
              value={filters.search}
              onChange={(event) => update("search", event.target.value)}
              type="search"
              placeholder="Search by name, breed, or trait"
              className="w-full bg-transparent px-2 text-sm outline-none dark:text-white"
            />
          </span>
        </label>

        <Select label="Category" value={filters.category} onChange={(value) => update("category", value)} options={[{ label: "All pets", value: "all" }, ...categories.map((item) => ({ label: item, value: item }))]} />
        <Select label="Age" value={filters.age} onChange={(value) => update("age", value)} options={ageOptions} />
        <Select label="Fee" value={filters.price} onChange={(value) => update("price", value)} options={priceOptions} />
        <Select label="Breed" value={filters.breed} onChange={(value) => update("breed", value)} options={[{ label: "All breeds", value: "all" }, ...breeds.map((breed) => ({ label: breed, value: breed }))]} />
      </div>
    </section>
  );
};

function Select({ label, value, onChange, options }) {
  return (
    <label>
      <span className="sr-only">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-3 text-sm font-semibold text-slate-700 outline-none transition focus:border-cyan-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

export default PetFilters;
