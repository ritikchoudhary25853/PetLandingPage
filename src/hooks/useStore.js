import { useContext } from "react";
import { StoreContext } from "../context/storeContextValue";

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) throw new Error("useStore must be used inside StoreProvider");
  return context;
}
