import Link from "next/link";
import Icon from "./Icon";
import { UserInterfaceContext } from "../contexts/UserInterfaceContext";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { useContext } from "react";
import { signIn, signOut, useSession } from "next-auth/client";
import Button, { OutlineButton } from "./Button";
import styles from "../styles/components/Navbar.module.css";
import Avatar from "./Avatar";

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
  const { isMenuOpen, setIsMenuOpen } = useContext(UserInterfaceContext);

  return (
    <button
      className={styles.navbarBurgerMenu}
      onClick={() => { setIsMenuOpen(!isMenuOpen) }
      }
    >
      <Icon icon="menu" size={28}></Icon>
    </button>
  );
};

const Navbar = () => {
  const { scrollYProgress } = useViewportScroll();
  const visibility = useTransform(scrollYProgress, [0, 10], [0, 100]);

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      className={styles.navbar}
    >

      <Link href={"/"}>
        <Avatar picture={false} />
      </Link>
      <div className={styles.navbarRightSide}>
        <OutlineButton href="/contact">Contato</OutlineButton>
        <BurgerMenu />
        <NavMenu />
      </div>
    </motion.div>
  );
};
export default Navbar;
