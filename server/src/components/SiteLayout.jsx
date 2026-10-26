import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

export default function SiteLayout({
  currentPath,
  title,
  description,
  children,
}) {
  return (
    <>
      <Navbar currentPath={currentPath} />
      {children}
      <Footer />
    </>
  );
}
