import Footer from "./Footer";
import Meta from "./Meta";
import Navbar from "./Navbar";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <Navbar />
      <main className="container-fluid">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
