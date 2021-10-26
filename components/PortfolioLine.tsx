import { useState } from "react";
import Image from "next/image"
import PortfolioBody from "../components/PortfolioBody";
import { PortfolioType } from "../types/portfolios";
import Icon from "./Icon";

import styles from "../styles/components/PortfolioLine.module.css";
import Button from "./Button";

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
        <div className={styles.portfolioImage}>
          <Image
            priority
            onClick={() => setIsOpen(true)}
            src={`/portfolio/${image}`}
            alt={portfolio.title}
            layout="fill"
            objectFit="cover" />
        </div>}

      <div className={styles.portfolioHeader}>
        <h3 onClick={() => setIsOpen(true)}>{title}</h3>
        <div className={styles.portfolioDate}>{date}</div>
      </div>

      <ul className={styles.portfolioSubtitle}>
        {subtitle && subtitle.map((subtitleItem) => <li>{subtitleItem}</li>)}
      </ul>

      {isOpen && <PortfolioBody info={info} youtube={youtube} links={links} />}

      <button
        className={styles.toggle}
        onClick={() => setIsOpen(!isOpen)}> Ver mais <Icon icon="expand_more" size={16} />
      </button>

    </div>
  );
};

export default PortfolioLine;
