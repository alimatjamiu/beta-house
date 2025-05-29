"use client";
import { useState } from "react";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
export default function Hero() {

      const [bedrooms, setBedrooms] = useState(0);

    const incrementBedrooms = () => setBedrooms(prev => prev + 1);
    const decrementBedrooms = () => setBedrooms(prev => Math.max(0, prev - 1))
  return (
    <div className="h-[80%] flex items-center justify-center">
      <div className="flex flex-col items-center justify-center lg:w-[1000px] gap-10">
        <div className="text-center text-white space-y-6 lg:space-y-10 mb-10">
          <h1 className="text-2xl lg:text-6xl font-bold mb-10">Browse Our Properties</h1>
          <p className="text-md px-8 lg:px-0 md:text-2xl lg:w-[700px]">
            Find your perfect home among our curated properties. Start browsing now.
          </p>
        </div>
<div className="bg-transparent backdrop-blur  shadow-2xl p-8">
   <div className="flex flex-col md:flex-row  justify-center">
          <div className="bg-white text-center p-4 flex flex-col md:flex-row justify-around gap-6 lg:gap-10 md:w-[800px] w-full">
            <div className="border-b md:border-b-0 md:border-r border-[#CAD4DE] px-6">
              <h3 className="font-semibold">Location</h3>
              <p>e.g. Gbagada</p>
            </div>
            <div className="border-b md:border-b-0 md:border-r border-[#CAD4DE] px-6">
              <h3 className="font-semibold">Property type</h3>
              <p>e.g. Duplex, Bedroom flat</p>
            </div>
            <div className="px-6">
              <h3 className="font-semibold">BEDROOM</h3>
              <div  className="flex items-center justify-center gap-4  ">
                        <button
                        onClick={decrementBedrooms}
                        className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={bedrooms === 0}>
                            <CiCircleMinus className="text-xl" />
                            </button>
                            <span className="text-md font-normal text-center ">
                                        {bedrooms}
                                    </span>
                            <button
                            onClick={incrementBedrooms}
                            className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                                <CiCirclePlus className="text-xl" />
                                </button>
                        </div>
            </div>
          </div>
          <button className="bg-[#3D9970] text-white px-6  hover:bg-[#2a6b50] transition duration-300 ">
            Find Properties
          </button>
        </div>
</div>
       
      </div>
    </div>
  );
}

