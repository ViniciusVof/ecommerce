import { Home } from "@pages/Home";
import { Product } from "@pages/Product";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product",
    element: <Product />,
  },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
