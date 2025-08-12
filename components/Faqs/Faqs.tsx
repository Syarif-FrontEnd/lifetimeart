import React, { useState } from "react";

import { MdArrowOutward } from "react-icons/md";
import { HiPlus, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    id: 1,
    question: "What area are you based in?",
    answer:
      "We primarily serve London and the surrounding areas, but depending on the project, we can travel further. Contact us to discuss your location and requirements.",
  },
  {
    id: 2,
    question: "How long does a typical project take?",
    answer:
      " Project timelines vary depending on size and complexity. We’ll provide an estimated schedule during your consultation and keep you updated throughout the process.",
  },
  {
    id: 3,
    question: "Do you offer free quotes?",
    answer:
      "Yes, we offer free, no-obligation quotes. Our team will visit your property, assess your needs, and provide a detailed breakdown.",
  },
  {
    id: 4,
    question: "Will I need planning permission for my project? ",
    answer:
      "This depends on the type and scope of your project. We can guide you through local regulations and help with applications if needed.",
  },
  {
    id: 5,
    question: "Do you provide a guarantee for your work?",
    answer:
      " Absolutely. All of our work is backed by a guarantee for quality and durability, giving you peace of mind.",
  },
  {
    id: 6,
    question: "Can I stay in my home while the work is being done?",
    answer:
      "In most cases, yes—though it may depend on the scope of work and areas affected. We’ll discuss options to minimise disruption.",
  },
  {
    id: 7,
    question: "How do I get started with a project?",
    answer:
      "Simply get in touch with our team. We’ll arrange a consultation, discuss your ideas, and prepare a tailored plan and quote.",
  },
];

const Faqs = () => {
  const [activeId, setActiveId] = useState<number | null>(items[0].id);

  return (
    <div className="bg-white py-20">
      <div className="mx-auto max-w-8xl px-8 md:px-8 lg:px-8 items-center">
        <div className="text-center mb-20">
          <span className="py-1.5 px-3 text-sm bg-[#101014] rounded-full text-white">
            FAQs
          </span>
          <h2 className="text-5xl text-[#2D2E32] font-medium leading-tight mt-4">
            Answering Your Questions
          </h2>
          <p className="text-md font-light text-gray-700 mt-4">
            Got more questions? Send us your enquiry below
          </p>
          <div className="mt-16 inline-flex items-center">
            <button className="inline-flex items-center gap-5 bg-gray-200 text-black px-5 py-3 rounded-full">
              Get in touch
              <MdArrowOutward className="text-4xl p-2 bg-[#101014] text-white rounded-full" />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {items.map((item) => {
            const isActive = activeId === item.id;

            return (
              <div
                key={item.id}
                className="border-b border-gray-100 bg-gray-50 rounded-xl px-3 py-6 pb-4"
              >
                <button
                  className="flex items-center justify-between gap-2 w-full"
                  onClick={() => setActiveId(isActive ? null : item.id)}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-[20px] font-medium text-left">
                      {item.question}
                    </span>
                  </div>
                  {isActive ? (
                    <HiX className="text-[20px] font-medium text-right" />
                  ) : (
                    <HiPlus className="text-[20px] font-medium text-right" />
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
                        {item.answer}
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
  );
};

export default Faqs;
