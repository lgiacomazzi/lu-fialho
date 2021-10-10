import { createContext, useState } from "react";
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'

type InterfaceProps = {
  isMenuOpen?: boolean;
  setIsMenuOpen: (boolean) => void;
};

export const UserInterfaceContext = createContext({} as InterfaceProps);

const UserInterfaceContextProvider: React.FC<{}> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <UserInterfaceContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </UserInterfaceContext.Provider>
  );
};

export default UserInterfaceContextProvider;
