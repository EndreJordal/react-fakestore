import React from "react";
import { ClipLoader } from "react-spinners";

export const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <ClipLoader color="#333" size={40} />
    </div>
  );
};
