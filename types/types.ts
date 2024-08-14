export interface SearchSymbolProps{
    description:string;
    symbol:string;
    displaySymbol:string;
    type:string
  }


  export interface SymbolProfileDataProps{
    logo:string;
    name:string;
    ticker:string;
    finnhubIndustry:string;
    marketCapitalization:string;
    country:string;
    ipo:string;
  }


  export interface SymbolPriceDataProps{
    c:string;
    o:string;
    h:string;
    l:string;
    pc:number;
    d:number;
    dp:number;
  }