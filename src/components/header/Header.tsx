import React from "react";
import Image from "next/image";
const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col justify-between ">
        <h1 className=" text-[10px]  text-center font-bold">
          CONSULATE GENERAL
          <br />
          THE REPUBLIC OF INDONESIA <br />
          KARACHI -PAKISTAN
        </h1>
      </div>
      <div className="font-bold text-center flex flex-col items-center justify-center">
        <Image src={"/eagle.png"} width={60} height={60} alt="eagle" />
      </div>
      <div className="text-[10px] font-bold">
        <p className="space-x-">
          <span>Phone</span>
          <span>: (92-21) 35874623, 35874619</span>
        </p>
        <p className="space-x-1">
          <span>Fax</span>
          <span>:(92-21) 35874483</span>
        </p>
        <p className="space-x-1">
          <span>Website</span>
          <span>:www.kemlu.go.id/karachi</span>
        </p>
        <p className="space-x-1">
          <span>Address</span>
          <span>:E/1-5 Shahrah-E-Iran, Clifton Karachi</span>
        </p>
      </div>
    </div>
  );
};

export default Header;
