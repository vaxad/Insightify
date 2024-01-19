"use client";

import { useState } from "react";

const ProductCard = ({ item }) => {
  const [up, setup] = useState(false);
  return (
    <div
      className="bg-[#181818;] p-4 rounded-2xl overflow-clip"
      id="card">
      <div
        onMouseOver={() => setup(true)}
        onMouseLeave={() => setup(false)}
        className="w-full h-[30vh] relative flex gap-3 flex-row justify-center items-center rounded-sm  overflow-clip">
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
      <p className="text-white text-lg font-semibold">{item.price}</p>

      {/* Add more product details as needed */}
    </div>
  );
};

export default ProductCard;
