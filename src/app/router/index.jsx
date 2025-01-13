import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../../components/main-layout";
import { Home } from "../../pages/home";
import { Cart } from "../../pages/cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/categories/:id",
        element: <Home />,
      },
      {
        path: "/products/:id",
      }
    ],
  },
]);
