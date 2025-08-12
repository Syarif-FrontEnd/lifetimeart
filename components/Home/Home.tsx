import Image from "next/image";
import React from "react";

import { MdArrowOutward } from "react-icons/md";

const Home = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center">
      {/* Layer 1: Hitam full */}
      <div className="absolute inset-0 bg-black z-0" />

      {/* Layer 2: Gambar 80% lebar + overlay hitam */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-[80%] z-10 overflow-hidden">
        <Image
          src="/img/bg-hero.jpg"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay hitam di atas gambar */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Konten */}
      <div className="relative z-20 mx-auto w-full max-w-[1960px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 text-white text-sm px-2 py-1.5 rounded-full backdrop-blur">
            <span className="w-5 h-5 flex items-center justify-center rounded-full bg-white/30">
              <span className="w-2.5 h-2.5 rounded-full bg-white"></span>
            </span>
            Available for work
          </div>

          <h1 className="mt-6 text-white font-semibold text-4xl sm:text-5xl lg:text-[56px] leading-tight">
            Your trusted partner for quality home improvement
          </h1>

          <p className="mt-4 text-gray-200 text-base sm:text-lg max-w-lg">
            LifetimeArt delivers expert home improvements, creating beautiful
            and functional spaces with quality craftsmanship.
          </p>

          <button className="mt-8 inline-flex items-center gap-5 bg-white text-black px-5 py-3 rounded-full hover:bg-gray-200 transition-all duration-200 group">
            Work with us
            <MdArrowOutward className="text-4xl p-2 bg-black text-white rounded-full group-hover:bg-white group-hover:text-black" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
