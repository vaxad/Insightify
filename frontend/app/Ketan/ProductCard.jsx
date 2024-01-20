"use client";

import { useState } from "react";
import Link from "next/link";
import store from "@/lib/zustand";

const ProductCard = ({ item }) => {
  const [up, setup] = useState(false);
  const { add } = store();
  return (
    <div>
      <div className="bg-[#181818;] p-4 rounded-2xl overflow-clip" id="card">
        <button></button>
        <div
          onMouseOver={() => setup(true)}
          onMouseLeave={() => setup(false)}
          className="w-full h-[30vh] relative flex rounded-md bg-slate-100 gap-3 flex-row justify-center items-center p-3  overflow-clip">
          <h3 className=" py-1 px-2 rounded-lg z-50 bg-zinc-900 absolute top-2 left-2 text-xs">
            {item.brand}
          </h3>
          <h3
            onClick={() => {
              add(item);
            }}
            className=" py-1 px-2 cursor-pointer rounded-lg z-50 bg-red-900 absolute top-2 right-2 text-xs">
            {"Pin"}
          </h3>
          <img src={item.images[0]} className="w-fit h-full z-20"></img>
          {/* <div
          className={`${
            up ? " translate-y-0 opacity-0" : " translate-y-full opacity-100"
          } flex transition-all h-full w-full z-30 bg-slate-950 bg-opacity-85 px-4 py-3 text-slate-100 absolute top-0 right-0 justify-center items-center`}>
          <p className={`text-base `}>
            {item.description.length > 150
              ? item.description.slice(0, 150) + "..."
              : item.description}
          </p>
        </div> */}
          {/* <img
          src={item.images[0]}
          alt=" "
          className=" absolute top-0 right-0 blur-xl w-full h-full"
        /> */}
        </div>
        <br />
        <h3 className="text-xl text-white font-bold mb-2">{item.name}</h3>
        <div className=" flex flex-row w-full justify-between items-center">
          <p className="text-white text-lg font-semibold">
            ₹{item ? parseFloat(item.price).toFixed(2) : ""}
          </p>
          <Link
            href={`/product/${item._id}`}
            className=" hover:underline transition-all">
            View
          </Link>
        </div>
        {/* Add more product details as needed */}
      </div>
    </div>
  );
};

export default ProductCard;
