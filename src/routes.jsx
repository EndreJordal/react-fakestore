import { createBrowserRouter, RouterProvider } from "react-router-dom";
//Layout
import Layout from "./Layout.jsx";
//Pages
import HomePage from "./pages/HomePage.jsx";
import { CategoryPage } from "./pages/CategoryPage.jsx";
import { ProductPage } from "./pages/ProductPage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/category/:category",
        element: <CategoryPage />,
      },
      {
        path: "/product/:productId",
        element: <ProductPage />,
      },
    ],
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
export default AppRoutes;
