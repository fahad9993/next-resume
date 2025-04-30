// app/page.tsx
import Courses from "@/component/Courses";
import Education from "@/component/Education";
import Experience from "@/component/Experience";
import Header from "@/component/Header";
import Skills from "@/component/Skills";
import Summary from "@/component/Summary";
import Thesis from "@/component/Thesis";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center bg-gray-100 print:bg-white py-10 print:py-0 overflow-auto">
      <div className="w-[794px] h-[1122px] bg-white shadow-md print:shadow-none print:p-0 print:w-full print:h-auto">
        <Header />
        {/******* Column 1 *******/}
        <div className="flex gap-10 w-full padding-x">
          <div className="w-[60%]">
            <Summary />
            <Experience />
          </div>
          {/******* Column 2 *******/}
          <div className="w-[40%]">
            <Skills />
            <Education />
            <Thesis />
            <Courses />
          </div>
        </div>
      </div>
    </div>
  );
}
