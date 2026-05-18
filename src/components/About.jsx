import { CheckCircle2, PawPrint } from "lucide-react";
import { Link } from "react-router-dom";
import MaskGroup from "../assets/Maskgroup.png";

const About = () => {
  return (
    <section id="about" className="bg-[#f7fbf5] py-20 dark:bg-slate-950">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative">
          <img src={MaskGroup} alt="Pet care specialist holding a dog" className="mx-auto w-full max-w-md rounded-[2rem] object-cover shadow-2xl" />
          <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl dark:bg-slate-900">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-emerald-100 text-emerald-600">
              <PawPrint size={24} />
            </span>
            <div>
              <p className="text-sm font-black text-slate-900 dark:text-white">Rescue-first</p>
              <p className="text-xs text-slate-500">Ethical matching standards</p>
            </div>
          </div>
        </div>

        <div>
          <div className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-emerald-600">
            <PawPrint size={18} />
            About PawPal
          </div>
          <h2 className="max-w-3xl text-3xl font-black leading-tight text-slate-900 dark:text-white sm:text-5xl">
            Dedicated to your pet's well-being, from first search to forever home.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
            We combine adoption tools, realistic pet profiles, wishlist persistence, and clear care guidance so families can make thoughtful decisions.
            Every profile includes lifestyle notes, adoption fees, health status, and next-step availability.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {["Health-focused profiles", "LocalStorage wishlist", "Guided adoption process", "Responsive care support"].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl bg-white p-4 font-bold text-slate-700 shadow-sm dark:bg-slate-900 dark:text-slate-200">
                <CheckCircle2 size={20} className="text-emerald-500" />
                {item}
              </div>
            ))}
          </div>
          <Link to="/pets" className="mt-8 inline-flex rounded-full bg-slate-900 px-6 py-3 font-bold text-white no-underline transition hover:bg-cyan-600 dark:bg-cyan-500">
            Browse adoptable pets
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
