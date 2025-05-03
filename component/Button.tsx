import React from "react";
import { FaFileDownload } from "react-icons/fa";

type buttonProps = {
  handlePress: () => void;
};

export default function Button({ handlePress }: buttonProps) {
  return (
    <button
      onClick={handlePress}
      className="fixed bottom-5 right-5 lg:bottom-10 lg:right-10 z-50 w-12 h-12 md:w-16 md:h-16 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:bg-secondary active:scale-95 transition-all duration-200 print:hidden"
    >
      <FaFileDownload className="w-5 h-5 md:w-8 md:h-8" />
    </button>
  );
}
