import React from "react";

import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-8xl px-8 md:px-8 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-20 md:gap-20 lg:gap-0 bg-[#101014] px-4 py-12 rounded-xl mt-20">
          <div className="flex flex-col items-start max-w-xl gap-5">
            <span className="px-4 py-1 bg-white/10 rounded-full text-md font-medium text-white">
              Contact
            </span>
            <h2 className="text-5xl text-white font-medium leading-tight mt-4">
              Get in touch
            </h2>
            <p className="text-gray-200 max-w-md text-md font-light">
              For any inquiries or to explore your vision further, we invite you
              to contact our professional team using the details provided below.
            </p>
            <div className="flex flex-col items-start gap-2">
              <span className="text-md font-normal text-white">Office</span>
              <p className="text-gray-200 max-w-md text-sm font-light">
                150 Old Park Ln, London W1K 1QZ
              </p>
            </div>
            <div className="flex flex-col items-start gap-2">
              <span className="text-md font-normal text-white">Email</span>
              <p className="text-gray-200 max-w-md text-sm font-light">
                hello@refit.com
              </p>
            </div>
            <div className="flex flex-col items-start gap-2">
              <span className="text-md font-normal text-white">Telephone</span>
              <p className="text-gray-200 max-w-md text-sm font-light">
                07716 534984
              </p>
            </div>

            <div className="w-full h-px bg-gray-800 my-6"></div>

            <div className="flex flex-col items-start gap-2">
              <span className="text-md font-normal text-white">Follow us</span>
              <div className="flex items-center gap-2">
                <FaInstagram className="text-2xl text-white" />
                <FaTiktok className="text-2xl text-white" />
                <FaXTwitter className="text-2xl text-white" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block font-medium mb-1">
                  Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#101014]"
                  placeholder="John Smith"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-medium mb-1">
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#101014]"
                  placeholder="johnsmith@gmail.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block font-medium mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#101014]"
                  placeholder="+44789 123456"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-medium mb-1">
                  Message<span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#101014]"
                  placeholder="Hello, I'd like to enquire about..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-[#101014]/80 text-white px-6 py-3 rounded hover:[#101014]/60 transition duration-200 w-full"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
