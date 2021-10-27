import { useContext, useEffect } from "react";
import Link from "next/link"
import { useRouter } from 'next/router'
import { motion } from "framer-motion"

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
      top={14}
      right={20}
      zIndex={1000}
      onClick={() => setIsMenuOpen(!isMenuOpen)}>
      <Icon icon="close" size={20} />
    </RoundButton>)
};

const Item = ({ children, url = "/" }) => {
  const { pathname } = useRouter();
  const variants = {
    hidden: { opacity: 0, x: 10 },
    show: { opacity: 1, x: 0 },
  }
  return (
    <Link href={url}>
      <motion.a
        variants={variants}
        className={styles.sidebarItem}
        data-active={pathname === url}
      >
        <span>{children}</span>
      </motion.a>
    </Link>
  )
}

const SubItem = ({ portfolio }) => {
  return (
    <Link href={portfolio._id}>
      <a className={styles.sidebarSubItem}>
        <Icon icon="arrow_right" size={20} />
        <span>{portfolio.title}</span>
      </a>
    </Link>
  )
}

const Sidebar = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(UserInterfaceContext);
  // const { portfolios } = useContext(PortfoliosContext)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  useEffect(() => setIsMenuOpen(false), []) //fechar quando clicar

  return (
    <div className={styles.sidebar} data-open={isMenuOpen}>
      <CloseButton />
      <motion.div
        initial="hidden"
        animate={isMenuOpen ? "show" : "hidden"}
        variants={container}
      >
        <Item url="/">Home</Item>
        <Item url="/about">Sobre mim</Item>
        <Item url="/contact">Contato</Item>
        <Item url="/portfolio">Portfolio</Item>
      </motion.div>

      {/* {portfolios && portfolios.map((portfolio) => <SubItem portfolio={portfolio} />)} */}

      <div className={styles.sidebarFooter}>
        <h3>Luise Fialho</h3>
        <p>Editora e Redatora</p>
        <span>Copyright © Luise Fialho, 2021</span>
      </div>
    </div>
  );
};

export default Sidebar;
