import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-white pt-2">
      <div className="mx-auto max-w-8xl px-8 md:px-8 lg:px-8">
        <div className="bg-[#101014] px-6 py-12 rounded-t-xl mt-6">
          <div className="flex flex-col md:flex-row items-start justify-between w-full">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <Image src="/img/logo.svg" alt="logo" width={32} height={32} />
              <h2 className="text-xl font-bold text-white">LifetimeArt</h2>
            </div>

            <div className="w-full md:w-auto">
              <h2 className="text-white text-lg font-medium mb-5">
                Quick links
              </h2>
              <div className="grid grid-cols-2 gap-x-10 gap-y-5">
                <div className="text-white text-md font-light">About us</div>
                <div className="text-white text-md font-light">
                  Testimonials
                </div>
                <div className="text-white text-md font-light">Our work</div>
                <div className="text-white text-md font-light">FAQs</div>
                <div className="text-white text-md font-light">Services</div>
                <div className="text-white text-md font-light">Contact</div>
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-gray-800 my-6"></div>

          <div className="text-white text-md font-medium">
            © {new Date().getFullYear()} LifetimeArt. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
