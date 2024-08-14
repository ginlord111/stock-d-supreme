import { useEffect, useState } from "react";
import { SymbolPriceDataProps } from "../types/types";

export  const useUpdatedPrice  = (priceData:SymbolPriceDataProps, symbol:string) => {
    const [updatePrice, setUpdatePrice] = useState<SymbolPriceDataProps>(priceData)
    console.log(process.env.FINNHUB_API_KEY as string, "ENV")
    useEffect(()=>{
    const ws = new WebSocket(`wss://ws.finnhub.io?token=${process.env.NEXT_PUBLIC_FINNHUB_API_KEY}`);

    ws.onopen = () => {
        ws.send(JSON.stringify({ type: 'subscribe', symbol }));
    };

    ws.onmessage = (event) => {
        const message = JSON.parse(event.data);
        if (message.type === 'trade' && message.data.length > 0) {
            setUpdatePrice((prev) => ({
                ...prev,
                c: message.data[0].p, // Update current price
                d: message.data[0].p - (prev?.pc || 0), // Update change
                dp: ((message.data[0].p - (prev?.pc || 0)) / (prev?.pc || 1)) * 100, // Update percentage change
            }));
        }
    };

    ws.onclose = () => {
        console.log('WebSocket closed');
    };

    ws.onerror = (error) => {
        console.error('error', error);
    };

    return () => {
        ws.close();
    };
},[symbol])

return updatePrice
}