import React, { useEffect, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AppDispatch } from "../app/Store";
import { addToCartProduct } from "../features/Post/PostAction";

const Cart = () => {
  const [total, setTotal] = useState(0);
  const carts = useSelector((state: any) => state?.product?.cartItem);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    const total = carts.reduce((acc: any, item: any) => {
      return acc + item?.price * item?.quantity;
    }, 0);
    setTotal(total);
  }, [carts]);
  const handleDecrement = (id: any) => {
    const updatedCart = carts?.map((item: any) => {
      if (item?.id === id) {
        return {
          ...item,
          quantity: item?.quantity - 1,
        };
      }
      return item;
    });
    dispatch(addToCartProduct(updatedCart));
  };
  const handleIncrement = (id: any) => {
    const updatedCart = carts?.map((item: any) => {
      if (item?.id === id) {
        return {
          ...item,
          quantity: item?.quantity + 1,
        };
      }
      return item;
    });
    dispatch(addToCartProduct(updatedCart));
  };
  const removeProduct = (id: any) => {
    const updatedCart = carts.filter((item: any) => item?.id !== id);
    dispatch(addToCartProduct(updatedCart));
  };
  return (
    <div>
      <div className="container mx-auto mt-10">
        <div className="flex shadow-md my-10">
          <div className="w-3/4 bg-white px-10 py-10">
            <div className="flex justify-between pb-4 border-b first-letter:pb-8">
              <h1 className="font-semibold text-2xl">Shopping cart</h1>
              <h1 className="font-semibold text-2xl">1 Items</h1>
            </div>

            {carts.length === 0 ? (
              <>
                <div className="mt-5 text-gray-700 text-center">No Items available</div>
              </>
            ) : (
              <>
                <div className="flex mt-10 mb-5">
                  <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-2/5">
                    Product Details
                  </h3>
                  <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-2/5">
                    Quantity
                  </h3>
                  <h3 className="font-semibold text-gray-600 text-center text-xs uppercase w-2/5">
                    Price
                  </h3>
                  <h3 className="font-semibold text-gray-600 text-xs  text-center uppercase w-2/5">
                    Total
                  </h3>
                </div>
                {carts.map((item: any) => {
                  return (
                    <div
                      key={item?.id}
                      className="flex items-center hover:bg-gray-100 --mx-8 px-6 py-5"
                    >
                      <div className="flex w-2/5">
                        <div className="w-20">
                          <img
                            className="h-24"
                            src={item?.image}
                            alt={carts?.title}
                          />
                        </div>
                        <div className="flex flex-col justify-between ml-4 flex-grow">
                          <span className="font-bold text-sm">
                            {item?.title}
                          </span>
                          <span className="text-red-500 text-xs capitalize">
                            {item?.category}
                          </span>
                          <div
                            className="font-semibold cursor-pointer hover:text-red-500 text-gray-500 text-xs"
                            onClick={() => removeProduct(item?.id)}
                          >
                            Remove
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center cursor-pointer w-1/5">
                        <AiOutlineMinus
                          size={20}
                          onClick={() => handleDecrement(item?.id)}
                        />
                        <input
                          className="mx-2 border text-center w-8"
                          type="text"
                          value={item?.quantity}
                          readOnly
                        />
                        <AiOutlinePlus
                          onClick={() => handleIncrement(item?.id)}
                          size={20}
                        />
                      </div>
                      <span className="text-center w-1/5 font-semibold text-sm">
                        ${item?.price}
                      </span>
                      <span className="text-center w-1/5 font-semibold text-sm">
                        ${item?.price * item?.quantity}
                      </span>
                    </div>
                  );
                })}
              </>
            )}
            <Link
              to={"/products"}
              className="flex font-semibold text-green-600 text-sm mt-10"
            >
              <MdOutlineKeyboardBackspace size={20} />
              Continue Shopping
            </Link>
          </div>
          <div id="summary" className="w-1/4 px-8 py-10">
            <h1 className="font-semibold text-2xl border-b pb-8">
              Order Summary
            </h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">
                Items {carts?.length}
              </span>
              <span className="font-semibold text-sm"> {total}$</span>
            </div>
            <div>
              <label className="font-medium inline-block mb-3 text-sm uppercase">
                Shipping
              </label>
              <select className="block p-2 text-gray-200 w-full text-sm">
                <option>Standard Shipping - $10.00</option>
              </select>
            </div>
            <div className="py-10">
              <label className="font-semibold inline-block mb-3 text-sm uppercase">
                Promo Code
              </label>
              <input
                type="text"
                placeholder="Enter your code"
                className="p-2 text-sm w-full"
              />
            </div>
            <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
              Apply
            </button>
            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>${total + 10}</span>
              </div>
              <button className="bg-green-500 font-semibold hover:bg-green-600 py-3  text-sm text-white uppercase w-full">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
