import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  return (
    <div className="bg-[#f7fbf5] py-12 dark:bg-slate-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-cyan-600">Contact</p>
          <h1 className="mt-2 text-4xl font-black text-slate-900 dark:text-white md:text-6xl">Talk with our care team</h1>
          <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
            Ask about a pet, adoption readiness, care products, or partnership opportunities. The form validates before sending and uses the mock service layer.
          </p>
          <div className="mt-8 space-y-3 text-sm font-semibold text-slate-600 dark:text-slate-300">
            <p className="flex items-center gap-3"><Phone size={18} className="text-cyan-500" /> 7018154273</p>
            <p className="flex items-center gap-3"><Mail size={18} className="text-cyan-500" /> choudharyritik25853@gmail.com</p>
            <p className="flex items-center gap-3"><MapPin size={18} className="text-cyan-500" /> Grove Chambers, 36 Green Lane</p>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
