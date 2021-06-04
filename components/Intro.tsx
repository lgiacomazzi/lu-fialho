import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../styles/components/Intro.module.css";

const Intro = () => {
  return (
    <div className={styles.intro + " container"}>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <Image src="/avatar.png" alt="Luise Fialho" width={70} height={70} />
      </motion.div>
      <h1>
        Oi! Sou <a>editora</a>, redatora e produtora de conteúdo com foco em
        literatura e mercado editorial.
      </h1>
      <p>Conheça meu portfólio</p>
    </div>
  );
};

export default Intro;
