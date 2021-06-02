import PortfolioLine from "./PortfolioLine";
import PortfoliosType from "../types/portfolios";

type Props = {
  portfolios: PortfoliosType[];
};

const Portfolios = ({ portfolios }: Props) => {
  return (
    <div className="portfoliosContainer">
      {portfolios.map((portfolio) => (
        <PortfolioLine
          title={portfolio.title}
          date={portfolio.date}
          info={portfolio.info}
        />
      ))}
    </div>
  );
};

export default Portfolios;
