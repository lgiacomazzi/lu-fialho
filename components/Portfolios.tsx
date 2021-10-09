import PortfolioLine from "./PortfolioLine";
import { PortfolioType } from "../types/portfolios";
import { AnimateSharedLayout } from "framer-motion";

type Props = {
  portfolios: PortfolioType[];
};

const Portfolios = ({ portfolios }: Props) => {
  return (
    <div id="portfolios" className="container-fluid">
      {portfolios?.map((portfolio) => (
        <AnimateSharedLayout>
          <PortfolioLine
            title={portfolio.title}
            subtitle={portfolio.subtitle}
            date={portfolio.date}
            info={portfolio.info}
            links={portfolio.links}
          />
        </AnimateSharedLayout>
      ))}
    </div>
  );
};

export default Portfolios;
