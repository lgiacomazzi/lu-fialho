import { motion } from "framer-motion";
import styles from "../styles/components/Intro.module.css";
import Icon from "./Icon";
import Avatar from "./Avatar";
import { BurgerMenu } from "./Navbar";
import Button, { OutlineButton } from "./Button";
import router from "next/router";

// const transition = { duration: 0.6, ease: [0.65, 0, 0.35, 1] };

const Intro = () => {
  return (
    <div className={styles.intro + " container"}>
      <div className={styles.introHeader}>
        <Avatar />
        <BurgerMenu />
      </div>
      <motion.h1
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className={styles.manifest}
      >
        Oi! Sou editora, redatora e produtora de conteúdo
        {/* Oi! Me chamo Luise Fialho. Trabalho com edição, redação e produção de conteúdo */}
        {/* Oi! Sou Luise fialho, editora e redatora. Trabalho com produção de conteúdo e leitura crítica em Porto Alegre. */}
        <span className={styles.blink}>|</span>
      </motion.h1>
      <motion.a
        className={styles.introCTA}
        href="/#portfolios"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        Conheça meu portfólio
        <Icon icon="arrow_down" size={24} />
      </motion.a>
      <Button style={{ alignSelf: "flex-end" }} onClick={() => router.push("/contact")}>
        Contato
        <Icon icon="arrow_right" size={24} />
      </Button>
    </div >
  );
};

export default Intro;
