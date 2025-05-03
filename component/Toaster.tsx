"use client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const promiseMessage = {
  pending: "PDF generation started!",
  success: "PDF generation successfull",
  error: "Failed to generate PDF.",
};

export default function Toaster() {
  return (
    <ToastContainer
      toastClassName="max-w-md sm:max-w-[90vw] bg-gray-900 text-white rounded-lg shadow-md"
      position="top-center"
      autoClose={3000}
    />
  );
}
