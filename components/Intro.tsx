import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../styles/components/Intro.module.css";
import Icon from "./Icon";

const transition = { duration: 0.6, ease: [0.65, 0, 0.35, 1] };

const Intro = () => {
  return (
    <div className={styles.intro + " container"}>
      <div>
        <motion.div
          initial={{ y: -50, x: -50, opacity: 0, scale: 0 }}
          animate={{ y: 0, x: 0, opacity: 1, scale: 1 }}
        >
          <Image src="/avatar.png" alt="Luise Fialho" width={70} height={70} />
        </motion.div>
        <motion.div></motion.div>
      </div>
      <motion.h1
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className={styles.manifest}
      >
        Oi! Sou <a href="/">editora</a>, <a href="/">redatora</a> e{" "}
        <a href="/">produtora</a> de conteúdo com foco em literatura e mercado
        editorial<span className="blink">_</span>
      </motion.h1>
      <motion.a
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className={styles.introCTA}
        whileTap={{ scale: 0.8, opacity: 0.8 }}
        href="/#portfolios"
      >
        <Icon icon="arrow_down" size={20} />
        <p className="comment">Conheça meu portfólio</p>
      </motion.a>
    </div>
  );
};

export default Intro;
