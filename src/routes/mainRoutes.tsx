import React from "react";
import { Navigate } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import BookingPage from "@/pages/booking";
import ThankYouPage from "@/pages/thank-you";

const mainRoutes = [
  {
    path: "/",
    element: <HomePage />,
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
