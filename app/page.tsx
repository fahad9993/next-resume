"use client";
import Button from "@/component/Button";
import Courses from "@/component/Courses";
import Education from "@/component/Education";
import Experience from "@/component/Experience";
import Header from "@/component/Header";
// import Reference from "@/component/Reference";
import Skills from "@/component/Skills";
import Summary from "@/component/Summary";
import Thesis from "@/component/Thesis";
import { promiseMessage } from "@/component/Toaster";
import { toast } from "react-toastify";

export default function Home() {
  const handleDownload = async () => {
    const isDev = process.env.NODE_ENV === "development";

    if (isDev) {
      // Call the local API route to run the script for generating the PDF
      await toast.promise(fetch("/api/generate-pdf"), promiseMessage);
    } else {
      // In production, use the existing PDF generation API route
      const response = await toast.promise(fetch("/api/pdf"), promiseMessage);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Fahad_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="min-h-screen flex justify-center md:bg-gray-100 print:bg-white py-10 print:py-0 overflow-auto">
      {/* Download Button (Hidden on print) */}
      <Button handlePress={handleDownload} />
      <div className="md:w-[794px] md:h-[1122px] bg-white md:shadow-md print:shadow-none print:p-0">
        <Header />
        <div className="md:flex print:flex md:gap-10 print:gap-10 w-full padding-x">
          {/******* Column 1 *******/}
          <div className="md:w-[60%] print:w-[60%]">
            <Summary />
            <Experience />
          </div>
          {/******* Column 2 *******/}
          <div className="md:w-[40%] print:w-[40%]">
            <Skills />
            <Education />
            <Thesis />
            <Courses />
            {/* <Reference /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
