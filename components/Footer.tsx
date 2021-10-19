import Link from "next/link";
import Button from "./Button"
import styles from "../styles/components/Footer.module.css";
import { signIn, useSession } from "next-auth/client";
import { useContext } from "react";
import { PortfoliosContext } from "../contexts/PortfoliosContext";

const User = () => {
  const [session, loading] = useSession()

  if (session) {
    return null
  }

  return (<Button onClick={() => signIn('google')}>Conectar</Button>)
}

const Footer = () => {
  const { portfolios } = useContext(PortfoliosContext)

  return (
    <footer className={styles.footer}>
      <div className="container">
        <h3>Luise Fialho</h3>

        <div className={styles.footerBody}>
          <Link href="/"><a><li>Home</li></a></Link>
          <Link href="/about"><a><li>Sobre mim</li></a></Link>
          <Link href="/contact"><a><li>Contato</li></a></Link>
          {portfolios && portfolios.map((portfolio) =>
            <Link href={`/portfolios/${portfolio._id}`}><a><li>{portfolio.title}</li></a></Link>)}
        </div>
        <p>Copyright © Luise Fialho, 2021</p>
      </div>
    </footer>
  );
};

export default Footer;
