import React from "react";
import mastercard from "../../../public/mastercard.svg";
import visa from "../../../public/visa.svg";
import paypal from "../../../public/paypal.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-slate-300 lg:p-24 md:p-24 xs:p-12 mt-10">
      <div className="lg:flex md:flex xs:grid xs:grid-cols-1 justify-between">
        <div className="xs:mt-5">
          <h1 className="lg:text-2xl md:text-2xl font-semibold mb-1">NOSTRA</h1>
          <p className="text-md text-slate-600">
            Specializes in providing high-quality, stylish <br /> products for
            your wardrobe
          </p>
        </div>
        <div className="flex flex-col xs:mt-5 xs:gap-y-2 gap-y-4 text-slate-600">
          <h1 className="text-md font-semibold mb-1">SHOP</h1>
          <span>All Collections</span>
          <span>Winter Edition</span>
          <span>Discount</span>
        </div>
        <div className="flex flex-col xs:mt-5 xs:gap-y-2 gap-y-4 text-slate-600">
          <h1 className="text-md font-semibold mb-1">COMPANY</h1>
          <span>About Us</span>
          <span>Contact</span>
          <span>Affiliates</span>
        </div>
        <div className="flex flex-col xs:mt-5 xs:gap-y-2 gap-y-4 text-slate-600">
          <h1 className="text-md font-semibold mb-1">SUPPORT</h1>
          <span>FAQs</span>
          <span>Cookie Policy</span>
          <span>Terms of Use</span>
        </div>
        <div className="flex flex-col gap-y-4 text-slate-600">
          <h1 className="text-md font-semibold mb-1">PAYMENT METHODS</h1>
          <div className="flex gap-x-8">
            <Image src={mastercard} alt="master-card" width={30} />
            <Image src={visa} alt="visa" width={30} />
            <Image src={paypal} alt="paypal" width={30} />
          </div>
        </div>
      </div>
      <hr className="mt-10 text-slate-600" />
      <div className="text-center mt-10 text-slate-600">
        <p>Copyright © 2022 Nostra. All right reserved</p>
        <p>Design UI By Naufal Hafiizh From Dribble</p>
        <p>Develop UI By Rizky Dipahiyat</p>
      </div>
    </div>
  );
};

export default Footer;
