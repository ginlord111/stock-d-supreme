import React from "react";
import Image from "next/image";
const NotFound = ({text }: {text:string }) => {
  return (
    <div className="flex flex-col items-center space-y-4">
   <div className="relative">
   <Image
        src="/404-not-found.svg"
        alt="Not found symbol"
        width={400}
        height={100}
        className="rounded-lg"
      />
   </div>
   <span className="text-gray-500 text-lg">{text}</span>
    </div>
  );
};

export default NotFound;
