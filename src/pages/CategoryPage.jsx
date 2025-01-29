import React from "react";
import { useParams } from "react-router-dom";
import { ProductCard } from "../components/ProductCard";
import { useQuery } from "@tanstack/react-query";
import { ClipLoader } from "react-spinners";

export const CategoryPage = () => {
  const { category } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["category", category],
    queryFn: async () => {
      const response = await fetch(
        `https://fakestoreapi.in/api/products/category?type=${category}`
      );
      if (!response.ok) throw new Error("Failed to fetch data");
      return response.json();
    },
  });

  return (
    <>
      {isLoading && <ClipLoader color="#333" size={40} />}
      {error && <p>Error: {error.message}</p>}
      {data?.products && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
          {data?.products.map(product => {
            return <ProductCard key={product.id} data={product} />;
          })}
        </div>
      )}
    </>
  );
};
