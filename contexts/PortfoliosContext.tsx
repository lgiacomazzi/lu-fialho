import { createContext, useEffect, useState } from "react";
import { PortfolioType } from "../types/portfolios";

type PortfolioContextProps = {
  portfolios?: PortfolioType[],
  setPortfolios: ([]) => void,
};

export const PortfoliosContext = createContext({} as PortfolioContextProps);

const PortfoliosContextProvider: React.FC<{}> = ({ children }) => {
  const [portfolios, setPortfolios] = useState<PortfolioType[]>([]);

  useEffect(() => {
    console.log(portfolios)

  }, [portfolios])

  return (
    <PortfoliosContext.Provider value={{ portfolios, setPortfolios }}>
      {children}
    </PortfoliosContext.Provider>
  );
};

export default PortfoliosContextProvider;
