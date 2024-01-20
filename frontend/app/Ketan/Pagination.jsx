"use client";
import React, { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";
import ProductCard from "@/app/ketan/ProductCard";
import Link from "next/link";

const PaginationComponent = () => {
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

  const productsPerPage = 6;

  const totalPages = Math.ceil(products.length / productsPerPage);

  const getProductsForPage = (currentPage) => {
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    return products.slice(startIndex, endIndex);
  };

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    
    <Pagination>
      <PaginationContent className="text-white flex flex-col px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-3/4 rounded mt-4">
          {getProductsForPage(currentPage)?.map((product) => (
            <ProductCard item={product} key={product.name} />
          ))}
        </div>
        <div className=" flex flex-row py-6 ">
          <PaginationItem>
            <PaginationPrevious
              onClick={() =>
                handlePageChange(
                  currentPage > 1 ? currentPage - 1 : currentPage
                )
              }
            />
          </PaginationItem>
          {Array.from({ length: totalPages }, (_, i) => (
            <PaginationItem key={i + 1}>
              <PaginationLink
                onClick={() => handlePageChange(i + 1)}
                page={i + 1}>
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              onClick={() =>
                handlePageChange(
                  currentPage < totalPages ? currentPage + 1 : currentPage
                )
              }
            />
          </PaginationItem>
        </div>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationComponent;
