import { basePath } from '@/constant/constant';
import Image from 'next/image';
import React, { Fragment } from 'react';
import SymbolPage from './_components/SymbolPage';
import NotFound from './_components/NotFound';

const SymbolPageContainer = async ({ params }: { params: { symbol: string } }) => {
    const { symbol } = params;

    try {
        // Fetch stock profile details
        const profileUrl = await fetch(`${basePath}/stock/profile2?symbol=${symbol}&token=${process.env.FINNHUB_API_KEY}`)
        if (!profileUrl.ok) {
            throw new Error('Failed to fetch stock profile data');
        }

        const symbolData = await profileUrl.json();

        // Fetch stock price details
        const priceUrl = await fetch(
            `${basePath}/quote?symbol=${symbol}&token=${process.env.FINNHUB_API_KEY}`
        );

        if (!priceUrl.ok) {
            throw new Error('Failed to fetch stock price data');
        }

        const priceData = await priceUrl.json();

        return (
          <Fragment>
            {symbolData.name ? (
                   <div className="text-white p-8 flex items-center justify-center lg:pt-[10rem] pt-[2rem]">
                     <SymbolPage symbolData={symbolData} priceData={priceData}/>
                   </div>
            ) : (
                <div className='relative mt-[18rem]'>
                <NotFound  text={`No data found in symbol ${symbol}`}/>
                </div>
            )}
          </Fragment>
        );
    } catch (error) {
      console.log(error, "ERROR")
        return (
            <div className='relative mt-[18rem]'>
                <NotFound  text={`Something went wrong in fetching symbol ${symbol}. Search another symbol`}/>
            </div>
        )
    }
};

export default SymbolPageContainer;
