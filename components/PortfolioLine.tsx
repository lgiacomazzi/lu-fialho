import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import PortfolioBody from "../components/PortfolioBody";
import styles from "../styles/components/PortfolioLine.module.css";
import { PortfolioType } from "../types/portfolios";

type PortfolioLineProps = {
  portfolio: PortfolioType;
}

const PortfolioLine = ({ portfolio }: PortfolioLineProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const { title, subtitle, date, info, image, links, youtube } = portfolio;
  return (
    <div
      className={styles.portfolioPreview}
      onClick={() => setIsOpen(!isOpen)}
      data-open={isOpen}
    >
      {image && <img src={`/portfolio/${image}`} alt="Luise Fialho" width="100%" />}

      <div className={styles.portfolioPreviewContent}>
        <div className={styles.portfolioHeader}>
          <h3>{title}</h3>
          <p className="comment">({date})</p>
        </div>
        <p>{subtitle}</p>

        <PortfolioBody info={info} youtube={youtube} />
        {/* )} */}
      </div>
      <div className={styles.overlay} data-open={isOpen} />
    </div>
  );
};

export default PortfolioLine;
