import Link from "next/link";
import Icon from "./Icon";
import styles from "../styles/components/Navbar.module.css";
import Container from "./Container";
import Dropdown from "./Dropdown";
import { UserInterfaceContext } from "../contexts/UserInterfaceContext";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { useContext } from "react";
import { signIn, signOut, useSession } from "next-auth/client";

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

export const BurgerMenu = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(UserInterfaceContext);

  return (
    <motion.div
      whileTap={{ scale: 0.8 }}
      onClick={() => setIsSidebarOpen(!isSidebarOpen)}
    >
      <Icon icon="menu" size={28}></Icon>
    </motion.div>
  );
};

const Navbar = () => {
  const { scrollYProgress } = useViewportScroll();
  const visibility = useTransform(scrollYProgress, [0, 100], [0, 100]);

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={styles.navbar + " container"}
    >
      <BurgerMenu />
      <Link href={"/"}>
        <motion.h5 style={{ opacity: visibility }} initial={{ opacity: 0 }}>
          Luise Fialho
        </motion.h5>
      </Link>
      <div className={styles.navbarRightSide}>
        <Icon icon="linkedin" size={28}></Icon>
        <NavMenu />
      </div>
    </motion.div>
  );
};
export default Navbar;
