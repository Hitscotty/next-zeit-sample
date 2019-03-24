import { createContext, useState, useEffect } from "react";

export const CoinDeskContext = createContext({});

export const CoinDeskProvider = ({ children }) => {
  const [bpi, setBpi] = useState({});

  const getCurrentPrice = async function() {
    const res = await fetch(
      "https://api.coindesk.com/v1/bpi/currentprice.json"
    );
    const data = await res.json();
    setBpi(data.bpi);
  };

  useEffect(() => {
    getCurrentPrice();
  }, []);

  return (
    <CoinDeskContext.Provider value={{ bpi }}>
      {children}
    </CoinDeskContext.Provider>
  );
};

export const ConDeskConsumer = CoinDeskContext.Consumer;
export default CoinDeskContext;
