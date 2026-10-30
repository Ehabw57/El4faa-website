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
  resolve: {
    dedupe: ["preact"],
  },
  server: { middlewareMode: true },
  appType: "custom",
});

app.use(vite.middlewares);
app.use(
  "/design-systm",
  express.static(fileURLToPath(new URL("./public/", import.meta.url))),
);

app.use(async (req, res, next) => {
  try {
    const { renderPage } = await vite.ssrLoadModule(
      "/server/src/entry-server.jsx",
    );
    const page = await renderPage(req.path);

    res.status(page.status).type("html").send(`<!doctype html>
    <html lang="ar" dir="rtl"> ${page.html} </html>`);
  } catch (error) {
    vite.ssrFixStacktrace(error);
    next(error);
  }
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Website running at http://localhost:3000");
});
