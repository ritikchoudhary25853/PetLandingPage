import { Outlet } from "react-router-dom";
import CartDrawer from "./CartDrawer";
import Footer from "./Footer";
import NavBar from "./NavBar";
import ScrollManager from "./ScrollManager";
import ToastStack from "./ToastStack";

const Layout = () => (
  <div className="min-h-screen bg-[#f7fbf5] text-slate-900 transition-colors dark:bg-slate-950 dark:text-white">
    <ScrollManager />
    <NavBar />
    <main>
      <Outlet />
    </main>
    <Footer />
    <CartDrawer />
    <ToastStack />
  </div>
);

export default Layout;
