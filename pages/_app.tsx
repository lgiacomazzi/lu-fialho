import { AppProps } from "next/app";
import { Provider } from 'next-auth/client'

import UserInterfaceContextProvider from "../contexts/UserInterfaceContext";
import Adminbar from "../components/Adminbar";

import "../styles/index.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
      <UserInterfaceContextProvider>
        <Adminbar />
        <Component {...pageProps} />
      </UserInterfaceContextProvider>
    </Provider>

  );
}
