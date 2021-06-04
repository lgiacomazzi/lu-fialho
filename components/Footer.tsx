import Link from "next/link";
import styles from "../styles/components/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p>
          LUISE FIALHO <br /> EDITORA E REDATORA
        </p>
        <Link href="/contato">
          <a>
            CONTATO <br /> 2021©
          </a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
