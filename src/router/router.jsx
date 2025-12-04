import { createBrowserRouter } from "react-router";
import App from "../App";
import ProductPage from "../components/ProductPage";
import Layout from "../layout/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />,
        loader: () => fetch("/data.json"),
      },
      {
        path: "productPage/:id",
        loader: () => fetch("/data.json"),
        element: <ProductPage />,
      },
    ],
  },
]);
