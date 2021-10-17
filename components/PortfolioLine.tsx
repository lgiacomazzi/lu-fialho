import { useState } from "react";
import PortfolioBody from "../components/PortfolioBody";
import { PortfolioType } from "../types/portfolios";
import Icon from "./Icon";

import styles from "../styles/components/PortfolioLine.module.css";

type PortfolioLineProps = {
  portfolio: PortfolioType;
}

const PortfolioLine = ({ portfolio }: PortfolioLineProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { title, subtitle, date, info, image, links, youtube } = portfolio;

  return (
    <div
      className={styles.portfolioPreview}
      data-open={isOpen}
    >
      {image &&
        <img
          onClick={() => setIsOpen(true)}
          src={`/portfolio/${image}`}
          alt={portfolio.title}
          width="100%" />}

      <div className={styles.portfolioPreviewContent}>
        <div className={styles.portfolioHeader}>
          <h3 onClick={() => setIsOpen(true)}>{title}</h3>
          <span className="comment">{date}</span>
        </div>
        <ul className={styles.portfolioSubtitle}>
          {subtitle && subtitle.map((subtitleItem) => <li>{subtitleItem}</li>)}
        </ul>

        {isOpen && <PortfolioBody info={info} youtube={youtube} links={links} />}
      </div>
      <button
        className={styles.toggle}
      >
        <Icon icon="close" size={20} />
      </button>
      <div className={styles.overlay} />
    </div>
  );
};

export default PortfolioLine;
