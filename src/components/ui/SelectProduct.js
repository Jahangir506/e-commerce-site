import Image from "next/image";
import banner from "@/assets/banner.jpg";
import { RiDeleteBinLine } from "react-icons/ri";

const SelectProduct = () => {
  return (
    <>
      <div className="card card-side rounded-md bg-blue-50 border border-gray-200">
        <figure>
          <Image
            src={banner}
            alt="Shoes"
            height={0}
            width={0}
            className="w-32 h-36"
          />
        </figure>
        <div className="flex justify-between items-center">
          <div className="card-body p-3">
            <h2 className="text-base font-semibold">
              Wireless Bluetooth Headset Single Ear
            </h2>
            <p>
              <small>(121) Review</small>
            </p>
            <div className="card-actions justify-between">
              <h5 className="text-red-500 text-lg font-bold">$8.50</h5>
            </div>
          </div>
          <div className="card-actions justify-end">
            <button className="px-3">
              <RiDeleteBinLine className="text-red-500 text-xl" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default SelectProduct;
