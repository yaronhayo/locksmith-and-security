import React from "react";
import { Navigate } from "react-router-dom";
import Index from "@/pages/Index";
import BookingPage from "@/pages/booking";
import ThankYouPage from "@/pages/thank-you";

export const mainRoutes = [
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/booking",
    element: <BookingPage />,
  },
  {
    path: "/thank-you",
    element: <ThankYouPage />,
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
];

export default mainRoutes;