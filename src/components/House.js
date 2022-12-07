import React from "react";

// import icons
import { BiBed, BiBath, BiArea } from "react-icons/bi";

const House = ({ house }) => {
  return (
    <div className="bg-white shadow-1  rounded-lg w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition">
      <img className="mb-8 rounded-t-lg" src={house.image} alt="" />
      <div className="p-5 pt-0">
        <div className="text-lg font-semibold text-violet-600 mb-4">
          ${house.price}
          <span className="text-gray-400 text-sm">/month</span>
        </div>
        <div className="text-lg font-bold max-w-[260px] mb-3">{house.name}</div>
        <div className="text-sm font-bold text-gray-400 max-w-[260px] mb-3">
          {house.address}
        </div>
        <hr className="font-bold" />
        <div className="flex gap-x-4 mt-4">
          <div className="flex items-center text-gray-600 gap-1">
            <div className="text-[20px] rounded-full text-violet-500">
              <BiBed />
            </div>
            <div className="text-sm ">{house.bedrooms} Beds</div>
          </div>
          <div className="flex items-center text-gray-600 gap-1">
            <div className="text-[20px] rounded-full text-violet-500">
              <BiBath />
            </div>
            <div className="text-sm">{house.bathrooms} Bathrooms</div>
          </div>
          <div className="flex items-center text-gray-600 gap-1">
            <div className="text-[20px] rounded-full text-violet-500">
              <BiArea />
            </div>
            <div className="text-sm">{house.surface}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default House;
