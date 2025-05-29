"use client";
import { useState } from "react";
import Image from "next/image";
import { Db } from "../../db";
import Location from "../../../public/images/location.png";
import Bedroom from "../../../public/images/bedroom.png";
import Bathroom from "../../../public/images/bathroom.png";
import Icon from "../../../public/images/icon.png";
import Share from "../../../public/images/share.png";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import { BsSliders } from "react-icons/bs";
import Heart from "../../../public/images/heart.png";

const ITEMS_PER_PAGE = 9;

export default function Discover() {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("default");

  
    const handleSort = () => {
    setSortOrder((prevOrder) =>
      prevOrder === "default" ? "price-asc" : prevOrder === "price-asc" ? "price-desc" : "default"
    );
  };

  const totalPages = Math.ceil(Db.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentData = Db.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
    setCurrentPage(1); 
  };

  return (
    <div className="px-4 py-6 flex flex-col items-center justify-center">
      
      <div className="flex justify-between items-center pb-[20px] w-full max-w-[890px]">
        <div className="flex items-center gap-8 text-[21px]">
          <div className="flex gap-3 items-center">
            <BsSliders />
            <p>More Filter</p>
          </div>
          <p className="text-[21px] hidden lg:block">
            Showing {startIndex + 1} - {Math.min(startIndex + ITEMS_PER_PAGE, Db.length)} of {Db.length} results
          </p>
        </div>

        <div className="flex items-center gap-2 text-[20px]">
          <p className="text-[#717171]">sort by:</p>
          <select
            value={sortOrder}
            onChange={handleSortChange}
            className="   py-1 sm:px-3 sm:py-2 text-xs sm:text-sm w-full sm:w-auto"
          >
            <option value="default">Default</option>
            <option value="price-asc">Low to High</option>
            <option value="price-desc">High to Low</option>
          </select>
        </div>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:max-w-[1100px] mx-auto">
        {currentData.map((property) => (
          <div
            key={property.id}
            className="border rounded-xl w-full max-w-[300px] md:max-w-[340px] bg-white overflow-hidden"
          >
            <Image
              src={property.image}
              alt={property.title}
              width={400}
              height={300}
              className="w-full h-[220px] object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">{property.title}</h2>
              <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
                <Image src={Location} alt="location" width={12} height={12} />
                <p>{property.description}</p>
              </div>
              <div className="flex items-center gap-6 mt-3 text-sm">
                <div className="flex items-center gap-1 text-gray-700">
                  <Image src={Bedroom} alt="bedroom" width={16} height={16} />
                  <span>{property.beds}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-700">
                  <Image src={Bathroom} alt="bathroom" width={16} height={16} />
                  <span>{property.bathrooms}</span>
                </div>
              </div>
              <hr className="my-3" />
              <div className="flex items-center justify-between">
                <span className="text-[#373737] font-bold text-base">{property.price}</span>
                <div className="flex gap-2 items-center">
                  <Image src={Icon} alt="icon" width={16} height={16} />
                  <Image src={Share} alt="share" width={16} height={16} />
                  <Image src={Heart} alt="heart" width={14} height={14} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      
      <div className="mt-6 flex gap-2 justify-center items-center flex-wrap">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-2 rounded disabled:opacity-50"
        >
          <MdOutlineNavigateBefore />
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-2 py-1 rounded ${
              currentPage === index + 1
                ? "bg-[#3D9970] text-white"
                : "hover:bg-[#3D9970] hover:text-white"
            }`}
          >
            {index + 1}
          </button>
          
        ))}
          <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-2 py-1 hover:bg-[#3D9970] hover:text-white rounded disabled:opacity-50"
        >
          2
        </button>
          <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-2 py-1 hover:bg-[#3D9970] hover:text-white rounded disabled:opacity-50"
        >
          3
        </button>
          <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-2 py-1 hover:bg-[#3D9970] hover:text-white rounded disabled:opacity-50"
        >
          4
        </button>
                 <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-2 py-1 hover:bg-[#3D9970] hover:text-white rounded disabled:opacity-50"
        >
          5
        </button>
          
        

        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-2 rounded disabled:opacity-50"
        >
          <MdOutlineNavigateNext />
        </button>
      </div>
    </div>
  );
}
