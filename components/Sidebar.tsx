import { useContext, useEffect } from "react";
import Link from "next/link"
import { useRouter } from 'next/router'

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
  const { pathname } = useRouter();
  return (
    <Link href={url}>
      <a
        className={styles.sidebarItem}
        data-active={pathname === url}
      >
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

  useEffect(() => setIsMenuOpen(false), []) //fechar quando clicar

  return (
    <div className={styles.sidebar} data-open={isMenuOpen}>
      <CloseButton />
      <Item url="/">Home</Item>
      <Item url="/about">Sobre mim</Item>
      <Item url="/contact">Contato</Item>
      <Item url="/portfolio">Portfolio</Item>
      {portfolios && portfolios.map((portfolio) => <SubItem portfolio={portfolio} />)}
      <div className={styles.sidebarFooter}>
        <p>Copyright © Luise Fialho, 2021</p>
      </div>
    </div>
  );
};

export default Sidebar;
