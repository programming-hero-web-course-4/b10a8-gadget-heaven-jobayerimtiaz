import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded mt-10 p-10">
      <h2 className="text-3xl font-bold">Gadget Heaven</h2>
      <p className="text-base font-medium text-[#09080F99]">
        Leading the way in cutting-edge technology and innovation.
      </p>
      <nav className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-36 ">
        <div className="flex flex-col">
          <p className="text-lg font-bold">Services</p>
          <div className="flex flex-col text-base text-[#09080F99] font-normal py-3 space-y-2">
            <a className="link link-hover">Product Support</a>
            <a className="link link-hover">Order Tracking</a>
            <a className="link link-hover">Shipping & Delivery</a>
            <a className="link link-hover">Returns</a>
          </div>
        </div>
        <div>
          <p className="text-lg font-bold">Company</p>
          <div className="flex flex-col text-base text-[#09080F99] font-normal py-3 space-y-2">
            <a className="link link-hover">About Us</a>
            <a className="link link-hover">Careers</a>
            <a className="link link-hover">Contact</a>
          </div>
        </div>
        <div>
          <p className="text-lg font-bold">Company</p>
          <div className="flex flex-col text-base text-[#09080F99] font-normal py-3 space-y-2">
            <a className="link link-hover">Terms of Service</a>
            <a className="link link-hover">Privacy Policy</a>
            <a className="link link-hover">Cookie Policy</a>
          </div>
        </div>
      </nav>

      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Gadget
          Heaven
        </p>
      </aside>
    </footer>
    // <footer className="footer bg-base-200 text-base-content p-10">
    //   <div className="container mx-auto">
    //     {/* Branding Section */}
    //     <div className="text-center mb-8 md:mb-12">
    //       <h2 className="text-2xl md:text-3xl font-bold">Gadget Heaven</h2>
    //       <p className="text-sm md:text-base font-medium text-[#09080F99] mt-2 max-w-md mx-auto">
    //         Leading the way in cutting-edge technology and innovation.
    //       </p>
    //     </div>

    //     {/* Navigation Links - Responsive Grid */}
    //     <nav className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-24 mb-8">
    //       {/* Services Column */}
    //       <div className="text-center md:text-left">
    //         <h3 className="text-lg font-bold mb-3 md:mb-4">Services</h3>
    //         <div className="flex flex-col space-y-2 md:space-y-3">
    //           <a className="link link-hover text-sm md:text-base text-[#09080F99]">
    //             Product Support
    //           </a>
    //           <a className="link link-hover text-sm md:text-base text-[#09080F99]">
    //             Order Tracking
    //           </a>
    //           <a className="link link-hover text-sm md:text-base text-[#09080F99]">
    //             Shipping & Delivery
    //           </a>
    //           <a className="link link-hover text-sm md:text-base text-[#09080F99]">
    //             Returns
    //           </a>
    //         </div>
    //       </div>

    //       {/* Company Column */}
    //       <div className="text-center md:text-left">
    //         <h3 className="text-lg font-bold mb-3 md:mb-4">Company</h3>
    //         <div className="flex flex-col space-y-2 md:space-y-3">
    //           <a className="link link-hover text-sm md:text-base text-[#09080F99]">
    //             About Us
    //           </a>
    //           <a className="link link-hover text-sm md:text-base text-[#09080F99]">
    //             Careers
    //           </a>
    //           <a className="link link-hover text-sm md:text-base text-[#09080F99]">
    //             Contact
    //           </a>
    //         </div>
    //       </div>

    //       {/* Legal Column */}
    //       <div className="text-center md:text-left">
    //         <h3 className="text-lg font-bold mb-3 md:mb-4">Legal</h3>
    //         <div className="flex flex-col space-y-2 md:space-y-3">
    //           <a className="link link-hover text-sm md:text-base text-[#09080F99]">
    //             Terms of Service
    //           </a>
    //           <a className="link link-hover text-sm md:text-base text-[#09080F99]">
    //             Privacy Policy
    //           </a>
    //           <a className="link link-hover text-sm md:text-base text-[#09080F99]">
    //             Cookie Policy
    //           </a>
    //         </div>
    //       </div>
    //     </nav>

    //     {/* Copyright Section */}
    //     <div className="text-center pt-6 border-t border-base-300">
    //       <p className="text-xs md:text-sm text-[#09080F99]">
    //         Copyright © {new Date().getFullYear()} - All rights reserved by
    //         Gadget Heaven
    //       </p>
    //     </div>
    //   </div>
    // </footer>
  );
};

export default Footer;
