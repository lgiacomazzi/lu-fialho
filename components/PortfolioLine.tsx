import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import PortfolioBody from "../components/PortfolioBody";
import styles from "../styles/components/PortfolioLine.module.css";
import { PortfolioType } from "../types/portfolios";

const PortfolioLine = ({ portfolio }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { title, subtitle, date, info, image, links } = portfolio;
  return (
    <div
      className={styles.portfolioPreview}
      onClick={() => setIsOpen(!isOpen)}
    >
      {image && <img src={`/portfolio/${image}`} alt="Luise Fialho" width="100%" />}

      <div className={styles.portfolioPreviewContent}>
        <p className="comment">({date})</p>
        <h2>{title}</h2>
        <p className="lead">{subtitle}</p>
        {isOpen && (
          // <PortfolioBody info={info} />
          <motion.div>{info}</motion.div>
        )}
      </div>
    </div>
  );
};

export default PortfolioLine;
