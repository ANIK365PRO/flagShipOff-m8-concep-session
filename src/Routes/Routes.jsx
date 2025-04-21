import { createBrowserRouter } from 'react-router';

import MainLayout from '../MainLayout/MainLayout';

import Home from '../Pages/Home';
import About from '../Pages/About';
import Favorites from '../Pages/Favorites';
import PhoneDetails from '../Pages/PhoneDetails';
import ErrorPage from '../Pages/ErrorPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        hydrateFallbackElement: (
          <h2 className="text-4xl md:text-8xl">Loading, please wait....</h2>
        ),
        loader: () => fetch('./phones.json'),
        element: <Home></Home>,
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/favorites',
        element: <Favorites></Favorites>,
      },
      {
        path: '/phoneDetails',
        element: <PhoneDetails></PhoneDetails>,
      },
    ],
  },
]);
