import Image from "next/image";
import React from "react";
import women1 from "../../../public/women1.webp";
import women2 from "../../../public/women2.jpg";
import man1 from "../../../public/man1.jpg";
import womenandman from "../../../public/womenandman.jpg";
import { IoArrowForwardOutline } from "react-icons/io5";

const CardCurrated = () => {
  return (
    <div className="mt-11">
      <h1 className="lg:text-2xl md:text-2xl xs:text-xl font-semibold mb-5">
        Currated picks
      </h1>
      <div className="lg:flex md:flex xs:grid xs:grid-cols-1 xs:items-center xs:gap-5 items-center justify-between">
        <div className="relative">
          <Image
            src={women1}
            className="object-cover lg:w-[20rem] md:w-[20rem] lg:h-[20rem] md:h-[20rem] rounded-md"
            alt="women with jacket"
          />
          <button className="flex items-center gap-x-10 px-4 py-2 absolute bottom-10 ml-[5rem] bg-slate-100 rounded-md">
            Best Seller <IoArrowForwardOutline />
          </button>
        </div>
        <div className="relative">
          <Image
            src={women2}
            className="object-cover lg:w-[20rem] md:w-[20rem] lg:h-[20rem] md:h-[20rem] rounded-md"
            alt="women with jacket"
          />
          <button className="flex items-center gap-x-10 px-4 py-2 absolute bottom-10 ml-[5rem] bg-slate-100 rounded-md">
            Shop Women <IoArrowForwardOutline />
          </button>
        </div>
        <div className="relative">
          <Image
            src={womenandman}
            className="object-cover lg:w-[20rem] md:w-[20rem] lg:h-[20rem] md:h-[20rem] rounded-md"
            alt="women with jacket"
          />
          <button className="flex items-center gap-x-10 px-4 py-2 absolute bottom-10 ml-[5rem] bg-slate-100 rounded-md">
            Show Men <IoArrowForwardOutline />
          </button>
        </div>
        <div className="relative">
          <Image
            src={man1}
            className="object-cover lg:w-[20rem] md:w-[20rem] lg:h-[20rem] md:h-[20rem] rounded-md"
            alt="women with jacket"
          />
          <button className="flex items-center gap-x-10 px-4 py-2 absolute bottom-10 ml-[5rem] bg-slate-100 rounded-md">
            Shop Casual <IoArrowForwardOutline />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardCurrated;
