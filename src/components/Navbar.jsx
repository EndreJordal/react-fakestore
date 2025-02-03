import { useQuery } from "@tanstack/react-query";
import { ClipLoader } from "react-spinners";
import { NavLink } from "react-router-dom";
import { Loader } from "./Loader";

const Navbar = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await fetch(
        "https://fakestoreapi.in/api/products/category"
      );
      if (!response.ok) throw new Error("Failed to fetch data");
      return response.json();
    },
  });

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Error: {error.message}</p>}
      {data?.categories && (
        <nav className="bg-gray-900 py-4 flex justify-center">
          <ul className="flex space-x-6">
            {data?.categories.map((category, i) => {
              return (
                <li key={i}>
                  <NavLink
                    to={`/category/${category}`}
                    className={({ isActive }) =>
                      `px-4 py-2 rounded-md transition-colors duration-300 ${
                        isActive
                          ? "text-orange-500"
                          : "text-gray-300 hover:text-white"
                      }`
                    }
                  >
                    {category[0].toUpperCase() + category.slice(1)}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </>
  );
};

export default Navbar;
