import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SearchPage from "./search/search.page";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SearchPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
