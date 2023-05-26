import Image from "next/image";
import React from "react";
import { IoCartOutline } from "react-icons/io5";
import featured1 from "../../../public/featued1.avif";
import featured2 from "../../../public/featured2.avif";
import featured3 from "../../../public/featured3.avif";

const FeaturedCard = () => {
  return (
    <div className="mt-10">
      <h1 className="lg:text-2xl font-semibold mb-10">Featured products</h1>
      <div className="lg:flex md:flex xs:grid xs:grid-col-1 items-center justify-between">
        <div className="relative xs:mb-10">
          <Image
            src={featured1}
            className="object-cover lg:w-[25rem] lg:h-[35rem] md:w-[25rem] md:h-[35rem] xs:w-[32rem] xs:h-[35rem] rounded-md"
            alt="women with jacket"
          />
          <button className="flex items-center gap-x-10 px-2 py-1 text-sm absolute top-4 ml-4 bg-red-600 text-white rounded-md">
            SALE
          </button>
          <div className="flex items-center justify-between">
            <div className="mt-5">
              <h4 className="text-lg">Jacket Overcoat</h4>
              <h3 className="text-2xl font-semibold">
                $200{" "}
                <span className="text-sm font-normal">
                  <del>$225</del>
                </span>
              </h3>
            </div>
            <div className="bg-slate-800 hover:bg-slate-600 p-4 rounded-md">
              <IoCartOutline size={30} className="text-white" />
            </div>
          </div>
        </div>
        <div className="relative xs:mb-10">
          <Image
            src={featured2}
            className="object-cover lg:w-[25rem] lg:h-[35rem] md:w-[25rem] md:h-[35rem] xs:w-[32rem] xs:h-[35rem] rounded-md"
            alt="women with jacket"
          />
          <button className="flex items-center gap-x-10 px-2 py-1 text-sm absolute top-4 ml-4 bg-red-600 text-white rounded-md">
            SALE
          </button>
          <div className="flex items-center justify-between">
            <div className="mt-5">
              <h4 className="text-lg">Men Blazer Jas</h4>
              <h3 className="text-2xl font-semibold">
                $100{" "}
                <span className="text-sm font-normal">
                  <del>$135</del>
                </span>
              </h3>
            </div>
            <div className="bg-slate-800  hover:bg-slate-600 p-4 rounded-md">
              <IoCartOutline size={30} className="text-white" />
            </div>
          </div>
        </div>
        <div className="relative xs:mb-10">
          <Image
            src={featured3}
            className="object-cover lg:w-[25rem] lg:h-[35rem] md:w-[25rem] md:h-[35rem] xs:w-[32rem] xs:h-[35rem] rounded-md"
            alt="women with jacket"
          />
          <button className="flex items-center gap-x-10 px-2 py-1 text-sm absolute top-4 ml-4 bg-red-600 text-white rounded-md">
            SALE
          </button>
          <div className="flex items-center justify-between">
            <div className="mt-5">
              <h4 className="text-lg">Jacket Heater</h4>
              <h3 className="text-2xl font-semibold">
                $200{" "}
                <span className="text-sm font-normal">
                  <del>$250</del>
                </span>
              </h3>
            </div>
            <div className="bg-slate-800  hover:bg-slate-600 p-4 rounded-md">
              <IoCartOutline size={30} className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
