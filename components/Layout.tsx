import Box from "./Box"
import Footer from "./Footer";
import Icon from "./Icon"
import Router from 'next/router'
import { RoundButton } from "./Button";

const BackButton = () => {
    return (
        <RoundButton
            position="fixed"
            top={16}
            left={16}
            onClick={() => Router.back()}>
            <Icon icon="chevron-left" size={20} />
        </RoundButton>)
}

const Layout = ({ children, home = false }) => {
    return (
        <Box pt={!home && 32 + 16}>
            {!home && <BackButton />}
            {children}
            <Footer />
        </Box>
    )
}

export default Layout;
