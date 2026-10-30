import { h } from "preact";
import render from "preact-render-to-string";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import CurrentNeeds from "./pages/CurrentNeeds.jsx";
import NotFound from "./pages/NotFound.jsx";

function getposts() {
  const obj = { name: "Ahmed", age: 20 };
  return [obj, obj, obj];
}
const pages = {
  "/": {
    component: Home,
    loadData: async () => {
      return { posts: getposts() };
    },
  },
  "/about": {
    component: About,
  },
  "/current-needs": {
    component: CurrentNeeds,
  },
};

export async function renderPage(pathname) {
  const page = pages[pathname];

  if (!page) {
    return {
      html: render(h(NotFound)),
      status: 404,
    };
  }
  const props = page.loadData ? await page.loadData() : {};

  return {
    html: render(h(page.component, props)),
    status: 200,
  };
}
