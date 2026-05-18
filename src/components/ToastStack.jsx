import { CheckCircle, Info, XCircle } from "lucide-react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { useStore } from "../hooks/useStore";

const iconMap = {
  success: CheckCircle,
  error: XCircle,
  info: Info,
};

const toneMap = {
  success: "border-emerald-200 bg-emerald-50 text-emerald-900",
  error: "border-rose-200 bg-rose-50 text-rose-900",
  info: "border-cyan-200 bg-cyan-50 text-cyan-900",
};

const ToastStack = () => {
  const { toasts } = useStore();

  return (
    <div className="fixed right-4 top-20 z-50 flex w-[calc(100%-2rem)] max-w-sm flex-col gap-3">
      <AnimatePresence>
        {toasts.map((toast) => {
          const Icon = iconMap[toast.type] || Info;
          return (
            <Motion.div
              key={toast.id}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 24 }}
              className={`flex items-start gap-3 rounded-2xl border p-4 shadow-lg ${toneMap[toast.type] || toneMap.info}`}
              role="status"
            >
              <Icon size={20} className="mt-0.5 shrink-0" />
              <p className="text-sm font-semibold">{toast.message}</p>
            </Motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default ToastStack;
