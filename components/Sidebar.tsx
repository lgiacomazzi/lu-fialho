import styles from "../styles/components/Navbar.module.css";
import { NavMenu } from "./Navbar";
import { UserInterfaceContext } from "../contexts/UserInterfaceContext";
import { motion } from "framer-motion";
import { useContext } from "react";
import Icon from './Icon'

const CloseButton = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(UserInterfaceContext);

  return (
    <motion.button
      whileTap={{ scale: 0.8 }}
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      className={styles.sidebarCloseButton}
    >
      <Icon icon="close" size={28}></Icon>
    </motion.button>
  );
};

const Item = ({ children }) => {
  return <a className={styles.sidebarItem}><h3>{children}</h3></a>
}

const Sidebar = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(UserInterfaceContext);

  return (
    <motion.div className={styles.navbarMenuPage} data-open={isMenuOpen}>
      <CloseButton />
      <Item>Home</Item>
      <Item>Biografia</Item>
      {/* {portfolios && portfolios.map((portfolio) => <Item>{portfolio.item}</Item>)} */}
      <Item>Contato</Item>
    </motion.div>
  );
};

export default Sidebar;
