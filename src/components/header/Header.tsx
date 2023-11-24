import React from "react";
import Image from "next/image";
const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col w-[33%] ">
        <h1 className=" text-[10px]  text-center font-bold">
          CONSULATE GENERAL
          <br />
          THE REPUBLIC OF INDONESIA <br />
          KARACHI -PAKISTAN
        </h1>
      </div>
      <div className="font-bold text-center flex flex-col items-center w-[33%]">
        <Image src={"/eagle.png"} width={60} height={60} alt="eagle" />
      </div>
      <div className="text-[8px] font-bold w-[33%]">
        <div className="flex justify-between">
          <p className="w-[30px]">Phone</p>
          :
          <p className="w-[120px]">(92-21) 35874623, 35874619</p>
        </div>
        <div className="flex justify-between">
          <p className="w-[30px]">Fax</p>
          :
          <p className="w-[120px]">(92-21) 35874483</p>
        </div>
        <div className="flex justify-between">
          <p className="w-[30px]">Website</p>
          :
          <p className="w-[120px]">www.kemlu.go.id/karachi</p>
        </div>
        <div className="flex justify-between flex-wrap">
          <p className="w-[30px]">Address</p>
          :
          <p className="w-[120px]">E/1-5 Shahrah-E-Iran, Clifton Karachi</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
