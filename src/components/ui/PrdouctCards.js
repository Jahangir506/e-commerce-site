import Image from "next/image";
import banner from '@/assets/banner.jpg'
import { BiSolidGrid } from "react-icons/bi";
import { FaList } from "react-icons/fa6";

const PrdouctCards = () => {
  return (
    <>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 lg:gap-6 lg:max-w-7xl mx-auto p-7">
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
          <div className="my-9">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
        <div className="card w-full rounded card-compact bg-base-100 shadow-xl">
          <figure>
            <Image src={banner} alt="Shoes" height={0} width={0} className="w-full" />
          </figure>
          <div className="card-body">
          <h2 className="text-base font-semibold">Wireless Bluetooth Headset Single Ear ...</h2>
            <p><small>(121) Review</small></p>
            <div className="card-actions justify-between">
              <h5 className="text-red-500 text-lg font-bold">$8.50</h5>
              <button className="font-medium btn-sm px-1.5 py-1 bg-[#212529] text-white  border-none rounded">Add to Cart</button>
            </div>
          </div>
        </div>
        <div className="card w-full rounded card-compact bg-base-100 shadow-xl">
          <figure>
          <Image src={banner} alt="Shoes" height={0} width={0} className="w-full" />
          </figure>
          <div className="card-body">
            <h2 className="text-base font-semibold">Wireless Bluetooth Headset Single Ear ...</h2>
            <p><small>(121) Review</small></p>
            <div className="card-actions justify-between">
            <h5 className="text-red-500 text-lg font-bold">$8.50</h5>
              <button className="font-medium btn-sm px-1.5 py-1 bg-[#212529] text-white  border-none rounded">Add to Cart</button>
            </div>
          </div>
        </div>
        <div className="card w-full rounded card-compact bg-base-100 shadow-xl">
          <figure>
          <Image src={banner} alt="Shoes" height={0} width={0} className="w-full" />
          </figure>
          <div className="card-body">
          <h2 className="text-base font-semibold">Wireless Bluetooth Headset Single Ear ...</h2>
          <p><small>(121) Review</small></p>
            <div className="card-actions justify-between">
            <h5 className="text-red-500 text-lg font-bold">$8.50</h5>
              <button className="font-medium btn-sm px-1.5 py-1 bg-[#212529] text-white  border-none rounded">Add to Cart</button>
            </div>
          </div>
        </div>
        <div className="card w-full rounded card-compact bg-base-100 shadow-xl">
          <figure>
          <Image src={banner} alt="Shoes" height={0} width={0} className="w-full" />
          </figure>
          <div className="card-body">
          <h2 className="text-base font-semibold">Wireless Bluetooth Headset Single Ear ...</h2>
          <p><small>(121) Review</small></p>
            <div className="card-actions justify-between">
            <h5 className="text-red-500 text-lg font-bold">$8.50</h5>
              <button className="font-medium btn-sm px-1.5 py-1 bg-[#212529] text-white  border-none rounded">Add to Cart</button>
            </div>
          </div>
        </div>
        <div className="card w-full rounded card-compact bg-base-100 shadow-xl">
          <figure>
          <Image src={banner} alt="Shoes" height={0} width={0} className="w-full" />
          </figure>
          <div className="card-body">
          <h2 className="text-base font-semibold">Wireless Bluetooth Headset Single Ear ...</h2>
          <p><small>(121) Review</small></p>
            <div className="card-actions justify-between">
            <h5 className="text-red-500 text-lg font-bold">$8.50</h5>
              <button className="font-medium btn-sm px-1.5 py-1 bg-[#212529] text-white  border-none rounded">Add to Cart</button>
            </div>
          </div>
        </div>
        <div className="card w-full rounded card-compact bg-base-100 shadow-xl">
          <figure>
          <Image src={banner} alt="Shoes" height={0} width={0} className="w-full" />
          </figure>
          <div className="card-body">
          <h2 className="text-base font-semibold">Wireless Bluetooth Headset Single Ear ...</h2>
          <p><small>(121) Review</small></p>
            <div className="card-actions justify-between">
            <h5 className="text-red-500 text-lg font-bold">$8.50</h5>
              <button className="font-medium btn-sm px-1.5 py-1 bg-[#212529] text-white  border-none rounded">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
          </div>
        </div>
        <div className=" bg-red-50">1</div>
      </div>
    </>
  );
};
export default PrdouctCards;
