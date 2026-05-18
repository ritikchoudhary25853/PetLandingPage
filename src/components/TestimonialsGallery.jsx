import { useState } from "react";
import { ChevronLeft, ChevronRight, PawPrint } from "lucide-react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import Testimonial from "./Testimonial";
import { testimonials } from "../data/testimonials";
import d1 from "../assets/d1.png";
import d3 from "../assets/d3.png";
import d4 from "../assets/d4.png";

const gallery = [
  d1,
  "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=700&q=80",
  d3,
  d4,
];

const TestimonialsGallery = () => {
  const [active, setActive] = useState(0);
  const testimonial = testimonials[active];

  const next = () => setActive((current) => (current + 1) % testimonials.length);
  const previous = () => setActive((current) => (current - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="bg-[#dbe8d3] py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-emerald-700 dark:text-emerald-400">
              <PawPrint size={18} />
              Customer testimonials
            </div>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white md:text-5xl">
              What adopters say
            </h2>
            <p className="mt-4 max-w-xl text-slate-600 dark:text-slate-300">
              A lightweight Framer Motion slider with real controls, keyboard-friendly buttons, and persistent layout.
            </p>
            <div className="mt-6 flex gap-2">
              <button type="button" onClick={previous} className="grid h-11 w-11 place-items-center rounded-full bg-white text-slate-800 shadow-sm dark:bg-slate-900 dark:text-white" aria-label="Previous testimonial">
                <ChevronLeft size={20} />
              </button>
              <button type="button" onClick={next} className="grid h-11 w-11 place-items-center rounded-full bg-white text-slate-800 shadow-sm dark:bg-slate-900 dark:text-white" aria-label="Next testimonial">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          <AnimatePresence mode="wait">
            <Motion.div key={testimonial.name} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.25 }}>
              <Testimonial {...testimonial} />
            </Motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map((img, index) => (
            <img key={index} src={img} alt={`Happy pet gallery ${index + 1}`} className="h-64 w-full rounded-3xl object-cover shadow-sm" loading="lazy" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsGallery;
