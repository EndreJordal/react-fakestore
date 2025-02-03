import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "../components/Loader";

export const ProductPage = () => {
  const { productId } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["singleProduct", productId],
    queryFn: async () => {
      const response = await fetch(
        `https://fakestoreapi.in/api/products/${productId}`
      );
      if (!response.ok) throw new Error("Failed to fetch data");
      return response.json();
    },
  });
  const product = data?.product || {};
  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Error: {error.message}</p>}

      <div>
        <h3>{product.title}</h3>
      </div>
    </>
  );
};
