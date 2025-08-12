import React from "react";

import WorkItem from "./WorkItem";

const Work = () => {
  return (
    <div className="bg-white py-20">
      <div className="mx-auto max-w-8xl px-8 md:px-8 lg:px-8 items-center">
        <div className="text-center">
          <span className="py-1.5 px-3 text-sm bg-[#101014] rounded-full text-white">
            Our work
          </span>
          <h2 className="text-5xl text-[#2D2E32] font-medium leading-tight mt-4 max-w-sm mx-auto">
            Get inspired by our work
          </h2>
          <p className="text-md font-light text-gray-700 mt-4 max-w-sm mx-auto">
            See how we’ve transformed homes with our expert craftsmanship and
            attention to detail.
          </p>
        </div>
        <WorkItem />
      </div>
    </div>
  );
};

export default Work;
