"use client";
import React, { useState, useEffect } from "react";
import { Search as SearchIcon } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import SearchResults from "./SearchResults";
import { useRouter } from "next/navigation";
const Search = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [debouncedSearchInput, setDebouncedSearchInput] = useState<string>("");
  const router = useRouter()
  // useDebounce for the search input to have a delay in sending a query
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchInput(searchInput);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchInput]);

  const params = new URLSearchParams({
    query: debouncedSearchInput,
  });
/// fetch the search symbol based on the user input using params
  const { data: searchResults } = useQuery({
    queryKey: ["search-symbol", debouncedSearchInput],
    initialData: [],
    queryFn: async () => {
      if (debouncedSearchInput) {
        const data = await fetch(`/api/search?${params}`);
        const res = await data.json();
        return res;
      }
      return [];
    },
  });


  return (
    <div className="relative lg:w-[30rem] lg:h-[3rem] h-[3rem] w-[12rem] flex text-[#7A7A7A]">
      <input
        type="search"
        className="bg-[#171717] w-full h-full lg:text-md text-sm rounded-full border border-[#262626] pl-10 pr-4"
        placeholder="Search for symbols"
        onChange={(e) => setSearchInput(e.target.value)}
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            router.replace(`/symbol/${searchInput}`)
          }
        }}
      />
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center">
        <SearchIcon />
      </div>
      {searchResults && debouncedSearchInput && <SearchResults data={searchResults} setSearchInput={setSearchInput}  />}
    </div>
  );
};

export default Search;
