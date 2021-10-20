import { useContext } from "react";
import Link from "next/link"
import { useRouter } from 'next/router'
import { motion } from "framer-motion";

import Icon from './Icon'
import { RoundButton } from "./Button";
import styles from "../styles/components/Sidebar.module.css";
import { PortfoliosContext } from "../contexts/PortfoliosContext";
import { UserInterfaceContext } from "../contexts/UserInterfaceContext";

const CloseButton = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(UserInterfaceContext);

  return (
    <RoundButton
      position="absolute"
      top={24}
      right={24}
      zIndex={1000}
      onClick={() => setIsMenuOpen(!isMenuOpen)}>
      <Icon icon="close" size={20} />
    </RoundButton>)
};

const Item = ({ children, url = "/" }) => {
  return (
    <Link href={url}>
      <a className={styles.sidebarItem}>
        <span>{children}</span>
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
  const router = useRouter();
  console.log(router)
  return (
    <motion.div className={styles.sidebar} data-open={isMenuOpen}>
      <CloseButton />
      <Item url="/">Home</Item>
      <Item url="/about">Sobre mim</Item>
      <Item url="/contact">Contato</Item>
      <Item url="/portfolio">Portfolio</Item>
      {portfolios && portfolios.map((portfolio) => <SubItem portfolio={portfolio} />)}
    </motion.div>
  );
};

export default Sidebar;
