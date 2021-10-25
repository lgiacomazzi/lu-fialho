import Contact from "../components/Contact"
import Layout from "../components/Layout";

import { useContext } from "react";
import { PortfoliosContext } from "../contexts/PortfoliosContext";


const Contato = ({ portfolios }) => {
  const { setPortfolios } = useContext(PortfoliosContext); // ???
  setPortfolios(portfolios); // ???

  return (
    <Layout>
      <Contact />
    </Layout>
  )
};

export default Contato;
export { getStaticProps } from "../pages" // ???
