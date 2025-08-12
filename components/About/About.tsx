import React from "react";
import AboutSlider from "./AboutSlider";

const About = () => {
  return (
    <div className="bg-white py-20">
      <div className="mx-auto max-w-8xl px-8 md:px-8 lg:px-8 mb-24">
        <div className="flex-row md:flex items-start justify-between">
          <div className="flex flex-col items-start max-w-xl mb-8">
            <span className="px-4 py-1 bg-[#101014] rounded-full text-md font-medium text-white">
              About us
            </span>
            <h2 className="text-5xl text-[#2D2E32] font-medium leading-tight mt-4">
              Home <br /> Improvement <br /> Specialists
            </h2>
          </div>
          <div className="max-w-lg mt-10">
            <p className="text-lg text-[#323247] font-light">
              Welcome to LifetimeArt , your trusted home improvement experts,
              dedicated to transforming homes with precision and care. With
              years of experience in building kitchens, bathrooms, garages, and
              more, we take pride in delivering top-quality craftsmanship and a
              seamless customer experience. Our mission is to bring your vision
              to life while ensuring clear communication and expert guidance at
              every step. Let’s create a home you’ll love!
            </p>
          </div>
        </div>
      </div>
      <div className="mb-10">
        <AboutSlider />
      </div>
      <div className="mx-auto max-w-8xl px-8 md:px-8 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <div className="flex flex-col items-start gap-3">
            <h2 className="text-7xl font-light text-black">8</h2>
            <p className="text-xl font-light text-black">Years experience</p>
            <p className="text-lg font-light text-gray-500">
              Improving homes with expert craftmanship for years
            </p>
          </div>
          <div className="flex flex-col items-start gap-3">
            <h2 className="text-7xl font-light text-black">26</h2>
            <p className="text-xl font-light text-black">Projects completed</p>
            <p className="text-lg font-light text-gray-500">
              Over 250 successful projects delivered with quality and care
            </p>
          </div>
          <div className="flex flex-col items-start gap-3">
            <h2 className="text-7xl font-light text-black">30</h2>
            <p className="text-xl font-light text-black">
              Skilled Tradespeople
            </p>
            <p className="text-lg font-light text-gray-500">
              Our team of 30 experts ensures top-quality results
            </p>
          </div>
          <div className="flex flex-col items-start gap-3">
            <h2 className="text-7xl font-light text-black">100%</h2>
            <p className="text-xl font-light text-black">Client satisfaction</p>
            <p className="text-lg font-light text-gray-500">
              All of our clients are satisfied with our work and service
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
