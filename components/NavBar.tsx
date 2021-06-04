import Link from "next/link";
import Icon from "./Icon";
import styles from "../styles/components/Navbar.module.css";

export const NavLink = ({ children, href }) => {
  return (
    <Link href={href}>
      <a className={styles.navLink}>{children}</a>
    </Link>
  );
};

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Icon icon="menu" size={28}></Icon>
      <h5>Luise Fialho</h5>
      <Icon icon="search" size={28}></Icon>
      <div className={styles.navbarMenu}>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/portfolio">Portfolio</NavLink>
        <NavLink href="/blog">Blog</NavLink>
        <NavLink href="/sobre-mim">Sobre Mim</NavLink>
        <NavLink href="/contato">Contato</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
