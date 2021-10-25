import Box from "./Box"
import Footer from "./Footer";
import Icon from "./Icon"
import Router from 'next/router'
import { RoundButton } from "./Button";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useContext } from "react";
import { UserInterfaceContext } from "../contexts/UserInterfaceContext";
import { AnimatePresence, motion } from "framer-motion";

const BackButton = () => {
    return (
        <RoundButton
            position="fixed"
            top={16}
            left={16}
            zIndex={1000}
            onClick={() => Router.back()}>
            <Icon icon="chevron-left" size={20} />
        </RoundButton>)
}

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

const Layout = ({ children, home = false }) => {
    return (
        <Box>
            {!home && <Navbar />}
            <Sidebar />
            {children}
            <Footer />
            <Overlay />
        </Box>
    )
}

export default Layout;
