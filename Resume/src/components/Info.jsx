import React from "react";
import { Separator } from "@/components/ui/separator";

const Info = () => {
  return (
    <div className="flex justify-between">
      <div className="ml-[400px] max-w-sm text-left">
        <h1 className="text-2xl mb-2 font-bold">
          Name:{" "}
          <span className="p-3 text-2xl font-normal inline">Shane Taylor</span>
        </h1>
        <Separator className="mt-3 mb-3" />
        <h1 className="text-2xl mb-2 font-bold">
          Pronouns:{" "}
          <span className="p-3 text-2xl mb-2 font-normal inline">He/Him</span>
        </h1>
        <Separator className="mt-3 mb-3" />
        <h1 className="text-2xl mb-2 font-bold">
          School:{" "}
          <span className="p-3 text-2xl mb-2 font-normal inline">UMBC</span>
        </h1>
        <Separator className="mt-3 mb-3" />
        <h1 className="text-2xl mb-2 font-bold">
          Age: <span className="p-3 text-2xl mb-2 font-normal inline">21</span>
        </h1>
        <Separator className="mt-3 mb-3" />
        <h1 className="text-2xl mb-2 font-bold">
          Location:{" "}
          <span className="p-3 text-2xl mb-2 font-normal inline">Maryland</span>
        </h1>
      </div>

      <div className="right-text">
        <h1 className="text-current text-4xl font-bold mb-4">
          Coding Languages
        </h1>
        <p className="text-2xl mb-2">
          JavaScript | C++ | SQL | HTML | CSS | Python | Java | C
        </p>
      </div>
    </div>

    /*
    <div className="mx-[400px] pt-10 flex flex-col text-left ">
      <h1 className="text-current text-4xl font-bold mb-4">Shane Taylor</h1>
      <p className=" text-2xl mb-2">
        I'm a Computer Scientist seeking work in a Software or Web Development
        role. I am currently enrolled in the University of Maryland, Baltimore
        County and will be receiving my Computer Science Bachelor's Degree in
        May.
      </p>
      <br />
      <h1 className="text-current text-4xl font-bold mb-4">Coding Languages</h1>
      <p className=" text-2xl mb-2">
        JavaScript | C++ | SQL | HTML | CSS | Python | Java | C
      </p>
    </div>
  
  */
  );
};

export default Info;
