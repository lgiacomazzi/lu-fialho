import styles from "../styles/components/Navbar.module.css";
import { NavMenu } from "./Navbar";
import Link from "next/link"
import { PortfoliosContext } from "../contexts/PortfoliosContext";
import { UserInterfaceContext } from "../contexts/UserInterfaceContext";
import { motion } from "framer-motion";
import { useContext, useEffect } from "react";
import Icon from './Icon'
import { getAllPortfolios } from "../pages/api/portfolios";

const CloseButton = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(UserInterfaceContext);

  return (
    <motion.button
      whileTap={{ scale: 0.8 }}
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      className={styles.sidebarCloseButton}
    >
      <Icon icon="close" size={28}></Icon>
    </motion.button>
  );
};

const Item = ({ children, url = "/" }) => {
  return (
    <Link href={url}>
      <a className={styles.sidebarItem}>
        <h2>{children}</h2>
      </a>
    </Link>
  )
}

const SubItem = ({ portfolio }) => {
  return (
    <Link href={portfolio._id}>
      <a className={styles.sidebarItem}>
        <h3>_{portfolio.title}</h3>
      </a>
    </Link>
  )
}

const Sidebar = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(UserInterfaceContext);
  const { portfolios } = useContext(PortfoliosContext)

  return (
    <motion.div className={styles.navbarMenuPage} data-open={isMenuOpen}>
      <CloseButton />
      <Item>Home</Item>
      <Item url="/about">Sobre mim</Item>
      <Item url="/portfolio">Portfolio</Item>
      {portfolios && portfolios.map((portfolio) => <SubItem portfolio={portfolio} />)}
      <Item url="/contact">Contato</Item>
    </motion.div>
  );
};

export default Sidebar;
