"use client";
import React, { useState } from "react";
import Image from "next/image";
import { HiPlus, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Kitchens",
    icon: "/img/kitchen.svg",
    image: "/img/service.png",
    content:
      "At LifetimeArt, we design and build stunning kitchens tailored to your style and needs. Whether you prefer sleek modern lines or a timeless, classic look, our team delivers premium craftsmanship, functional layouts, and meticulous attention to detail—creating a kitchen you’ll love to cook and gather in.",
  },
  {
    id: 2,
    title: "Loft Conversions",
    icon: "/img/loft.svg",
    image: "/img/5.png",
    content:
      "Transform unused loft space into a beautiful, practical part of your home. From cozy bedrooms to bright home offices, we handle everything from structural adjustments to finishing touches, ensuring your new space is safe, stylish, and seamlessly integrated with your existing home.",
  },
  {
    id: 3,
    title: "Bathrooms",
    icon: "/img/bathroom.svg",
    image: "/img/bathroom.png",
    content:
      "We create bathrooms that balance relaxation and practicality, with designs ranging from spa-inspired retreats to minimalist, functional spaces. Our team sources high-quality fixtures and finishes, ensuring durability, elegance, and comfort for years to come.",
  },
  {
    id: 4,
    title: "Extensions",
    icon: "/img/extension.svg",
    image: "/img/extension.png",
    content:
      "Expand your living space without compromising on style. Whether it’s a kitchen extension, a new family room, or an entire additional floor, we work closely with you to design and build an extension that complements your home and adds value.",
  },
  {
    id: 5,
    title: "Restoration",
    icon: "/img/restoration.svg",
    image: "/img/restoration.png",
    content:
      "Preserve the charm of your property while upgrading it for modern living. Our restoration work combines traditional craftsmanship with modern techniques to breathe new life into historic or worn-down spaces.",
  },
  {
    id: 6,
    title: "External Works",
    icon: "/img/external-work.svg",
    image: "/img/restoration.png",
    content:
      "Enhance the beauty and functionality of your outdoor areas. From garden landscaping to patios, pathways, and exterior lighting, we create inviting spaces that connect your home to nature.",
  },
];

const Service = () => {
  const [activeId, setActiveId] = useState<number | null>(items[0].id);

  // Default ke item pertama kalau undefined
  const activeItem = items.find((item) => item.id === activeId) ?? items[0];
  return (
    <div className="bg-white py-20">
      <div className="mx-auto max-w-8xl px-8 md:px-8 lg:px-8 items-center">
        <div className="text-center">
          <span className="py-1.5 px-3 text-sm bg-[#101014] rounded-full text-white">
            Services
          </span>
          <h2 className="text-5xl text-[#2D2E32] font-medium leading-tight mt-4">
            What we do
          </h2>
          <p className="text-md font-light text-gray-700 mt-4">
            Find out which one of our services fit the needs of your project
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start mt-20">
          {/* Gambar Kiri */}
          <motion.div
            key={activeItem.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src={activeItem.image}
              alt={activeItem.title}
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Accordion Kanan */}
          <div className="flex flex-col gap-4">
            {items.map((item) => {
              const isActive = activeId === item.id;

              return (
                <div key={item.id} className="border-b border-gray-200 pb-4">
                  <button
                    className="flex items-center justify-between w-full"
                    onClick={() => setActiveId(isActive ? null : item.id)}
                  >
                    <div className="flex items-center gap-4">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={40}
                        height={40}
                      />
                      <span className="text-[20px] font-medium">
                        {item.title}
                      </span>
                    </div>
                    {isActive ? (
                      <HiX className="text-xl" />
                    ) : (
                      <HiPlus className="text-xl" />
                    )}
                  </button>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden py-8"
                      >
                        <p className="text-gray-500 text-[16px] font-[400] leading-relaxed">
                          {item.content}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
