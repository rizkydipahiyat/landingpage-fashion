import Carousel from "@/components/carousel/Carousel";
import adidas from "../../public/adidas.svg";
import balenciaga from "../../public/balenciaga.svg";
import puma from "../../public/puma.svg";
import maitland from "../../public/maitland-trust.svg";
import champion from "../../public/champion.svg";
import nike from "../../public/nike.svg";
import tesla from "../../public/tesla-9.svg";
import Image from "next/image";
import {
  IoArrowForwardOutline,
  IoBagCheckOutline,
  IoCubeOutline,
  IoLeafOutline,
  IoMailOutline,
  IoPricetagOutline,
} from "react-icons/io5";
import voucher from "../../public/voucher.jpg";
import CardCurrated from "@/components/cardCurrated/CardCurrated";
import FeaturedCard from "@/components/featuredProductCard/FeaturedCard";

export default function Home() {
  return (
    <div className="container mx-auto p-4 w-full">
      <Carousel />
      {/* Brand Section */}
      <div className="mt-10">
        <h1 className="md:text-2xl font-semibold">Brands</h1>
        <div className="xs:grid xs:grid-cols-4 md:flex md:justify-center items-center gap-x-11 mt-5 text-slate-300">
          <Image
            className="xs:w-18"
            src={adidas}
            alt="adidas"
            width={100}
            height={100}
          />
          <Image
            className="xs:w-18"
            src={balenciaga}
            alt="balenciaga"
            width={100}
            height={100}
          />
          <Image
            className="xs:w-18"
            src={puma}
            alt="puma"
            width={100}
            height={100}
          />
          <Image
            className="xs:w-18"
            src={maitland}
            alt="maitland"
            width={100}
            height={100}
          />
          <Image
            className="xs:w-18"
            src={champion}
            alt="champion"
            width={100}
            height={100}
          />
          <Image
            className="xs:w-18"
            src={nike}
            alt="nike"
            width={100}
            height={100}
          />
          <Image
            className="xs:w-18"
            src={tesla}
            alt="tesla"
            width={100}
            height={100}
          />
        </div>
      </div>
      {/* End Brand Section */}
      {/* Experience Section */}
      <div className="flex items-center mt-[5rem]">
        <div className="basis-1/2">
          <h1 className="lg:text-4xl xs:text-2xl font-bold leading-10">
            We provide best <br /> customer experiences
          </h1>
        </div>
        <div className="basis-1/2 p-6 border-l-4 border-slate-900">
          <h6 className="text-slate-400">
            We ensure our customer have the best shopping experience
          </h6>
        </div>
      </div>
      {/* End Experience Section */}
      {/* Benefits Section */}
      <div className="lg:flex md:flex xs:grid xs:grid-cols-2 xs:gap-5 justify-between mt-[5rem] ">
        <div>
          <IoPricetagOutline
            className="bg-slate-200 p-3 rounded-md"
            size={50}
          />
          <h2 className="text-xl font-medium mt-3 mb-2">Original Products</h2>
          <p className="text-slate-400">
            We provide money back guarantee if the <br /> product are not
            original
          </p>
        </div>
        <div>
          <IoBagCheckOutline
            className="bg-slate-200 p-3 rounded-md"
            size={50}
          />
          <h2 className="text-xl font-medium mt-3 mb-2">
            Satisfaction Guarantee
          </h2>
          <p className="text-slate-400">
            Exchange the product you've purchased <br /> if it doesn&apos;t fit
            on you
          </p>
        </div>
        <div>
          <IoLeafOutline className="bg-slate-200 p-3 rounded-md" size={50} />
          <h2 className="text-xl font-medium mt-3 mb-2">
            New Arrival Everyday
          </h2>
          <p className="text-slate-400">
            We updates our collections almost <br /> everyday
          </p>
        </div>
        <div>
          <IoCubeOutline className="bg-slate-200 p-3 rounded-md" size={50} />
          <h2 className="text-xl font-medium mt-3 mb-2">
            Fast & Free Shipping
          </h2>
          <p className="text-slate-400">
            We offer fast and free shipping for our <br /> loyal customer
          </p>
        </div>
      </div>
      {/* End Benefits */}
      {/* Currated Picks Section */}
      <CardCurrated />
      {/* End Currated Picks Section */}
      {/* Feature Product Section */}
      <FeaturedCard />
      {/* End Feature Product Section */}
      {/* Voucher Section */}
      <div className="flex mt-10">
        <div className="basis-1/2 w-full">
          <Image
            src={voucher}
            className="object-cover rounded-l-2xl h-[20rem]"
            alt="disc"
          />
        </div>
        <div className="basis-1/2 bg-blue-950 h-[20rem] text-white rounded-r-2xl">
          <div className="mt-9 ml-10 xs:ml-5 xs:mt-20">
            <h6 className="tracking-wide text-2xl xs:text-sm text-slate-400">
              LIMIT OFFER
            </h6>
            <h1 className="text-6xl mt-5 xs:text-sm">
              35% off only this friday <br /> and get special gift
            </h1>
            <button className="flex items-center gap-x-5 px-3 py-2 mt-5 text-xl bg-slate-50 text-slate-900 rounded-md">
              Grab it now <IoArrowForwardOutline />{" "}
            </button>
          </div>
        </div>
      </div>
      {/* End Voucher Section */}
      {/* Newsletter */}
      <div className="mt-10 text-center">
        <h1 className="text-xl font-semibold">
          Subscribe to our newsletter to get updates <br /> to our latest
          collections
        </h1>
        <p className="text-slate-300 mt-2">
          Get 20% off on your first order just by subscribing to our newsletter
        </p>
        <div className="flex justify-center items-center mt-10 gap-x-3">
          <div className="flex items-center bg-slate-100 px-2 rounded-md">
            <IoMailOutline className="text-slate-400" size={20} />
            <input
              type="text"
              className="border-none outline-none py-2 px-3 bg-slate-100"
              placeholder="Enter your email"
            />
          </div>
          <button className="bg-slate-900 text-white rounded-md py-2 px-3">
            Subscribe
          </button>
        </div>
        <p className="mt-2 text-slate-400">
          You will be able to unsubscribe at any time.
        </p>
        <p className=" text-slate-400">
          Read our Privacy Policy{" "}
          <span className="border-b-2 border-slate-900 cursor-pointer text-slate-900">
            here
          </span>
        </p>
      </div>
      {/* End Newsletter */}
    </div>
  );
}
