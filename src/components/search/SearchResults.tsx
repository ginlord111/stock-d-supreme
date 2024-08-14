import React, { Dispatch, SetStateAction } from 'react';
import { SearchSymbolProps } from '../../../types/types';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

const SearchResults = ({ data,setSearchInput }: { data: SearchSymbolProps[],setSearchInput: Dispatch<SetStateAction<string>> }) => {
const router =useRouter()
const handleClick = (symbol:string) => {
  router.replace(`/symbol/${symbol}`)
  setSearchInput("")
}
/// FETCHING ALL THE SUGGESTED RESULT BASED ON THE USER INPUT IN SEARCHBAR
  return (
    <div className='absolute top-14 w-full h-64 border-2 rounded-md bg-white overflow-y-scroll'>
      {data.length > 0 ? (
        <ul className='w-full'>
          {data.map((symbol) => (
            <li key={symbol.symbol} className='flex justify-between lg:flex-row flex-col items-center whitespace-nowrap px-4 py-2 border-b hover:bg-gray-100'
            onClick={()=>handleClick(symbol.symbol)}
            >
              <span>{symbol.symbol}</span>
              <span>{symbol.description}</span>
            </li>
          ))}
        </ul>
      ) : (
        <div className='flex items-center justify-center h-full'>
          <Loader2 className='h-8 w-8 animate-spin' />
        </div>
      )}
    </div>
  );
};

export default SearchResults;
