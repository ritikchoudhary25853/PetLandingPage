import { useCallback, useEffect, useMemo, useState } from "react";
import { pets } from "../data/pets";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { StoreContext } from "./storeContextValue";

export function StoreProvider({ children }) {
  const [cart, setCart] = useLocalStorage("pet-adoption-cart", []);
  const [favorites, setFavorites] = useLocalStorage("pet-favorites", []);
  const [recentlyViewed, setRecentlyViewed] = useLocalStorage("recently-viewed-pets", []);
  const [ratings, setRatings] = useLocalStorage("pet-ratings", {});
  const [theme, setTheme] = useLocalStorage("preferred-theme", "light");
  const [toasts, setToasts] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const showToast = useCallback((message, type = "success") => {
    const id = crypto.randomUUID();
    setToasts((current) => [...current, { id, message, type }]);
    window.setTimeout(() => {
      setToasts((current) => current.filter((toast) => toast.id !== id));
    }, 3500);
  }, []);

  const getPet = useCallback((petId) => pets.find((pet) => pet.id === petId), []);

  const addToCart = useCallback(
    (petId, quantity = 1) => {
      setCart((current) => {
        const existing = current.find((item) => item.petId === petId);
        if (existing) {
          return current.map((item) =>
            item.petId === petId ? { ...item, quantity: item.quantity + quantity } : item,
          );
        }
        return [...current, { petId, quantity }];
      });
      setIsCartOpen(true);
      showToast("Added to adoption list.");
    },
    [setCart, showToast],
  );

  const updateQuantity = useCallback(
    (petId, quantity) => {
      setCart((current) =>
        current
          .map((item) => (item.petId === petId ? { ...item, quantity: Math.max(1, quantity) } : item))
          .filter((item) => item.quantity > 0),
      );
    },
    [setCart],
  );

  const removeFromCart = useCallback(
    (petId) => {
      setCart((current) => current.filter((item) => item.petId !== petId));
      showToast("Removed from adoption list.", "info");
    },
    [setCart, showToast],
  );

  const toggleFavorite = useCallback(
    (petId) => {
      setFavorites((current) => {
        const exists = current.includes(petId);
        showToast(exists ? "Removed from wishlist." : "Saved to wishlist.", exists ? "info" : "success");
        return exists ? current.filter((id) => id !== petId) : [...current, petId];
      });
    },
    [setFavorites, showToast],
  );

  const addRecentlyViewed = useCallback(
    (petId) => {
      setRecentlyViewed((current) => [petId, ...current.filter((id) => id !== petId)].slice(0, 6));
    },
    [setRecentlyViewed],
  );

  const ratePet = useCallback(
    (petId, rating) => {
      setRatings((current) => ({ ...current, [petId]: rating }));
      showToast("Thanks for rating this pet.", "success");
    },
    [setRatings, showToast],
  );

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  }, [setTheme]);

  const cartItems = useMemo(
    () =>
      cart
        .map((item) => ({ ...item, pet: getPet(item.petId) }))
        .filter((item) => Boolean(item.pet)),
    [cart, getPet],
  );

  const cartTotal = cartItems.reduce((total, item) => total + item.pet.price * item.quantity, 0);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const favoritePets = useMemo(() => favorites.map(getPet).filter(Boolean), [favorites, getPet]);

  const value = useMemo(
    () => ({
      cartItems,
      cartCount,
      cartTotal,
      favorites,
      favoritePets,
      recentlyViewed,
      ratings,
      theme,
      toasts,
      isCartOpen,
      addToCart,
      updateQuantity,
      removeFromCart,
      toggleFavorite,
      addRecentlyViewed,
      ratePet,
      toggleTheme,
      showToast,
      setIsCartOpen,
    }),
    [
      addRecentlyViewed,
      addToCart,
      cartCount,
      cartItems,
      cartTotal,
      favoritePets,
      favorites,
      isCartOpen,
      ratePet,
      recentlyViewed,
      ratings,
      removeFromCart,
      showToast,
      theme,
      toasts,
      toggleFavorite,
      toggleTheme,
      updateQuantity,
    ],
  );

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}
