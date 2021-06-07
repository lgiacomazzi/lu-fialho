type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return <div className="container-fluid">{children}</div>;
};

export default Layout;
