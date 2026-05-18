import { useEffect, useMemo, useRef, useState } from "react";
import { Heart, LogOut, Menu, Moon, Search, ShoppingBag, Sun, User, X } from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { motion as Motion, AnimatePresence } from "framer-motion";
import logo from "../assets/Logo.png";
import { useAuth } from "../hooks/useAuth";
import { useStore } from "../hooks/useStore";
import { classNames } from "../utils/formatters";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [query, setQuery] = useState("");
  const profileRef = useRef(null);
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();
  const { cartCount, favorites, setIsCartOpen, theme, toggleTheme } = useStore();

  const links = useMemo(
    () => [
      { label: "Home", to: "/" },
      { label: "Pets", to: "/pets" },
      { label: "About", to: "/#about" },
      { label: "Process", to: "/#process" },
      { label: "Contact", to: "/contact" },
    ],
    [],
  );

  useEffect(() => {
    const close = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) setProfileOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const submitSearch = (event) => {
    event.preventDefault();
    navigate(query.trim() ? `/pets?search=${encodeURIComponent(query.trim())}` : "/pets");
  };

  const navLinkClass = ({ isActive }) =>
    classNames(
      "rounded-full px-4 py-2 text-sm font-semibold no-underline transition",
      isActive
        ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
        : "text-slate-700 hover:bg-white hover:text-cyan-700 dark:text-slate-200 dark:hover:bg-slate-800",
    );

  return (
    <nav className="sticky top-0 z-40 border-b border-white/50 bg-[#eaf7dd]/90 px-4 py-3 shadow-sm backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/90 md:px-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 no-underline" aria-label="PawPal home">
          <span className="h-12 w-12 overflow-hidden rounded-full bg-white shadow-md">
            <img src={logo} alt="PawPal logo" className="h-full w-full object-cover" />
          </span>
          <span className="hidden text-xl font-black text-slate-900 dark:text-white sm:block">PawPal</span>
        </Link>

        <div className="hidden items-center gap-1 rounded-full bg-white/80 p-1 shadow-sm dark:bg-slate-900/80 lg:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={navLinkClass}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <form
            onSubmit={submitSearch}
            className="hidden items-center rounded-full border border-white bg-white/80 px-3 py-2 shadow-sm dark:border-slate-700 dark:bg-slate-900 md:flex"
          >
            <Search size={16} className="text-slate-400" aria-hidden="true" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              type="search"
              placeholder="Search pets"
              className="w-28 bg-transparent px-2 text-sm text-slate-800 outline-none placeholder:text-slate-400 dark:text-white"
              aria-label="Search pets"
            />
          </form>

          <Link
            to="/wishlist"
            className="relative grid h-10 w-10 place-items-center rounded-full bg-white text-slate-800 shadow-sm transition hover:text-cyan-600 dark:bg-slate-900 dark:text-white"
            aria-label="Open wishlist"
          >
            <Heart size={18} />
            {favorites.length > 0 && <Badge value={favorites.length} />}
          </Link>

          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            className="relative grid h-10 w-10 place-items-center rounded-full bg-slate-900 text-white shadow-sm transition hover:bg-cyan-600 dark:bg-cyan-500"
            aria-label="Open adoption list"
          >
            <ShoppingBag size={18} />
            {cartCount > 0 && <Badge value={cartCount} />}
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            className="hidden h-10 w-10 place-items-center rounded-full bg-white text-slate-800 shadow-sm transition hover:text-cyan-600 dark:bg-slate-900 dark:text-white sm:grid"
            aria-label="Toggle color theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <div className="relative hidden sm:block" ref={profileRef}>
            <button
              type="button"
              onClick={() => setProfileOpen((current) => !current)}
              className="grid h-10 w-10 place-items-center rounded-full bg-white text-slate-800 shadow-sm transition hover:text-cyan-600 dark:bg-slate-900 dark:text-white"
              aria-label="Open profile menu"
              aria-expanded={profileOpen}
            >
              {user?.avatar ? (
                <img src={user.avatar} alt="" className="h-8 w-8 rounded-full" />
              ) : (
                <User size={18} />
              )}
            </button>

            <AnimatePresence>
              {profileOpen && (
                <Motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="absolute right-0 mt-3 w-56 rounded-2xl border border-slate-100 bg-white p-2 shadow-xl dark:border-slate-800 dark:bg-slate-900"
                >
                  {isAuthenticated ? (
                    <>
                      <Link className="block rounded-xl px-3 py-2 text-sm font-semibold text-slate-800 no-underline hover:bg-slate-100 dark:text-white dark:hover:bg-slate-800" to="/profile">
                        {user.name}
                        <span className="block text-xs font-normal text-slate-500">{user.email}</span>
                      </Link>
                      <button
                        type="button"
                        onClick={() => {
                          logout();
                          setProfileOpen(false);
                        }}
                        className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-sm font-semibold text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/30"
                      >
                        <LogOut size={16} /> Sign out
                      </button>
                    </>
                  ) : (
                    <>
                      <Link className="block rounded-xl px-3 py-2 text-sm font-semibold text-slate-800 no-underline hover:bg-slate-100 dark:text-white dark:hover:bg-slate-800" to="/login">
                        Login
                      </Link>
                      <Link className="block rounded-xl px-3 py-2 text-sm font-semibold text-slate-800 no-underline hover:bg-slate-100 dark:text-white dark:hover:bg-slate-800" to="/register">
                        Create account
                      </Link>
                    </>
                  )}
                </Motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full bg-white text-slate-800 shadow-sm dark:bg-slate-900 dark:text-white lg:hidden"
            onClick={() => setOpen((current) => !current)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <Motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden lg:hidden"
          >
            <div className="mx-auto mt-3 flex max-w-7xl flex-col gap-2 rounded-2xl bg-white p-4 shadow-lg dark:bg-slate-900">
              {links.map((link) => (
                <NavLink key={link.to} to={link.to} onClick={() => setOpen(false)} className={navLinkClass}>
                  {link.label}
                </NavLink>
              ))}
              <form onSubmit={submitSearch} className="mt-2 flex items-center rounded-xl border border-slate-200 px-3 py-2 dark:border-slate-700">
                <Search size={16} className="text-slate-400" aria-hidden="true" />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  type="search"
                  placeholder="Search pets"
                  className="w-full bg-transparent px-2 text-sm outline-none dark:text-white"
                  aria-label="Search pets"
                />
              </form>
              <div className="grid grid-cols-2 gap-2 sm:hidden">
                <Link to={isAuthenticated ? "/profile" : "/login"} className="rounded-xl bg-slate-100 px-4 py-3 text-center text-sm font-bold text-slate-800 no-underline dark:bg-slate-800 dark:text-white">
                  {isAuthenticated ? "Profile" : "Login"}
                </Link>
                <button type="button" onClick={toggleTheme} className="rounded-xl bg-slate-100 px-4 py-3 text-sm font-bold text-slate-800 dark:bg-slate-800 dark:text-white">
                  {theme === "dark" ? "Light" : "Dark"} mode
                </button>
              </div>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

function Badge({ value }) {
  return (
    <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-cyan-500 px-1 text-[11px] font-bold text-white ring-2 ring-white dark:ring-slate-950">
      {value}
    </span>
  );
}

export default NavBar;
