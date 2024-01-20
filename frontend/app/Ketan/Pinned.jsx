"use client";

import { useState } from "react";

export default function Pinned() {
  const products = [
    {
      _id: { $oid: "65aa86a930ae586543485944" },
      name: "REDMI Note 10 Pro (Dark Nebula, 128 GB) (6 GB RAM)",
      price: "₹18,999",
      createdAt: { $date: "2024-01-19T14:26:49.429Z" },
      description: "Gaming phone with Super AMOLED display",
      brand: "www.flipkart.com",
      link: "https://www.flipkart.com/redmi-note-10-pro-dark-nebula-128-gb/p/itm4cfcbeb29b31c",
      images: [
        "https://rukminim2.flixcart.com/image/416/416/l0h1g280/mobile/p/h/g/-original-imagc9cqggcxkvhz.jpeg?q=70&crop=false",
      ],
      __v: 0,
    },
    {
      _id: { $oid: "65aa86a930ae586543485944" },
      name: "REDMI Note 10 Pro (Dark Nebula, 128 GB) (6 GB RAM)",
      price: "₹18,999",
      createdAt: { $date: "2024-01-19T14:26:49.429Z" },
      description: "Gaming phone with Super AMOLED display",
      brand: "www.flipkart.com",
      link: "https://www.flipkart.com/redmi-note-10-pro-dark-nebula-128-gb/p/itm4cfcbeb29b31c",
      images: [
        "https://rukminim2.flixcart.com/image/416/416/l0h1g280/mobile/p/h/g/-original-imagc9cqggcxkvhz.jpeg?q=70&crop=false",
      ],
      __v: 0,
    },
    {
      _id: { $oid: "65aa86a930ae586543485944" },
      name: "REDMI Note 10 Pro (Dark Nebula, 128 GB) (6 GB RAM)",
      price: "₹18,999",
      createdAt: { $date: "2024-01-19T14:26:49.429Z" },
      description: "Gaming phone with Super AMOLED display",
      brand: "www.flipkart.com",
      link: "https://www.flipkart.com/redmi-note-10-pro-dark-nebula-128-gb/p/itm4cfcbeb29b31c",
      images: [
        "https://rukminim2.flixcart.com/image/416/416/l0h1g280/mobile/p/h/g/-original-imagc9cqggcxkvhz.jpeg?q=70&crop=false",
      ],
      __v: 0,
    },
    {
      _id: { $oid: "65aa86a930ae586543485944" },
      name: "REDMI Note 10 Pro (Dark Nebula, 128 GB) (6 GB RAM)",
      price: "₹18,999",
      createdAt: { $date: "2024-01-19T14:26:49.429Z" },
      description: "Gaming phone with Super AMOLED display",
      brand: "www.flipkart.com",
      link: "https://www.flipkart.com/redmi-note-10-pro-dark-nebula-128-gb/p/itm4cfcbeb29b31c",
      images: [
        "https://rukminim2.flixcart.com/image/416/416/l0h1g280/mobile/p/h/g/-original-imagc9cqggcxkvhz.jpeg?q=70&crop=false",
      ],
      __v: 0,
    },
  ];
  const [open, setopen] = useState(false);
  return (
    <div className=" flex flex-col justify-start w-fit h-fit absolute top-24 bg-slate-100 right-8 z-50 scale-[80%]  items-center rounded-md  ">
      <div className=" flex flex-row justify-center relative items-center gap-4 px-4">
        <h1 className=" text-2xl font-semibold px-3 py-2">Your Pins📌</h1>
        <div
          className={`flex max-h-[70vh] overflow-y-scroll flex-col absolute top-10 bg-slate-100 right-0 w-full justify-start items-start px-3 py-2 gap-4 origin-top ${
            open ? " scale-y-100 opacity-100" : " scale-y-0  opacity-0"
          } transition-all`}>
          {products.map((item) => (
            <div className=" flex flex-row justify-start items-center rounded-md gap-4 overflow-clip bg-slate-400">
              <img className=" w-[50px]" src={item.images[0]} alt={item.name} />
              <div className=" flex flex-col h-full px-3 py-1">
                <h2 className="text-lg font-bold mb-2">{item.name}</h2>
                <p className="text-md mb-2">{item.price}</p>
                <p className="mb-4">
                  {item.description.length > 60
                    ? item.description.slice(0, 60)
                    : item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <img
          onClick={() => setopen(!open)}
          className=" w-8 h-8"
          src="https://img.icons8.com/ios/128/000000/accordion.png"
          alt="accordion"
        />
      </div>
      <hr className=" flex w-full" />
    </div>
  );
}
