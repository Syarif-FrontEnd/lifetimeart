// import Home from "@/components/Home/Home";
// import Nav from "@/components/Navbar/Nav";
"use client";
import React, { useEffect, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";

import Image from "next/image";
import Link from "next/link";
import About from "@/components/About/About";
import Service from "@/components/Service/Service";
import Work from "@/components/Work/Work";
import Testimonial from "@/components/Testimonials/Testimonial";
import Faqs from "@/components/Faqs/Faqs";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

const HomePage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="bg-[#101014]">
      {/* Navigation */}
      <div
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
          scrolled ? "bg-[#101014]" : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <header className="flex items-center justify-between py-4">
            <div className="flex items-center gap-2">
              <Image src="/img/logo.svg" alt="logo" width={32} height={32} />
              <h2 className="text-xl font-bold text-white">LifetimeArt</h2>
            </div>
            <nav className="hidden gap-7 md:flex items-center">
              <li className="list-none">
                <Link
                  href="/"
                  className="text-md font-semibold text-white hover:text-black"
                >
                  About
                </Link>
              </li>
              <li className="list-none">
                <Link
                  href="/"
                  className="text-md font-semibold text-white hover:text-black"
                >
                  Services
                </Link>
              </li>
              <li className="list-none">
                <Link
                  href="/"
                  className="text-md font-semibold text-white hover:text-black"
                >
                  Our Work
                </Link>
              </li>
              <li className="list-none">
                <Link
                  href="/"
                  className="text-md font-semibold text-white hover:text-black"
                >
                  FAQs
                </Link>
              </li>
              <li className="list-none">
                <Link
                  href="/"
                  className="text-md font-semibold text-white hover:text-black"
                >
                  Contact
                </Link>
              </li>
            </nav>
            <div className="flex md:hidden">
              <button
                className="p-2 text-white"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <FaXmark className="text-xl" />
                ) : (
                  <FaBarsStaggered className="text-xl" />
                )}
              </button>
            </div>
          </header>
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                className="fixed top-20 left-0 w-full z-20 md:hidden"
              >
                <div className="flex flex-col justify-center items-center gap-4 bg-black/30 backdrop-blur-md w-full h-[100vh] px-6 py-4">
                  <li className="list-none">
                    <Link
                      href="/"
                      className="text-md font-semibold text-white hover:text-black"
                    >
                      About
                    </Link>
                  </li>
                  <li className="list-none">
                    <Link
                      href="/"
                      className="text-md font-semibold text-white hover:text-black"
                    >
                      Services
                    </Link>
                  </li>
                  <li className="list-none">
                    <Link
                      href="/"
                      className="text-md font-semibold text-white hover:text-black"
                    >
                      Our work
                    </Link>
                  </li>
                  <li className="list-none">
                    <Link
                      href="/"
                      className="text-md font-semibold text-white hover:text-black"
                    >
                      FAQs
                    </Link>
                  </li>
                  <li className="list-none">
                    <Link
                      href="/"
                      className="text-md font-semibold text-white hover:text-black"
                    >
                      Contact
                    </Link>
                  </li>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Hero Section */}
      <div className="pt-24 pb-4 px-4 min-h-[560px]">
        <div className="relative w-full h-full min-h-[560px] overflow-hidden rounded-xl">
          <Image
            src="/img/bg-hero.jpg"
            alt="Hero"
            fill
            className="md:object-fill object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70"></div>

          <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-8 lg:px-8 mt-30 lg:mt-60">
            <div className="flex flex-col items-start gap-[24px]">
              <div className="inline-flex items-center gap-2 bg-[#28282c] text-white text-sm px-3 py-2 rounded-full">
                <span className="w-5 h-5 flex items-center justify-center rounded-full bg-white/30">
                  <span className="w-2.5 h-2.5 rounded-full bg-white"></span>
                </span>
                Available for work
              </div>

              <h1 className=" text-white font-medium text-6xl md:text-7xl lg:text-7xl leading-tight">
                Your trusted partner for quality home improvement
              </h1>

              <p className=" text-gray-200 text-sm sm:text-lg max-w-md">
                LifetimeArt delivers expert home improvements, creating
                beautiful and functional spaces with quality craftsmanship.
              </p>
            </div>
            <div className="mt-16 inline-flex items-center">
              <button className="inline-flex items-center gap-5 bg-white/10 backdrop-blur-md text-white px-5 py-3 rounded-full">
                Work with us
                <MdArrowOutward className="text-4xl p-2 bg-white text-black rounded-full" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <About />
      <Service />
      <Work />
      <Testimonial />
      <Faqs />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
