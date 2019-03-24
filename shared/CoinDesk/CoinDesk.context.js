import { createContext, useState, useReducer, useEffect } from "react";

export const CoinDeskContext = createContext({});

export const CoinDeskProvider = ({ children }) => {
  const [currentPrice, setCurrentPrice] = useState({});

  const getCurrentPrice = async function() {
    const res = await fetch(
      "https://api.coindesk.com/v1/bpi/currentprice.json"
    );
    const data = await res.json();
    setCurrentPrice({ ...data });
  };

  useEffect(() => {
    getCurrentPrice();
  }, []);

  return (
    <CoinDeskContext.Provider value={{ ...currentPrice }}>
      {children}
    </CoinDeskContext.Provider>
  );
};

export const ConDeskConsumer = CoinDeskContext.Consumer;
export default CoinDeskContext;
