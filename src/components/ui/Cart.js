const Cart = () => {
  return (
    <>
      <div className="">
        <div className="card bg-base-100 rounded shadow-xl border">
          <div className="card-body p-2">
            <button className="bg-[#212529] btn-block rounded-md text-white">
              Selected Products
            </button>
            <h2 className="card-title justify-center items-center">
              Card title!
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
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
