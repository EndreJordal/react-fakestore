import { useQuery } from "@tanstack/react-query";
import { ClipLoader } from "react-spinners";

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
      {error && <p>Error: {error.message}</p>}
      {data?.categories && (
        <nav>
          <ul>
            {data?.categories.map((category, i) => {
              return (
                <li key={i}>{category[0].toUpperCase() + category.slice(1)}</li>
              );
            })}
          </ul>
        </nav>
      )}
    </>
  );
};

export default Navbar;
