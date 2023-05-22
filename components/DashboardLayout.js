import React from "react";
import Image from "next/image";
import android from "../public/android.png";

function DashboardLayout() {
  return (
    <div className="grid grid-cols-5 h-screen">
      <div className="col-span-1 bg-[#1E1F23] border-r border-solid border-[#929292]">
        <div className="flex mt-5 ml-3">
          <Image
            src={android}
            alt="Picture of the author"
            style={{ width: "45px", height: "45px" }}
          />
          <h1 className="text-white mt-2 ml-2 text-2xl font-bold">SOCIAL</h1>
        </div>
      </div>
      <div className="col-span-4 ">
        <div className="grid grid-rows-7 h-screen bg-gray-200">
          <div className="row-span-1 bg-[#1E1F23] border-b border-solid border-[#929292]"></div>
          <div className="row-span-6 bg-[#17181C] "></div>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
