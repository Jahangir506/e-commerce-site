import Image from "next/image";
import banner from '@/assets/banner.jpg'

const PrdouctCards = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="card card-compact w-60 bg-base-100 shadow-xl my-12">
          <figure>
            <Image src={banner} alt="Shoes" height={0} width={0} className="w-full" />
          </figure>
          <div className="card-body">
          <h2 className="text-base font-semibold">Wireless Bluetooth Headset Single Ear ...</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-sm btn-primary text-white  border-none hover:bg-black bg-black rounded">Add to Cart</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-60 bg-base-100 shadow-xl my-12">
          <figure>
          <Image src={banner} alt="Shoes" height={0} width={0} className="w-full" />
          </figure>
          <div className="card-body">
            <h2 className="text-base font-semibold">Wireless Bluetooth Headset Single Ear ...</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-sm btn-primary text-white  border-none hover:bg-black bg-black rounded">Add to Cart</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-60 bg-base-100 shadow-xl my-12">
          <figure>
          <Image src={banner} alt="Shoes" height={0} width={0} className="w-full" />
          </figure>
          <div className="card-body">
          <h2 className="text-base font-semibold">Wireless Bluetooth Headset Single Ear ...</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-sm btn-primary text-white  border-none hover:bg-black bg-black rounded">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PrdouctCards;
