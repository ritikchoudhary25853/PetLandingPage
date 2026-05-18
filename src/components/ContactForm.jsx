import { useState } from "react";
import { Send } from "lucide-react";
import { sendContactMessage } from "../services/petService";
import { useStore } from "../hooks/useStore";
import { validateContactForm } from "../utils/validators";

const initialValues = { name: "", email: "", subject: "Adoption question", message: "" };

const ContactForm = () => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const { showToast } = useStore();

  const update = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  };

  const submit = async (event) => {
    event.preventDefault();
    const nextErrors = validateContactForm(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      showToast("Please fix the highlighted fields.", "error");
      return;
    }

    setLoading(true);
    try {
      await sendContactMessage(values);
      setValues(initialValues);
      showToast("Message sent. We will reply soon.");
    } catch {
      showToast("Something went wrong. Please try again.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit} className="rounded-3xl bg-white p-6 shadow-sm dark:bg-slate-900">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" value={values.name} onChange={update} error={errors.name} />
        <Field label="Email" name="email" type="email" value={values.email} onChange={update} error={errors.email} />
      </div>
      <label className="mt-4 block">
        <span className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200">Subject</span>
        <select name="subject" value={values.subject} onChange={update} className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none focus:border-cyan-500 dark:border-slate-700 dark:bg-slate-950">
          <option>Adoption question</option>
          <option>Volunteer</option>
          <option>Pet care support</option>
          <option>Partnership</option>
        </select>
      </label>
      <label className="mt-4 block">
        <span className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200">Message</span>
        <textarea name="message" value={values.message} onChange={update} rows="5" className="w-full rounded-2xl border border-slate-200 bg-white p-4 text-sm outline-none focus:border-cyan-500 dark:border-slate-700 dark:bg-slate-950" />
        {errors.message && <span className="mt-1 block text-xs font-semibold text-rose-500">{errors.message}</span>}
      </label>
      <button type="submit" disabled={loading} className="mt-5 inline-flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 font-bold text-white transition hover:bg-cyan-600 disabled:cursor-not-allowed disabled:opacity-60">
        <Send size={17} />
        {loading ? "Sending" : "Send message"}
      </button>
    </form>
  );
};

function Field({ label, name, type = "text", value, onChange, error }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200">{label}</span>
      <input name={name} type={type} value={value} onChange={onChange} className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none focus:border-cyan-500 dark:border-slate-700 dark:bg-slate-950" />
      {error && <span className="mt-1 block text-xs font-semibold text-rose-500">{error}</span>}
    </label>
  );
}

export default ContactForm;
