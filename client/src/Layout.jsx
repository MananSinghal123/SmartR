import Header from "./components/Header";
import Footer from "./components/Footer";
import "./Layout.css";
// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
