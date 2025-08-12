"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { FaBarsStaggered, FaXmark } from "react-icons/fa6";

const Nav = () => {
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
    <section className="top-0 z-50 w-full">
      <div
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
          scrolled ? "bg-white" : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <header className="flex items-center justify-between py-4">
            <div className="flex items-center gap-2">
              <Image src="/img/logo.svg" alt="logo" width={40} height={40} />
              <h2 className="text-xl font-bold text-white">LifetimeArt</h2>
            </div>
            <nav className="hidden gap-7 md:flex items-center">
              <li className="list-none">
                <Link
                  href="/"
                  className="text-md font-semibold text-white hover:text-black"
                >
                  Home
                </Link>
              </li>
              <li className="list-none">
                <Link
                  href="/"
                  className="text-md font-semibold text-white hover:text-black"
                >
                  Service
                </Link>
              </li>
              <li className="list-none">
                <Link
                  href="/"
                  className="text-md font-semibold text-white hover:text-black"
                >
                  Destination
                </Link>
              </li>
              <li className="list-none">
                <Link
                  href="/"
                  className="text-md font-semibold text-white hover:text-black"
                >
                  Testimoni
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
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="absolute top-20 left-0 w-full h-screen z-20 md:hidden"
              >
                <div className="flex flex-col gap-4 bg-white/30 backdrop-blur-md px-6 py-4">
                  <li className="list-none">
                    <Link
                      href="/"
                      className="text-md font-semibold text-white hover:text-black"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="list-none">
                    <Link
                      href="/"
                      className="text-md font-semibold text-white hover:text-black"
                    >
                      Service
                    </Link>
                  </li>
                  <li className="list-none">
                    <Link
                      href="/"
                      className="text-md font-semibold text-white hover:text-black"
                    >
                      Destination
                    </Link>
                  </li>
                  <li className="list-none">
                    <Link
                      href="/"
                      className="text-md font-semibold text-white hover:text-black"
                    >
                      Testimoni
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
    </section>
  );
};

export default Nav;
