import Link from "next/link";
import Button from "./Button"
import styles from "../styles/components/Footer.module.css";
import { signIn, useSession } from "next-auth/client";


const User = () => {
  const [session, loading] = useSession()

  if (session) {
    return null
  }

  return (<Button onClick={() => signIn('google')}>Conectar</Button>)
}

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p>
          Luise Fialho
        </p>
        <p>
          Editora e Redatora
        </p>
        <Link href="/contato">
          <a>
            CONTATO <br /> 2021©
          </a>
        </Link>
        <User />
      </div>
    </footer>
  );
};

export default Footer;
