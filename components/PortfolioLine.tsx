import Image from "next/image";
import { useState } from "react";
import {
  motion,
  AnimateSharedLayout,
  AnimatePresence,
  useAnimation,
} from "framer-motion";
import PortfolioBody from "../components/PortfolioBody";
import styles from "../styles/components/PortfolioLine.module.css";
import { PortfolioType } from "../types/portfolios";

const PortfolioLine = ({ title, subtitle, date, info }: PortfolioType) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      // animate={{ height: 10 }}
      className={styles.portfolioPreview}
      onClick={() => setIsOpen(!isOpen)}
    >
      <img src="/portfolio/teste.png" alt="Luise Fialho" width="100%" />
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
