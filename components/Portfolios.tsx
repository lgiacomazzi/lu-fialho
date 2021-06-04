import PortfolioLine from "./PortfolioLine";
import PortfoliosType from "../types/portfolios";
import { AnimateSharedLayout } from "framer-motion";

type Props = {
  portfolios: PortfoliosType[];
};

const Portfolios = ({ portfolios }: Props) => {
  return (
    <div className="container-fluid">
      {portfolios?.map((portfolio) => (
        <AnimateSharedLayout>
          <PortfolioLine
            title={portfolio.title}
            date={portfolio.date}
            info={portfolio.info}
          />
        </AnimateSharedLayout>
      ))}
    </div>
  );
};

export default Portfolios;
