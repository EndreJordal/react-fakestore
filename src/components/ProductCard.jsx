import React from "react";
import { Link } from "react-router-dom";

export const ProductCard = ({ data: product }) => {
  console.log(product);
  return (
    <Link
      to={`/product/${product.id}`}
      className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center text-center transition hover:shadow-xl w-full max-w-xs mx-auto"
    >
      {/* Product Image */}
      <img
        src={product.image}
        alt="product"
        className="w-32 h-32 object-contain mb-4"
      />

      {/* Product Details */}
      <p className="text-lg font-semibold">{product.title}</p>
      {product.brand && (
        <p className="text-sm text-gray-500">{product.brand}</p>
      )}
      {product.model && (
        <p className="text-sm text-gray-500">{product.model}</p>
      )}

      {/* Price (Highlight if On Sale) */}
      <p
        className={`mt-2 text-lg font-bold ${
          product.onSale ? "text-red-500" : "text-gray-800"
        }`}
      >
        ${product.price.toFixed(2)}
      </p>
    </Link>
  );
};
