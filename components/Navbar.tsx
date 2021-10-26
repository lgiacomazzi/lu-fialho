import Link from "next/link";
import Icon from "./Icon";
import { UserInterfaceContext } from "../contexts/UserInterfaceContext";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { useContext } from "react";
import { signIn, signOut, useSession } from "next-auth/client";
import Button, { OutlineButton } from "./Button";
import styles from "../styles/components/Navbar.module.css";
import Avatar from "./Avatar";
import router, { useRouter } from "next/router";

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
      {/* <NavLink href="/blog">Blog</NavLink> */}
      <NavLink href="/about">Sobre Mim</NavLink>
      {/* <NavLink href="/contact">Contato</NavLink> */}
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
  const { pathname } = useRouter();

  const { scrollY } = useViewportScroll();
  console.log(scrollY)
  let visibility = useTransform(scrollY, [0, 0], [-100, 0]);

  if (pathname === "/") {
    visibility = useTransform(scrollY, [0, 399, 400], [-100, -100, 0]);
  }

  return (
    <motion.div
      style={{ y: visibility }}
      transition={{ duration: 2 }}
      className={styles.navbar}
    >
      <Link href={"/"}>
        <a style={{ textDecoration: "none" }}>
          <Avatar picture={false} subtitle={false} />
        </a>
      </Link>
      <div className={styles.navbarRightSide}>
        <NavMenu />
        <Button onClick={() => router.push("/contact")}>Contato</Button>
        <BurgerMenu />
      </div>
    </motion.div >
  );
};
export default Navbar;
