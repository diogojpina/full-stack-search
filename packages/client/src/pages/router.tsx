import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SearchPage from "./search/search.page";
import HotelPage from "./hotel/hotel.page";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SearchPage />,
    },
    { path: "/hotel/:id", element: <HotelPage /> },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
