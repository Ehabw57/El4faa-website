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
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <title>{title}</title>
        <link rel="stylesheet" href="/server/src/styles.css" />
      </head>
      <body id="app">
        <Navbar currentPage={currentPath} />
        <main class="mt-20">{children}</main>
        <Footer />
      </body>
    </>
  );
}
