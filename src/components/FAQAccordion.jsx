import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "../data/pets";

const FAQAccordion = () => {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-white py-20 dark:bg-slate-900">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-cyan-600">FAQ</p>
          <h2 className="mt-2 text-3xl font-black text-slate-900 dark:text-white md:text-5xl">Questions before adoption</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((item, index) => {
            const isOpen = open === index;
            return (
              <div key={item.question} className="rounded-2xl border border-slate-100 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
                <button type="button" onClick={() => setOpen(isOpen ? -1 : index)} className="flex w-full items-center justify-between gap-4 p-5 text-left font-black text-slate-900 dark:text-white" aria-expanded={isOpen}>
                  {item.question}
                  <ChevronDown className={`shrink-0 transition ${isOpen ? "rotate-180" : ""}`} size={20} />
                </button>
                {isOpen && <p className="px-5 pb-5 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.answer}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
