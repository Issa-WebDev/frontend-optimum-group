import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#222]">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4 text-red-600">404</h1>
        <p className="text-xl text-gray-100 mb-4">Oops! Page inexistante</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Retour à la page d'accueil
        </a>
      </div>
    </div>
  );
};

export default NotFound;
