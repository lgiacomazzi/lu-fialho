import Box from "./Box"
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <Box>
            {children}
            <Footer />
        </Box>
    )
}

export default Layout;
