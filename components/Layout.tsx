
import Box from "./Box"
import Footer from './Footer';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
    return (
        <Box>
            <Navbar />
            <Sidebar />
            {children}
            <Footer />
        </Box>
    )
}

export default Layout;
