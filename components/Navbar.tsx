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
  const { isMenuOpen, setIsMenuOpen } = useContext(UserInterfaceContext);

  return (
    <motion.button
      whileTap={{ scale: 0.8 }}
      onClick={() => {
        setIsMenuOpen(!isMenuOpen)
        console.log(isMenuOpen)
      }
      }
    >
      <Icon icon="menu" size={28}></Icon>
    </motion.button>
  );
};

const Navbar = () => {
  const { scrollYProgress } = useViewportScroll();
  const visibility = useTransform(scrollYProgress, [0, 10], [0, 100]);

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={styles.navbar + " container"}
    >
      <BurgerMenu />
      <Link href={"/"}>
        <motion.div style={{ opacity: visibility }} initial={{ opacity: 0 }} className={styles.navbarCenter}>
          <h5>Luise Fialho</h5>
          <p className="comment">Editora e Redatora</p>
        </motion.div>
      </Link>
      <div className={styles.navbarRightSide}>
        <Icon icon="linkedin" size={28}></Icon>
        <NavMenu />
      </div>
    </motion.div>
  );
};
export default Navbar;
