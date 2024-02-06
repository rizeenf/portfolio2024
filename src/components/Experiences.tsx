import React from "react";

const Experiences = () => {
  return (
    <div className="bio flex flex-col justify-center gap-12 pb-48">
      <h2 className="font-bold text-2xl justify-center">EXPERIENCES</h2>
      <div className="itemlists">
        <div className="items flex flex-row justify-between h-48">
          <div className="left flex-[2]">
            <h2 className="bg-white w-fit p-3 font-semibold rounded-lg">
              Frontend Developer Freelancer
            </h2>
            <h3 className="text-sm italic p-3">
              Slicing and convert design to a React.js or Next.js source code,
              Create open source projects for people to use.
            </h3>
            <h4 className="p-3 text-sm text-red-400 font-semibold">
              Des 2023 - Present
            </h4>
          </div>
          <div className="center flex-[1] flex justify-center">
            <div className="line w-px h-full bg-gray-700 rounded relative">
              <div className="h-6 w-6 bg-white ring-4 ring-red-300 absolute top-0 -left-3 rounded-full" />
            </div>
          </div>
          <div className="right flex-[2] "></div>
        </div>

        <div className="items flex flex-row-reverse justify-between h-48">
          <div className="left flex-[2]">
            <h2 className="bg-white w-fit p-3 font-semibold rounded-lg">
              After Sales & PPIC
            </h2>
            <h3 className="text-sm italic p-3">
              Forecasting spare part for aftersales needs, cost calculation to
              estimate profit/loss every project
            </h3>
            <h4 className="p-3 text-sm text-red-400 font-semibold">
              Mar 2020 - Nov 2023
            </h4>
            <h4 className="p-1 rounded bg-white text-sm font-semibold w-fit">
              Kikijaya Airconindo
            </h4>
          </div>
          <div className="center flex-[1] flex justify-center">
            <div className="line w-px h-full bg-gray-700 rounded relative">
              <div className="h-6 w-6 bg-white ring-4 ring-red-300 absolute top-0 -left-3 rounded-full" />
            </div>
          </div>
          <div className="right flex-[2] "></div>
        </div>

        {/* Jobs 2 */}
        <div className="items flex flex-row-reverse justify-between h-48">
          <div className="right flex-[2] "></div>
          <div className="center flex-[1] flex justify-center">
            <div className="line w-px h-full bg-gray-700 rounded relative">
              <div className="h-6 w-6 bg-white ring-4 ring-red-300 absolute top-0 -left-3 rounded-full" />
            </div>
          </div>
          <div className="left flex-[2]">
            <h2 className="bg-white w-fit p-3 font-semibold rounded-lg">
              Logistic Operator
            </h2>
            <h3 className="text-sm italic p-3">
              Responsible for part received not in defect, shortage, miss-part,
              or mix-part conditions Responsible to keeping stock ready for
              production and delivery need
            </h3>
            <h4 className="p-3 text-sm text-red-400 font-semibold">
              Jan 2018 - Feb 2020
            </h4>
            <h4 className="p-1 rounded bg-white text-sm font-semibold w-fit">
              Sugity Creatives
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
