import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../styles/components/Intro.module.css";
import Icon from "./Icon";

const Intro = () => {
  return (
    <div className={styles.intro + " container"}>
      <motion.div
        initial={{ scale: 0, opacity: 0.5 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Image src="/avatar.png" alt="Luise Fialho" width={70} height={70} />
      </motion.div>
      <motion.h1
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        Oi! Sou <a href="/">editora</a>, <a href="/">redatora</a> e{" "}
        <a href="/">produtora</a> de conteúdo com foco em literatura e mercado
        editorial<span className="blink">_</span>
      </motion.h1>
      <motion.a
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
