import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import About from "../pages/About";
import Sermon from "../pages/Sermon";
import Activities from "../pages/Activities";
import Conduct from "../pages/Conduct";
import Worship from "../pages/Worship";
import Event from "../pages/Event";
import Contact from "../pages/Contact";
import Gallery from "../pages/Gallery";
import HimPage from "../pages/HimPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/conduct",
        element: <Conduct />,
      },
      {
        path: "/worship",
        element: <Worship />,
      },
      {
        path: "/event",
        element: <Event />,
      },
      {
        path: "/sermon",
        element: <Sermon />,
      },
      {
        path: "/himPage",
        element: <HimPage />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
