import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SearchPage from "./search/search.page";
import HotelPage from "./hotel/hotel.page";
import CountryPage from "./country/country.page";
import CityPage from "./city/city.page";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SearchPage />,
    },
    { path: "/hotel/:id", element: <HotelPage /> },
    { path: "/country/:id", element: <CountryPage /> },
    { path: "/city/:id", element: <CityPage /> },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
