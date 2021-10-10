import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../styles/components/Intro.module.css";
import Icon from "./Icon";

// const transition = { duration: 0.6, ease: [0.65, 0, 0.35, 1] };

const Intro = () => {
  return (
    <div className={styles.intro + " container"}>
      <motion.div
        // initial={{ y: -50, x: -50, opacity: 0, scale: 0 }}
        // animate={{ y: 0, x: 0, opacity: 1, scale: 1 }}
        className={styles.avatar}
      >
        <Image src="/avatar.png" alt="Luise Fialho" width={60} height={60} />
        <div>
          <h4>Luise Fialho</h4>
          <p>Editora e Redatora</p>
        </div>
      </motion.div>
      <motion.h1
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // transition={{ delay: 0.3 }}
        className={styles.manifest}
      >
        Oi! Sou editora, redatora e produtora de conteúdo com foco em literatura e mercado
        editorial<span className={styles.blink}>_</span>
      </motion.h1>
      <motion.a
        // initial={{ y: 100, opacity: 0 }}
        // animate={{ y: 0, opacity: 1 }}
        // transition={{ delay: 0.6 }}
        className={styles.introCTA}
        // whileTap={{ scale: 0.8, opacity: 0.8 }}
        href="/#portfolios"
      >
        <Icon icon="arrow_down" size={20} />
        Conheça meu portfólio
      </motion.a>
    </div>
  );
};

export default Intro;
