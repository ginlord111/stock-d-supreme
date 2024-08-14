"use client";
import {
  SymbolPriceDataProps,
  SymbolProfileDataProps,
} from "../../../../types/types";
import Image from "next/image";
import { useUpdatedPrice } from "@/hooks/useUpdatePrice";
const SymbolPage = ({
  symbolData,
  priceData,
}: {
  symbolData: SymbolProfileDataProps;
  priceData: SymbolPriceDataProps;
}) => {
  /// a custom hook for updating the price in real time using websocket
  const updatedPrice = useUpdatedPrice(priceData, symbolData.name);
  return (
    <div className="flex flex-col items-center">
      <div className="mb-4">
        {symbolData.logo && (
          <Image
            src={symbolData.logo}
            alt="Profile data logo"
            width={100}
            height={100}
            className="rounded-lg"
          />
        )}
      </div>
      <h1 className="text-3xl font-bold mb-4">{symbolData.name}</h1>
      <p>
        <strong>Ticker:</strong> {symbolData.ticker}
      </p>
      <p>
        <strong>Industry:</strong> {symbolData.finnhubIndustry}
      </p>
      <p>
        <strong>Market Cap:</strong> ${symbolData.marketCapitalization} Billion
      </p>
      <p>
        <strong>Country:</strong> {symbolData.country}
      </p>
      <p>
        <strong>IPO:</strong> {symbolData.ipo}
      </p>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Stock Price Information</h2>
        <p>
          <strong>Current Price:</strong> ${updatedPrice.c}
        </p>
        <p>
          <strong>Open:</strong> ${updatedPrice.o}
        </p>
        <p>
          <strong>High:</strong> ${updatedPrice.h}
        </p>
        <p>
          <strong>Low:</strong> ${updatedPrice.l}
        </p>
        <p>
          <strong>Previous Close:</strong> ${updatedPrice.pc}
        </p>
        <p>
          <strong>Change:</strong> ${updatedPrice.d}
        </p>
        <p>
          <strong>Percent Change:</strong> {priceData.dp}%
        </p>
      </div>
    </div>
  );
};

export default SymbolPage;
