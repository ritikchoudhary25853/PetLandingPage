import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";
import NewsletterForm from "./NewsletterForm";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Link to="/" className="inline-flex items-center gap-3 text-white no-underline">
            <img src={logo} alt="PawPal logo" className="h-14 w-14 rounded-full bg-white object-cover" />
            <span className="text-2xl font-black">PawPal</span>
          </Link>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
            We help families find thoughtful pet matches and provide simple tools for wishlists, adoption requests, and care planning.
          </p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Instagram, Twitter].map((Icon, index) => (
              <a key={index} href="https://example.com" className="grid h-10 w-10 place-items-center rounded-full bg-slate-800 text-white transition hover:bg-cyan-500" aria-label="Social profile">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-black">Newsletter</h2>
          <p className="mt-2 text-sm text-slate-300">Get new adoptable pets and care tips in your inbox.</p>
          <NewsletterForm />
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-6 text-sm text-slate-300 md:grid-cols-3 md:px-6">
          <p className="flex items-center gap-2"><Phone size={16} /> 9547582243</p>
          <p className="flex items-center gap-2"><Mail size={16} /> yossef.gitmasters@gmail.com</p>
          <p className="flex items-center gap-2"><MapPin size={16} /> Grove Chambers, 36 Green Lane</p>
        </div>
      </div>

      <div className="bg-slate-950 px-4 py-4 text-center text-xs text-slate-400">
        Copyright 2026 PawPal. Privacy Policy and Terms apply.
      </div>
    </footer>
  );
};

export default Footer;
