import SelectProduct from "./SelectProduct";

const Cart = () => {
  return (
    <>
      <div className="">
        <div className="card bg-base-100 rounded shadow-xl border border-gray-300">
          <div className="card-body p-2.5">
            <button className="bg-[#212529] uppercase text-sm h-10 font-medium btn-block rounded-md text-white">
              Selected Products
            </button>
            <div>
              <SelectProduct/>
            </div>
            <h2 className="text-center lg:text-end font-semibold justify-center items-center">
              Total: $0
            </h2>
            <div className="form-control">
              <label className="label cursor-pointer">
              <input type="checkbox" className="" />
                <span className="label-text ml-4">
                  I've read and agree to the  terms and conditions,  refund
                  policy & privacy policy
                </span>
              </label>
            </div>
            <div className="card-actions justify-center lg:justify-end">
              <button className="bg-[#212529] text-white text-sm font-medium p-2.5 rounded uppercase ">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
