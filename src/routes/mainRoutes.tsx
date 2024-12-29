import { lazy } from "react";

const Index = lazy(() => import("@/pages/Index"));
const About = lazy(() => import("@/pages/about"));
const Contact = lazy(() => import("@/pages/contact"));
const Settings = lazy(() => import("@/pages/settings"));

export const mainRoutes = [
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
];
