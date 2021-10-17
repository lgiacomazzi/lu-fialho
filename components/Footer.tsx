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
    <footer className={styles.footer + " container"}>
    </footer>
  );
};

export default Footer;
