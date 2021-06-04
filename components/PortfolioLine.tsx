import { useState } from "react";
import {
  motion,
  AnimateSharedLayout,
  AnimatePresence,
  useAnimation,
} from "framer-motion";
import PortfolioBody from "../components/PortfolioBody";
import styles from "../styles/components/PortfolioLine.module.css";

type Props = {
  title?: string;
  date?: string;
  info?: string;
};

const PortfolioLine = ({ title, date, info }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      // animate={{ height: 10 }}
      className={styles.portfolioPreview}
      onClick={() => setIsOpen(!isOpen)}
    >
      <h4>{title}</h4>
      <p className="comment">({date})</p>
      {isOpen && (
        // <PortfolioBody info={info} />
        <motion.div>{info}</motion.div>
      )}
    </div>
  );
};

export default PortfolioLine;
