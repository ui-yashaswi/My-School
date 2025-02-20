import React, { useState } from "react";
import { IoIosStar } from "react-icons/io";
import { decrementCount, incrementCount } from "../../rtk/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";

function QuantityCard() {
  const [count, setCount] = useState(1);
  const { itemscount } = useSelector((slice) => slice.cart);
  const dispatch = useDispatch();
  return (
    <div className="w-[50vw] h-full flex flex-col gap-3">
      <h1 className="text-4xl">Wall Teach Alphabet Kit</h1>

      <div className="w-full flex gap-2">
        <div className="flex text-lg items-center gap-1">
          {[...Array(5)].map((_, index) => (
            <IoIosStar key={index} className="text-amber-300" />
          ))}
        </div>
        <div className="text-zinc-500">5 reviews</div>
      </div>

      <h1 className="font-semibold text-lg">RS.150.00</h1>
      <h1 className="text-zinc-500">
        Shipping charges will be calculated at checkout
      </h1>
      <h1 className="font-semibold text-lg">Quantity</h1>

      <div className="w-54 h-14 bg-zinc-100 flex items-center justify-evenly border border-zinc-300 rounded-lg">
        <button
          onClick={() => dispatch(decrementCount())}
          className="text-xl font-bold w-10 h-14 flex items-center justify-center border-r pr-5 border-zinc-300 cursor-pointer"
        >
          -
        </button>

        <h1 className="text-lg  font-semibold w-10 text-center">
          {itemscount}
        </h1>

        <button
          onClick={() => dispatch(incrementCount())}
          className="text-xl font-bold w-10 h-14 flex items-center justify-center border-l pl-5 border-zinc-200   cursor-pointer "
        >
          +
        </button>
      </div>
    </div>
  );
}

export default QuantityCard;
