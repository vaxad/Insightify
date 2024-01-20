"use client";

import store from "@/lib/zustand";
import { useState, useEffect } from "react";

export default function Pinned() {
  const { cart } = store();
  const [products, setProducts] = useState(cart);
  const [open, setopen] = useState(false);
  useEffect(() => {
    setProducts(cart);
  }, [cart]);
  return (
    <div
      onClick={() => setopen(!open)}
      className=" z-50 flex flex-col justify-start w-fit h-fit cursor-pointer shadow-md shadow-zinc-900 top-24 bg-slate-100 scale-[80%] items-center rounded-md  ">
      <div className=" flex flex-row justify-center relative items-center gap-4 px-4">
        <h1 className=" text-2xl font-semibold px-3 py-2">Your Pins📌</h1>

        <div
          className={`flex rounded-sm  flex-col absolute z-50 top-10 bg-slate-100 right-0  justify-start items-start px-3 py-2 gap-4 origin-top ${
            open ? " scale-y-100 opacity-100" : " scale-y-0  opacity-0"
          } transition-all`}>
          <div className="flex h-[70vh] w-[50vw] overflow-y-scroll gap-3 flex-col justify-start items-center m-2">
            {products.length === 0 ? (
              <div className=" flex w-full h-full justify-center items-center ">
                <p className=" text-lg text-slate-600">No pins available</p>
              </div>
            ) : (
              products.map((item) => (
                <div className=" flex flex-row justify-start items-center rounded-md gap-4  bg-zinc-400 w-full">
                  {/* <img className=" w-[50px]" src={item.images[0]} alt={item.name} /> */}
                  <div className=" flex flex-col h-full px-3 py-1">
                    <h2 className="text-md font-bold mb-2 ">{item.name}</h2>
                    <p className="text-sm mb-2">{item.price}</p>
                    <p className="mb-4">
                      {item.description.length > 60
                        ? item.description.slice(0, 60)
                        : item.description}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
        <img
          className=" w-8 h-8"
          src="https://img.icons8.com/ios/128/000000/accordion.png"
          alt="accordion"
        />
      </div>
      <hr className=" flex w-full" />
    </div>
  );
}
