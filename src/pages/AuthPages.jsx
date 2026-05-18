import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LogIn, UserPlus } from "lucide-react";
import { useAuth } from "../hooks/useAuth";
import { useStore } from "../hooks/useStore";
import { validateAuthForm } from "../utils/validators";

const baseValues = { name: "", email: "", password: "" };

export const LoginPage = () => <AuthForm mode="login" />;
export const RegisterPage = () => <AuthForm mode="register" />;

const AuthForm = ({ mode }) => {
  const isRegister = mode === "register";
  const [values, setValues] = useState(baseValues);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const { login, register } = useAuth();
  const { showToast } = useStore();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/profile";

  const update = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  };

  const submit = async (event) => {
    event.preventDefault();
    const nextErrors = validateAuthForm(values, isRegister);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setLoading(true);
    try {
      if (isRegister) await register(values);
      else await login(values);
      showToast(isRegister ? "Account created." : "Welcome back.");
      navigate(from, { replace: true });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid min-h-[calc(100vh-72px)] place-items-center bg-[#f7fbf5] px-4 py-12 dark:bg-slate-950">
      <form onSubmit={submit} className="w-full max-w-md rounded-3xl bg-white p-6 shadow-sm dark:bg-slate-900">
        <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-cyan-100 text-cyan-700">
          {isRegister ? <UserPlus size={26} /> : <LogIn size={26} />}
        </div>
        <h1 className="text-3xl font-black text-slate-900 dark:text-white">{isRegister ? "Create account" : "Welcome back"}</h1>
        <p className="mt-2 text-sm text-slate-500">
          {isRegister ? "Save wishlists and adoption requests." : "Login to continue your adoption request."}
        </p>

        {isRegister && <Field label="Name" name="name" value={values.name} onChange={update} error={errors.name} />}
        <Field label="Email" name="email" type="email" value={values.email} onChange={update} error={errors.email} />
        <Field label="Password" name="password" type="password" value={values.password} onChange={update} error={errors.password} />

        <button type="submit" disabled={loading} className="mt-5 w-full rounded-full bg-cyan-500 px-6 py-3 font-bold text-white transition hover:bg-cyan-600 disabled:cursor-not-allowed disabled:opacity-60">
          {loading ? "Please wait" : isRegister ? "Register" : "Login"}
        </button>
        <p className="mt-5 text-center text-sm text-slate-500">
          {isRegister ? "Already have an account?" : "New to PawPal?"}{" "}
          <Link to={isRegister ? "/login" : "/register"} className="font-bold text-cyan-600 no-underline">
            {isRegister ? "Login" : "Create one"}
          </Link>
        </p>
      </form>
    </div>
  );
};

function Field({ label, name, type = "text", value, onChange, error }) {
  return (
    <label className="mt-4 block">
      <span className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200">{label}</span>
      <input name={name} type={type} value={value} onChange={onChange} className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none focus:border-cyan-500 dark:border-slate-700 dark:bg-slate-950" />
      {error && <span className="mt-1 block text-xs font-semibold text-rose-500">{error}</span>}
    </label>
  );
}
