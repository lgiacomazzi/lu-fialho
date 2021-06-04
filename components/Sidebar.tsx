import Link from "next/link";
import Icon from "./Icon";
import styles from "../styles/components/Navbar.module.css";
import { NavMenu } from "./Navbar";
import { UserInterfaceContext } from "../contexts/UserInterfaceContext";
import { motion } from "framer-motion";
import { useContext } from "react";

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
    <motion.div
      initial={sidebarState.close}
      animate={isSidebarOpen ? "open" : "close"}
      variants={sidebarState}
      className={styles.navbarMenuPage}
    >
      <NavMenu />
    </motion.div>
  );
};

export default Sidebar;
