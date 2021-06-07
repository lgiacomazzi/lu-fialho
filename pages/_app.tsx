import { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import UserInterfaceContextProvider from "../contexts/UserInterfaceContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import "../styles/index.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserInterfaceContextProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </UserInterfaceContextProvider>
  );
}
