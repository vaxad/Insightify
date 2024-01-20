"use client"
import React from 'react'

function ProductPage() {
      const products = 
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
    };
  return (
    <div className='bg-black text-white'>
      <div className='flex flex-row p-4 gap-8'>
        <img src={products.images[0]} alt={products.name} className='scale-75 '/>
        <div className='w-3/4'>
          <h2 className="text-2xl font-bold mb-2">{products.name}</h2>
          <h2 className="text-2xl font-bold mb-2">{products.description}</h2>
          <p className="text-2xl font-bold mb-2">Product Link:  {products.link}</p>
          <p className="text-lg mb-2">{products.price}</p>
          <p className="mb-4">{products.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;