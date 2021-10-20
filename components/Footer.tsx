import Link from "next/link";
import Button from "./Button"
import styles from "../styles/components/Footer.module.css";
import { signIn, useSession } from "next-auth/client";
import { useContext } from "react";
import { PortfoliosContext } from "../contexts/PortfoliosContext";
import { useRouter } from "next/router";
import Icon from "./Icon";

const User = () => {
  const [session, loading] = useSession()

  if (session) {
    return null
  }

  return (<Button onClick={() => signIn('google')}>Conectar</Button>)
}

const Item = ({ children, url = "/" }) => {
  const { pathname } = useRouter();
  return (
    <Link href={url}>
      <a
        className={styles.footerItem}
        data-active={pathname === url}
      >
        {children}
      </a>
    </Link>
  )
}

const Footer = () => {
  const { portfolios } = useContext(PortfoliosContext)

  return (
    <footer className={styles.footer}>
      <div className="container" style={{ padding: 16 }}>


        <div className={styles.footerBody}>
          <div>
            <Item url="/">Home</Item>
            <Item url="/about">Sobre mim</Item>
            <Item url="/contact">Contato</Item>
            <Item url="/portfolio">Portfólio</Item>
          </div>
          <div className={styles.portfolioLinks}>
            {portfolios && portfolios.map((portfolio) =>
              <Item url="/portfolio">
                <Icon icon="folder" />{portfolio.title}
              </Item>)}
          </div>
        </div>
        <h3>Luise Fialho</h3>
        <p>Editora e Redatora</p>
        <span>Copyright © Luise Fialho, 2021</span>
      </div>
    </footer>
  );
};

export default Footer;
