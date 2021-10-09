import { createContext, useState } from "react";
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'

type InterfaceProps = {
  isSidebarOpen?: boolean;
  setIsSidebarOpen: (boolean) => void;
};

export const UserInterfaceContext = createContext({} as InterfaceProps);

const UserInterfaceContextProvider: React.FC<{}> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <UserInterfaceContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </UserInterfaceContext.Provider>
  );
};

export default UserInterfaceContextProvider;
