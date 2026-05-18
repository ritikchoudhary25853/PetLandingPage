import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import EmptyState from "../components/EmptyState";
import PetCard from "../components/PetCard";
import PetFilters from "../components/PetFilters";
import SkeletonCard from "../components/SkeletonCard";
import { getPets } from "../services/petService";

const defaultFilters = {
  search: "",
  category: "all",
  age: "all",
  price: "all",
  breed: "all",
};

const pageSize = 6;

const PetsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [visible, setVisible] = useState(pageSize);
  const [filters, setFilters] = useState({
    ...defaultFilters,
    search: searchParams.get("search") || "",
  });

  useEffect(() => {
    let mounted = true;
    getPets()
      .then((data) => {
        if (mounted) {
          setPets(data);
          setError("");
        }
      })
      .catch(() => mounted && setError("Could not load pets. Please refresh and try again."))
      .finally(() => mounted && setLoading(false));

    return () => {
      mounted = false;
    };
  }, []);

  const updateFilters = (nextFilters) => {
    setFilters(nextFilters);
    const params = {};
    if (nextFilters.search) params.search = nextFilters.search;
    setSearchParams(params, { replace: true });
    setVisible(pageSize);
  };

  const breeds = useMemo(() => [...new Set(pets.map((pet) => pet.breed))].sort(), [pets]);

  const filteredPets = useMemo(() => {
    const query = filters.search.toLowerCase().trim();
    return pets.filter((pet) => {
      const matchesQuery =
        !query ||
        [pet.name, pet.breed, pet.category, pet.location, ...pet.temperament].some((value) =>
          value.toLowerCase().includes(query),
        );
      const matchesCategory = filters.category === "all" || pet.category === filters.category;
      const matchesBreed = filters.breed === "all" || pet.breed === filters.breed;
      const matchesAge =
        filters.age === "all" ||
        (filters.age === "young" && pet.age < 2) ||
        (filters.age === "adult" && pet.age >= 2 && pet.age <= 4) ||
        (filters.age === "senior" && pet.age >= 5);
      const matchesPrice =
        filters.price === "all" ||
        (filters.price === "under-60" && pet.price < 60) ||
        (filters.price === "60-100" && pet.price >= 60 && pet.price <= 100) ||
        (filters.price === "100-plus" && pet.price > 100);

      return matchesQuery && matchesCategory && matchesBreed && matchesAge && matchesPrice;
    });
  }, [filters, pets]);

  const visiblePets = filteredPets.slice(0, visible);

  return (
    <div className="bg-[#f7fbf5] py-12 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-wide text-cyan-600">Adoptable pets</p>
          <h1 className="mt-2 text-4xl font-black text-slate-900 dark:text-white md:text-6xl">Find your perfect match</h1>
          <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-300">
            Filter by category, age, fee, breed, or search by personality traits and location.
          </p>
        </div>

        <PetFilters filters={filters} breeds={breeds} onChange={updateFilters} onReset={() => updateFilters(defaultFilters)} />

        <div className="mt-8">
          {loading && (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <SkeletonCard key={index} />
              ))}
            </div>
          )}

          {!loading && error && <EmptyState title="Unable to load pets" text={error} />}

          {!loading && !error && filteredPets.length === 0 && <EmptyState title="No pets match your filters" />}

          {!loading && !error && filteredPets.length > 0 && (
            <>
              <div className="mb-4 text-sm font-semibold text-slate-500">
                Showing {visiblePets.length} of {filteredPets.length} pets
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {visiblePets.map((pet) => (
                  <PetCard key={pet.id} pet={pet} />
                ))}
              </div>
              {visible < filteredPets.length && (
                <div className="mt-10 text-center">
                  <button type="button" onClick={() => setVisible((current) => current + pageSize)} className="rounded-full bg-slate-900 px-6 py-3 font-bold text-white transition hover:bg-cyan-600 dark:bg-cyan-500">
                    Load more pets
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PetsPage;
