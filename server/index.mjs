import express from "express";
import { createServer as createViteServer } from "vite";
import preact from "@preact/preset-vite";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "node:url";

const projectRoot = fileURLToPath(new URL("../", import.meta.url));
const app = express();

const vite = await createViteServer({
  root: projectRoot,
  configFile: false,
  plugins: [preact(), tailwindcss()],
  server: { middlewareMode: true },
  appType: "custom",
});

app.use(vite.middlewares);
app.use("/design-systm", express.static(
  fileURLToPath(new URL("./public/", import.meta.url))
));

app.use(async (req, res, next) => {
  try {
    const { renderPage } = await vite.ssrLoadModule(
      "/server/src/entry-server.jsx"
    );
    const page = await renderPage(req.path);

    res.status(page.status).type("html").send(`<!doctype html>
<html lang="ar" dir="rtl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="${page.description}" />
    <meta name="robots" content="index, follow" />
    <title>${page.title}</title>
    <link rel="stylesheet" href="/server/src/styles.css" />
  </head>
  <body>
    <div id="app">${page.html}</div>
  </body>
</html>`);
  } catch (error) {
    vite.ssrFixStacktrace(error);
    next(error);
  }
});

app.listen(3000, "127.0.0.1", () => {
  console.log("Website running at http://localhost:3000");
});
