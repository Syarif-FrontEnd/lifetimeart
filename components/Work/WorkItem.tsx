import React from "react";

import Image from "next/image";
import MobileWork from "./MobileWork";

const WorkItem = () => {
  return (
    <div className="bg-white">
      {/* Laptop Layout 1*/}
      <div className="hidden lg:flex gap-6 bg-[#E9ECF2] p-4 rounded-xl mt-20">
        {/* Gambar */}
        <div className="w-1/2">
          <Image
            src="/img/modern-kitchen.png"
            alt="Modern kitchen refit"
            width={600}
            height={400}
            className="rounded-lg object-cover w-full"
          />
        </div>

        {/* Teks + Quote */}
        <div className="flex flex-col gap-6 w-1/2">
          <div>
            <h2 className="text-[36px] font-semibold mb-4">
              Modern kitchen refit
            </h2>
            <p className="text-[16px] font-normal text-gray-600 mb-6">
              This kitchen transformation brought sleek, modern design and
              enhanced functionality to our client’s home. We installed custom
              cabinetry, high-quality worktops, and state-of-the-art appliances,
              creating a stylish yet practical space perfect for cooking and
              entertaining. With attention to every detail, we delivered a
              kitchen that balances aesthetics and usability.
            </p>
            <div className="flex gap-2 mb-4">
              <span className="bg-black text-white text-sm px-3 py-1 rounded-full">
                Kitchen
              </span>
              <span className="bg-black text-white text-sm px-3 py-1 rounded-full">
                4 weeks
              </span>
            </div>
          </div>

          <div className="rounded-lg">
            <div className="flex items-start gap-1">
              <Image src="/img/quote.png" alt="quote" width={24} height={24} />
              <blockquote className="text-[18px] font-normal text-gray-700 mb-4">
                LifetimeArt completely transformed our kitchen, making it both
                beautiful and highly functional. The craftsmanship was
                outstanding, and the team was professional and communicative
                throughout. We couldn’t be happier with the result!
              </blockquote>
            </div>
            <div className="flex items-center gap-3 ml-4">
              <Image
                src="/img/morgan.png"
                alt="Rachel Morgan"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="font-medium">Rachel Morgan</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet Layout 1*/}
      <div className="hidden md:grid lg:hidden grid-cols-2 grid-rows-2 gap-4 bg-[#E9ECF2] p-4 rounded-xl mt-20">
        <div>
          <Image
            src="/img/modern-kitchen.png"
            alt="Modern kitchen refit"
            width={600}
            height={400}
            className="rounded-lg object-cover w-full"
          />
        </div>
        <div>
          <h2 className="text-[36px] font-semibold mb-4">
            Modern kitchen refit
          </h2>
          <p className="text-[16px] font-normal text-gray-600 mb-6">
            This kitchen transformation brought sleek, modern design and
            enhanced functionality to our client’s home. We installed custom
            cabinetry, high-quality worktops, and state-of-the-art appliances,
            creating a stylish yet practical space perfect for cooking and
            entertaining. With attention to every detail, we delivered a kitchen
            that balances aesthetics and usability.
          </p>
          <div className="flex gap-2 mb-4">
            <span className="bg-black text-white text-sm px-3 py-1 rounded-full">
              Kitchen
            </span>
            <span className="bg-black text-white text-sm px-3 py-1 rounded-full">
              4 weeks
            </span>
          </div>
        </div>
        <div className="col-span-2 rounded-lg">
          <div className="flex items-start gap-1">
            <Image src="/img/quote.png" alt="quote" width={24} height={24} />
            <blockquote className="text-[18px] font-normal text-gray-700 mb-4">
              LifetimeArt completely transformed our kitchen, making it both
              beautiful and highly functional. The craftsmanship was
              outstanding, and the team was professional and communicative
              throughout. We couldn’t be happier with the result!
            </blockquote>
          </div>
          <div className="flex items-center gap-3 ml-4">
            <Image
              src="/img/morgan.png"
              alt="Rachel Morgan"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="font-medium">Rachel Morgan</span>
          </div>
        </div>
      </div>

      {/* Laptop Layout 2*/}
      <div className="hidden lg:flex gap-6 bg-[#101014] p-4 rounded-xl mt-20">
        {/* Gambar */}
        <div className="w-1/2">
          <Image
            src="/img/modern-kitchen.png"
            alt="Modern kitchen refit"
            width={600}
            height={400}
            className="rounded-lg object-cover w-full"
          />
        </div>

        {/* Teks + Quote */}
        <div className="flex flex-col gap-6 w-1/2">
          <div>
            <h2 className="text-[36px] font-semibold mb-4 text-white">
              Modern kitchen refit
            </h2>
            <p className="text-[16px] font-normal text-gray-200 mb-6">
              This kitchen transformation brought sleek, modern design and
              enhanced functionality to our client’s home. We installed custom
              cabinetry, high-quality worktops, and state-of-the-art appliances,
              creating a stylish yet practical space perfect for cooking and
              entertaining. With attention to every detail, we delivered a
              kitchen that balances aesthetics and usability.
            </p>
            <div className="flex gap-2 mb-4">
              <span className="bg-white text-black text-sm px-3 py-1 rounded-full">
                Kitchen
              </span>
              <span className="bg-white text-black text-sm px-3 py-1 rounded-full">
                4 weeks
              </span>
            </div>
          </div>

          <div className="rounded-lg">
            <div className="flex items-start gap-1">
              <Image
                src="/img/quote-white.png"
                alt="quote"
                width={24}
                height={24}
              />
              <blockquote className="text-[18px] font-normal text-gray-300 mb-4">
                LifetimeArt completely transformed our kitchen, making it both
                beautiful and highly functional. The craftsmanship was
                outstanding, and the team was professional and communicative
                throughout. We couldn’t be happier with the result!
              </blockquote>
            </div>
            <div className="flex items-center gap-3 ml-4">
              <Image
                src="/img/turner.png"
                alt="Rachel Morgan"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="font-medium text-white">Rachel Morgan</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet Layout 2*/}
      <div className="hidden md:grid lg:hidden grid-cols-2 grid-rows-2 gap-4 bg-[#101014] p-4 rounded-xl mt-20">
        <div>
          <Image
            src="/img/modern-kitchen.png"
            alt="Modern kitchen refit"
            width={600}
            height={400}
            className="rounded-lg object-cover w-full"
          />
        </div>
        <div>
          <h2 className="text-[36px] font-semibold mb-4 text-white">
            Modern kitchen refit
          </h2>
          <p className="text-[16px] font-normal text-gray-200 mb-6">
            This kitchen transformation brought sleek, modern design and
            enhanced functionality to our client’s home. We installed custom
            cabinetry, high-quality worktops, and state-of-the-art appliances,
            creating a stylish yet practical space perfect for cooking and
            entertaining. With attention to every detail, we delivered a kitchen
            that balances aesthetics and usability.
          </p>
          <div className="flex gap-2 mb-4">
            <span className="bg-white text-black text-sm px-3 py-1 rounded-full">
              Kitchen
            </span>
            <span className="bg-white text-black text-sm px-3 py-1 rounded-full">
              4 weeks
            </span>
          </div>
        </div>
        <div className="col-span-2 rounded-lg">
          <div className="flex items-start gap-1">
            <Image
              src="/img/quote-white.png"
              alt="quote"
              width={24}
              height={24}
            />
            <blockquote className="text-[18px] font-normal text-gray-300 mb-4">
              LifetimeArt completely transformed our kitchen, making it both
              beautiful and highly functional. The craftsmanship was
              outstanding, and the team was professional and communicative
              throughout. We couldn’t be happier with the result!
            </blockquote>
          </div>
          <div className="flex items-center gap-3 ml-4">
            <Image
              src="/img/turner.png"
              alt="Rachel Morgan"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="font-medium text-white">Rachel Morgan</span>
          </div>
        </div>
      </div>

      {/* Laptop Layout 3*/}
      <div className="hidden lg:flex gap-6 bg-[#E9ECF2] p-4 rounded-xl mt-20">
        {/* Gambar */}
        <div className="w-1/2">
          <Image
            src="/img/modern-kitchen.png"
            alt="Modern kitchen refit"
            width={600}
            height={400}
            className="rounded-lg object-cover w-full"
          />
        </div>

        {/* Teks + Quote */}
        <div className="flex flex-col gap-6 w-1/2">
          <div>
            <h2 className="text-[36px] font-semibold mb-4">
              Modern kitchen refit
            </h2>
            <p className="text-[16px] font-normal text-gray-600 mb-6">
              This kitchen transformation brought sleek, modern design and
              enhanced functionality to our client’s home. We installed custom
              cabinetry, high-quality worktops, and state-of-the-art appliances,
              creating a stylish yet practical space perfect for cooking and
              entertaining. With attention to every detail, we delivered a
              kitchen that balances aesthetics and usability.
            </p>
            <div className="flex gap-2 mb-4">
              <span className="bg-black text-white text-sm px-3 py-1 rounded-full">
                Kitchen
              </span>
              <span className="bg-black text-white text-sm px-3 py-1 rounded-full">
                4 weeks
              </span>
            </div>
          </div>

          <div className="rounded-lg">
            <div className="flex items-start gap-1">
              <Image src="/img/quote.png" alt="quote" width={24} height={24} />
              <blockquote className="text-[18px] font-normal text-gray-700 mb-4">
                LifetimeArt completely transformed our kitchen, making it both
                beautiful and highly functional. The craftsmanship was
                outstanding, and the team was professional and communicative
                throughout. We couldn’t be happier with the result!
              </blockquote>
            </div>
            <div className="flex items-center gap-3 ml-4">
              <Image
                src="/img/morgan.png"
                alt="Rachel Morgan"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="font-medium">Rachel Morgan</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet Layout 3*/}
      <div className="hidden md:grid lg:hidden grid-cols-2 grid-rows-2 gap-4 bg-[#E9ECF2] p-4 rounded-xl mt-20">
        <div>
          <Image
            src="/img/modern-kitchen.png"
            alt="Modern kitchen refit"
            width={600}
            height={400}
            className="rounded-lg object-cover w-full"
          />
        </div>
        <div>
          <h2 className="text-[36px] font-semibold mb-4">
            Modern kitchen refit
          </h2>
          <p className="text-[16px] font-normal text-gray-600 mb-6">
            This kitchen transformation brought sleek, modern design and
            enhanced functionality to our client’s home. We installed custom
            cabinetry, high-quality worktops, and state-of-the-art appliances,
            creating a stylish yet practical space perfect for cooking and
            entertaining. With attention to every detail, we delivered a kitchen
            that balances aesthetics and usability.
          </p>
          <div className="flex gap-2 mb-4">
            <span className="bg-black text-white text-sm px-3 py-1 rounded-full">
              Kitchen
            </span>
            <span className="bg-black text-white text-sm px-3 py-1 rounded-full">
              4 weeks
            </span>
          </div>
        </div>
        <div className="col-span-2 rounded-lg">
          <div className="flex items-start gap-1">
            <Image src="/img/quote.png" alt="quote" width={24} height={24} />
            <blockquote className="text-[18px] font-normal text-gray-700 mb-4">
              LifetimeArt completely transformed our kitchen, making it both
              beautiful and highly functional. The craftsmanship was
              outstanding, and the team was professional and communicative
              throughout. We couldn’t be happier with the result!
            </blockquote>
          </div>
          <div className="flex items-center gap-3 ml-4">
            <Image
              src="/img/morgan.png"
              alt="Rachel Morgan"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="font-medium">Rachel Morgan</span>
          </div>
        </div>
      </div>

      {/* Mobile Layout with Swiper */}
      <div className="md:hidden mt-20 p-4 rounded-xl">
        <MobileWork />
      </div>
    </div>
  );
};

export default WorkItem;
