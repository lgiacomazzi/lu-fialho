import styles from "../styles/components/Navbar.module.css";
import { NavMenu } from "./Navbar";
import { UserInterfaceContext } from "../contexts/UserInterfaceContext";
import { motion } from "framer-motion";
import { useContext } from "react";

const transition = { duration: 6, ease: [0.65, 0, 0.35, 1] };

const Sidebar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(UserInterfaceContext);

  const sidebarState = {
    open: {
      x: 200,
    },
    close: {
      x: 0,
    },
  };

  return (
    <motion.div className={styles.navbarMenuPage}>
      <NavMenu />
    </motion.div>
  );
};

export default Sidebar;
