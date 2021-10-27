import Box from "./Box"
import Footer from "./Footer";
import Icon from "./Icon"
import Router, { useRouter } from 'next/router'
import Button, { RoundButton } from "./Button";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useContext } from "react";
import { UserInterfaceContext } from "../contexts/UserInterfaceContext";
import { AnimatePresence, motion } from "framer-motion";

const Overlay = () => {
    const { isMenuOpen, setIsMenuOpen } = useContext(UserInterfaceContext);

    return (
        <AnimatePresence>
            {isMenuOpen && (
                <motion.div
                    className="overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: .7 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsMenuOpen(false)}
                />
            )}
        </AnimatePresence>
    )
}

const ScrollTop = () => {

    return (
        <RoundButton size={44} position="fixed" bottom={16} right={16}>
            <Icon icon="arrow_up" size={24} />
        </RoundButton>
    )
}

const Layout = ({ children, home = false }) => {
    const { pathname } = useRouter();
    if (pathname === "/") {
        home = true;
    }

    return (
        <Box pt={home ? 0 : 60}>
            <Navbar />
            <Sidebar />
            {children}
            {/* <ScrollTop /> */}
            <Footer />
            <Overlay />
        </Box>
    )
}

export default Layout;
