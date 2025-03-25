import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
      <h2 className="text-3xl font-bold">Gadget Heaven</h2>
      <p className="text-base font-medium text-[#09080F99]">
        Leading the way in cutting-edge technology and innovation.
      </p>
      <nav className="grid grid-flow-col gap-36 ">
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
  );
};

export default Footer;
