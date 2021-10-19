import { motion } from "framer-motion";
import styles from "../styles/components/Intro.module.css";
import Icon from "./Icon";
import Avatar from "./Avatar";
import { BurgerMenu } from "./Navbar";
import Button from "./Button";

// const transition = { duration: 0.6, ease: [0.65, 0, 0.35, 1] };

const Intro = () => {
  return (
    <div className={styles.intro + " container"}>
      <div className={styles.introHeader}>
        <Avatar subtitle />
        <BurgerMenu />
      </div>
      <motion.h1
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // transition={{ delay: 0.3 }}
        className={styles.manifest}
      >
        Oi! Sou editora, redatora e produtora de conteúdo
        {/* Oi! Me chamo Luise Fialho. Trabalho com edição, redação e produção de conteúdo */}
        {/* Oi! Sou Luise fialho, editora e redatora. Trabalho com produção de conteúdo e leitura crítica em Porto Alegre. */}
        <span className={styles.blink}>|</span>
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
      <Button>Conheça meu portfólio</Button>
    </div>
  );
};

export default Intro;
