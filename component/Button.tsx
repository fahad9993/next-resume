import React from "react";
import { FaFileDownload } from "react-icons/fa";

type buttonProps = {
  handlePress: () => void;
};

export default function Button({ handlePress }: buttonProps) {
  return (
    <button
      onClick={handlePress}
      className="bg-primary p-3 md:p-5 rounded-full text-amber-5 font-bold bottom-5 right-5 lg:bottom-10 lg:right-10 fixed text-white hover:cursor-pointer hover:bg-secondary print:hidden"
    >
      <FaFileDownload className="w-5 h-5 md:w-10 md:h-10" />
    </button>
  );
}
