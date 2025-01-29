import { useQuery } from "@tanstack/react-query";
import { ClipLoader } from "react-spinners";
import { NavLink } from "react-router-dom";

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
      {isLoading && <ClipLoader color="#333" size={40} />}
      {error && <p style={styles.error}>Error: {error.message}</p>}
      {data?.categories && (
        <nav className="bg-gray-900 py-4 flex justify-center">
          <ul className="flex space-x-6">
            {data?.categories.map((category, i) => {
              return (
                <li key={i}>
                  <NavLink
                    to={`/category/${category}`}
                    className="text-white text-lg hover:text-yellow-400 transition duration-300"
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
