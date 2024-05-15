import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import PrdouctCards from "@/components/ui/PrdouctCards";
import { Cardo } from "next/font/google";
import { BiSolidGrid } from "react-icons/bi";
import { FaList } from "react-icons/fa6";

export default function Home() {
  return (
    <>
      <div className="bg-black text-white">
        <Navbar />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 lg:gap-6 lg:max-w-7xl mx-auto p-6">
        <div className="col-span-3 ">
          <div className="flex justify-between items-center ">
            <h1 className="text-2xl font-semibold">Our All Products</h1>
            <div className="flex items-center">
              <BiSolidGrid className="mr-2 text-xl" />
              <FaList className="text-base" />
            </div>
          </div>
          <div className="mt-4">
            <label className="input input-bordered flex items-center gap-2">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
              <input type="text" className="grow input-md p-1" placeholder="Search An Item" />
            </label>
          </div>
          <div>
            <PrdouctCards/>
          </div>
        </div>
        <div className="col-span-2 bg-red-50">1</div>
      </div>
      <div className="bg-black text-text-white">
        <Footer/>
      </div>
    </>
  );
}
