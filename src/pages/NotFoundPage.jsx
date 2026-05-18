import { Link } from "react-router-dom";
import EmptyState from "../components/EmptyState";

const NotFoundPage = () => (
  <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
    <EmptyState title="Page not found" text="The page you are looking for does not exist." />
    <div className="mt-6 text-center">
      <Link to="/" className="inline-flex rounded-full bg-cyan-500 px-6 py-3 font-bold text-white no-underline">
        Go home
      </Link>
    </div>
  </div>
);

export default NotFoundPage;
