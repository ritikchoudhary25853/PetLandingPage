import { ArrowDown, HeartHandshake, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import HeroDog from "../assets/HeroPhoto.jpeg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#e7facf] via-[#e6f7ee] to-[#b7ddea]">
      <div className="mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl items-center gap-10 px-4 py-14 md:px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <Motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-bold text-emerald-700 shadow-sm">
            <ShieldCheck size={17} />
            Trusted adoption and pet care
          </div>
          <h1 className="max-w-4xl text-4xl font-black leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Find a loyal friend and care for them with confidence.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
            Browse adoptable pets, save favorites, build your adoption list, and connect with a care team that helps every match start well.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/pets" className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-6 py-3 font-bold text-white no-underline shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-600">
              <HeartHandshake size={19} />
              Adopt Now
            </Link>
            <Link to="/#about" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-slate-800 no-underline shadow-sm transition hover:text-cyan-700">
              <ArrowDown size={18} />
              Learn More
            </Link>
          </div>

          <dl className="mt-10 grid max-w-xl grid-cols-3 gap-3">
            {[
              ["450+", "happy matches"],
              ["24/7", "care support"],
              ["4.9", "avg rating"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl bg-white/70 p-4 text-center shadow-sm backdrop-blur dark:bg-slate-900/70">
                <dt className="text-2xl font-black text-slate-900 dark:text-white">{value}</dt>
                <dd className="mt-1 text-xs font-semibold uppercase text-slate-500">{label}</dd>
              </div>
            ))}
          </dl>
        </Motion.div>

        <Motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.65, delay: 0.1 }} className="relative mx-auto w-full max-w-lg">
          <div className="absolute -left-3 top-8 rounded-2xl bg-white p-4 shadow-xl dark:bg-slate-900">
            <p className="text-xs font-bold uppercase text-slate-400">Next visit</p>
            <p className="mt-1 text-sm font-black text-slate-900 dark:text-white">Today, 4:30 PM</p>
          </div>
          <img src={HeroDog} alt="Happy dog ready for adoption" className="mx-auto aspect-square w-full rounded-[2rem] object-contain" />
          <div className="absolute bottom-6 right-1 rounded-2xl bg-slate-900 p-4 text-white shadow-xl">
            <p className="text-sm font-bold">Vet checked</p>
            <p className="text-xs text-slate-300">Health records included</p>
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default Hero;
