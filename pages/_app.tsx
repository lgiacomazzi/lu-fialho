import { AppProps } from "next/app";
import UserInterfaceContextProvider from "../contexts/UserInterfaceContext";
import Grid from "../components/Grid";
import Sidebar from "../components/Sidebar";
import "../styles/index.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserInterfaceContextProvider>
      <Grid>
        <Sidebar />
        <Component {...pageProps} />
      </Grid>
    </UserInterfaceContextProvider>
  );
}
