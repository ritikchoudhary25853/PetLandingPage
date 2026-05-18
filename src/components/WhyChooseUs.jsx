import { Check, Minus, PawPrint } from "lucide-react";
import logo from "../assets/Logo.png";

const rows = [
  "Ethical and cruelty-free",
  "Vet-reviewed profiles",
  "Transparent adoption fees",
  "Post-adoption support",
  "Sustainable care partners",
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-20 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-emerald-600">
              <PawPrint size={18} />
              Benefits with us
            </div>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white md:text-5xl">
              Why choose PawPal
            </h2>
          </div>
          <p className="max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300">
            Choosing us means prioritizing your pet's health with high-quality care standards, thoughtful matching, and a cleaner adoption workflow for families and coordinators.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-100 shadow-sm dark:border-slate-800">
          <div className="grid grid-cols-[1.3fr_1fr_1fr] bg-slate-50 text-sm font-black text-slate-700 dark:bg-slate-950 dark:text-slate-200">
            <div className="p-4">Feature</div>
            <div className="p-4 text-center">PawPal</div>
            <div className="p-4 text-center">Typical listing</div>
          </div>
          {rows.map((row, index) => (
            <div key={row} className={`grid grid-cols-[1.3fr_1fr_1fr] items-center ${index % 2 ? "bg-white dark:bg-slate-900" : "bg-[#ecf9de] dark:bg-slate-950"}`}>
              <div className="p-4 font-semibold text-slate-700 dark:text-slate-200">{row}</div>
              <div className="flex justify-center p-4">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-emerald-600 shadow-sm dark:bg-slate-800">
                  {index === 0 ? <img src={logo} alt="PawPal" className="h-7 w-7 object-contain" /> : <Check size={20} />}
                </span>
              </div>
              <div className="flex justify-center p-4">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-slate-400 shadow-sm dark:bg-slate-800">
                  <Minus size={20} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
