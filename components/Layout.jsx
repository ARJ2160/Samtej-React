import Footer from './Footer';
import HeroNavbar from './HeroNavbar';

const Layout = ({ children }) => {
  return (
    <>
      <HeroNavbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
