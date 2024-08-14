import React from "react";
import Image from "next/image";
const NotFound = ({text }: {text:string }) => {
  return (
    <div className="flex flex-col items-center space-y-4">
     <div className="relative w-full max-w-md h-[100px] lg:h-[300px]"> 
      <Image
        src="/404-not-found.svg"
        alt="Not found symbol"
        layout="fill" 
        objectFit="contain" 
        className="rounded-lg"
      />
    </div>
   <span className="text-gray-500 lg:text-lg text-sm text-center ">{text}</span>
    </div>
  );
};

export default NotFound;
