import Link from "next/link";
import Icon from "./Icon";
import styles from "../styles/components/Navbar.module.css";
import Container from "./Container";
import { UserInterfaceContext } from "../contexts/UserInterfaceContext";
import { motion } from "framer-motion";
import { useContext } from "react";

export const NavLink = ({ children, href }) => {
  return (
    <Link href={href}>
      <motion.a
        whileTap={{ scale: 0.9, opacity: 0.9 }}
        className={styles.navLink}
      >
        {children}
      </motion.a>
    </Link>
  );
};

export const NavLinkCTA = ({ children, href }) => {
  return (
    <Link href={href}>
      <motion.a
        whileTap={{ scale: 0.9, opacity: 0.9 }}
        className={styles.navLinkCTA}
      >
        {children}
      </motion.a>
    </Link>
  );
};

export const NavMenu = () => {
  return (
    <div className={styles.navbarMenu}>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/portfolio">Portfolio</NavLink>
      <NavLink href="/blog">Blog</NavLink>
      <NavLink href="/sobre-mim">Sobre Mim</NavLink>
      <NavLink href="/contato">Contato</NavLink>
    </div>
  );
};

export const NavMenuPage = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(UserInterfaceContext);
  const sidebarState = {
    open: {
      x: 200,
    },
    close: {
      x: 0,
    },
  };
  return (
    <motion.div
      initial={sidebarState.close}
      animate={isSidebarOpen ? "open" : "close"}
      variants={sidebarState}
      className={styles.navbarMenuPage}
    >
      <NavMenu />
    </motion.div>
  );
};

export const BurgerMenu = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(UserInterfaceContext);

  return (
    <motion.div
      whileTap={{ scale: 0.8, opacity: 0.8 }}
      onClick={() => setIsSidebarOpen(!isSidebarOpen)}
    >
      <Icon icon="menu" size={28}></Icon>
    </motion.div>
  );
};

const Navbar = () => {
  return (
    <motion.div className={styles.navbar + " container"}>
      <BurgerMenu />
      <h5>Luise Fialho</h5>
      <div className={styles.navbarRightSide}></div>
      <NavMenu />
      <NavMenuPage />
    </motion.div>
  );
};
export default Navbar;
