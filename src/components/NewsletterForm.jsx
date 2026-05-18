import { useState } from "react";
import { Send } from "lucide-react";
import { subscribeToNewsletter } from "../services/petService";
import { useStore } from "../hooks/useStore";
import { isEmail } from "../utils/validators";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { showToast } = useStore();

  const submit = async (event) => {
    event.preventDefault();
    if (!isEmail(email)) {
      showToast("Enter a valid email address.", "error");
      return;
    }

    setLoading(true);
    try {
      await subscribeToNewsletter(email);
      setEmail("");
      showToast("Newsletter subscription confirmed.");
    } catch (error) {
      showToast(error.message, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit} className="mt-4 flex gap-2 rounded-full bg-white p-1">
      <input
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        type="email"
        placeholder="Email address"
        className="min-w-0 flex-1 rounded-full px-4 text-sm text-slate-900 outline-none"
        aria-label="Newsletter email"
      />
      <button type="submit" disabled={loading} className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-4 py-3 text-sm font-bold text-white transition hover:bg-cyan-600 disabled:cursor-not-allowed disabled:opacity-60">
        <Send size={16} />
        {loading ? "Sending" : "Join"}
      </button>
    </form>
  );
};

export default NewsletterForm;
