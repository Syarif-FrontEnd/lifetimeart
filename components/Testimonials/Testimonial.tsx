import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

import { MdStar } from "react-icons/md";

const testimonials = [
  {
    text: "Brilliant service from start to finish. The team was professional, communicative, and the results exceeded my expectations. My new bathroom looks amazing!",
    name: "Emily Carter",
    img: "/img/emily.png",
  },
  {
    text: "I couldn’t be happier with my loft conversion. The attention to detail and quality of work were outstanding. Refit made the whole process smooth and stress-free!",
    name: "Emily Carter",
    img: "/img/emily.png",
  },
  {
    text: "Refit transformed our outdoor space with a beautiful garden path. The work was completed on time, and the finish is excellent. A great team to work with!",
    name: "Emily Carter",
    img: "/img/emily.png",
  },
  {
    text: "The craftsmanship was outstanding, and the team was professional and communicative throughout. We couldn’t be happier with the result!",
    name: "Emily Carter",
    img: "/img/emily.png",
  },
  {
    text: "The craftsmanship was outstanding, and the team was professional and communicative throughout. We couldn’t be happier with the result!",
    name: "Emily Carter",
    img: "/img/emily.png",
  },
];

const Testimonial = () => {
  return (
    <div className="bg-white py-20">
      <div className="mx-auto max-w-8xl px-8 md:px-8 lg:px-8 items-center">
        <div className="text-center">
          <span className="py-1.5 px-3 text-sm bg-[#101014] rounded-full text-white">
            Testimonials
          </span>
          <h2 className="text-5xl text-[#2D2E32] font-medium leading-tight mt-4">
            Hear from our clients
          </h2>
          <p className="text-md font-light text-gray-700 mt-4 max-w-xs md:max-w-md lg:max-w-md mx-auto">
            Hear from our happy clients about their experience working with
            Refit and the quality of our craftsmanship.
          </p>
        </div>
      </div>
      <div className="space-y-4 py-8">
        {/* Baris atas: Bergerak ke kanan */}
        <Marquee
          gradient={false}
          speed={30}
          direction="right"
          pauseOnHover={true}
        >
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#f5f7fa] min-w-[250px] max-w-xs m-2 p-4 rounded-lg"
            >
              <div className="flex items-center gap-1">
                <MdStar className="text-lg text-black" />
                <MdStar className="text-lg text-black" />
                <MdStar className="text-lg text-black" />
                <MdStar className="text-lg text-black" />
                <MdStar className="text-lg text-black" />
              </div>
              <p className="text-sm text-gray-700 mb-12 mt-6">{item.text}</p>
              <div className="flex items-center">
                <Image
                  src={item.img}
                  alt={item.name}
                  width={32}
                  height={32}
                  className="rounded-full mr-2"
                />
                <span className="text-gray-900 text-sm font-medium">
                  {item.name}
                </span>
              </div>
            </div>
          ))}
        </Marquee>

        {/* Baris bawah: Bergerak ke kiri */}
        <Marquee
          gradient={false}
          speed={30}
          direction="left"
          pauseOnHover={true}
        >
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#f5f7fa] min-w-[250px] max-w-xs m-2 p-6 rounded-lg"
            >
              <div className="flex items-center gap-1">
                <MdStar className="text-lg text-black" />
                <MdStar className="text-lg text-black" />
                <MdStar className="text-lg text-black" />
                <MdStar className="text-lg text-black" />
                <MdStar className="text-lg text-black" />
              </div>
              <p className="text-sm text-gray-700 mb-12 mt-6">{item.text}</p>
              <div className="flex items-center">
                <Image
                  src={item.img}
                  alt={item.name}
                  width={32}
                  height={32}
                  className="rounded-full mr-2"
                />
                <span className="text-gray-900 text-sm font-medium">
                  {item.name}
                </span>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Testimonial;
