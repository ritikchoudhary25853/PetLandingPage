import { Link } from "react-router-dom";
import About from "../components/About";
import FAQAccordion from "../components/FAQAccordion";
import Hero from "../components/Hero";
import PetCard from "../components/PetCard";
import ProcessTimeline from "../components/ProcessTimeline";
import Products from "../components/Products";
import TestimonialsGallery from "../components/TestimonialsGallery";
import WhyChooseUs from "../components/WhyChooseUs";
import { pets } from "../data/pets";

const HomePage = () => {
  const featuredPets = pets.slice(0, 3);

  return (
    <>
      <Hero />
      <About />
      <section className="bg-white py-20 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-cyan-600">Featured pets</p>
              <h2 className="mt-2 text-3xl font-black text-slate-900 dark:text-white md:text-5xl">Ready for a new home</h2>
            </div>
            <Link to="/pets" className="inline-flex rounded-full bg-slate-900 px-5 py-3 text-sm font-bold text-white no-underline transition hover:bg-cyan-600 dark:bg-cyan-500">
              View all pets
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredPets.map((pet) => (
              <PetCard key={pet.id} pet={pet} />
            ))}
          </div>
        </div>
      </section>
      <Products />
      <WhyChooseUs />
      <ProcessTimeline />
      <TestimonialsGallery />
      <FAQAccordion />
    </>
  );
};

export default HomePage;
