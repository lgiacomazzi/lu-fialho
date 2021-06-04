import Link from "next/link";
import styles from "../styles/components/Navbar.module.css";

export const NavLink = ({ children, href }) => {
  return (
    <Link href={href}>
      <a className={styles.navLink}>{children}</a>
    </Link>
  );
};

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/portfolio">Portfolio</NavLink>
      <NavLink href="/blog">Blog</NavLink>
      <NavLink href="/sobre-mim">Sobre Mim</NavLink>
      <NavLink href="/contato">Contato</NavLink>
    </div>
  );
};

export default NavBar;
