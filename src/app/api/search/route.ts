import { basePath } from "@/constant/constant";
import { NextRequest, NextResponse } from "next/server";
import { SearchSymbolProps } from "../../../types/types";

export async function GET(req:NextRequest){
    const url = new URL(req.url);
    const query = url.searchParams.get("query")
    const symbolUrl = `${basePath}/search?q=${query}&token=${process.env.FINNHUB_API_KEY}`;
    const response = await fetch(symbolUrl);

    const data = await response.json()
    const searchResult:SearchSymbolProps = data.result.slice(0, 10)

    return NextResponse.json(searchResult, {status:200})
}