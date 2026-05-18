import { adoptionSteps } from "../data/pets";

const ProcessTimeline = () => {
  return (
    <section id="process" className="bg-[#f7fbf5] py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-wide text-cyan-600">Adoption process</p>
          <h2 className="mt-2 text-3xl font-black text-slate-900 dark:text-white md:text-5xl">A clear path to a better match</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          {adoptionSteps.map((step, index) => (
            <article key={step.title} className="relative rounded-3xl bg-white p-6 shadow-sm dark:bg-slate-900">
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-cyan-100 text-xl font-black text-cyan-700">
                {index + 1}
              </div>
              <h3 className="text-lg font-black text-slate-900 dark:text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-300">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
