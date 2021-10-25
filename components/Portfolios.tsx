import { useContext } from "react";
import PortfolioLine from "../components/PortfolioLine";
import { PortfoliosContext } from "../contexts/PortfoliosContext";

const Portfolios = () => {
    const { portfolios } = useContext(PortfoliosContext)

    return (
        <div id="portfolios" className="container">
            <h2>Portfólio</h2>
            {portfolios?.map((portfolio) => (
                <PortfolioLine portfolio={portfolio} />
            ))}
        </div>
    )
}

export default Portfolios;