import { createContext, useState } from "react";

type InterfaceProps = {
  isSidebarOpen?: boolean;
  setIsSidebarOpen: (boolean) => void;
};

export const UserInterfaceContext = createContext({} as InterfaceProps);

const UserInterfaceContextProvider: React.FC<{}> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <UserInterfaceContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
      {children}
    </UserInterfaceContext.Provider>
  );
};

export default UserInterfaceContextProvider;
