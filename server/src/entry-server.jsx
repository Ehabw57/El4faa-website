import { h } from "preact";
import render from "preact-render-to-string";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";

function getposts() {
  const obj = { name: "Ahmed", age: 20 };
  return [obj, obj, obj];
}
const pages = {
  "/": {
    component: Home,
    title: "مجمع الشفاء الطبي ومسجد المدينة المنورة",
    description:
      "مشروع مجتمعي بقرية العليقات، مركز قوص، محافظة قنا، لخدمة الأهالي.",
    loadData: async () => {
      return { posts: getposts() };
    },
  },
  "/about": {
    component: About,
    title: "عن المشروع | مجمع الشفاء الطبي",
    description: "تعرّف على أهداف مجمع الشفاء الطبي ومسجد المدينة المنورة.",
  },
  "/contact": {
    component: Contact,
    title: "تواصل معنا | مجمع الشفاء الطبي",
    description:
      "معلومات التواصل بشأن مشروع مجمع الشفاء الطبي ومسجد المدينة المنورة.",
  },
};

export async function renderPage(pathname) {
  const page = pages[pathname];

  if (!page) {
    return {
      html: render(h(NotFound)),
      title: "الصفحة غير موجودة | مجمع الشفاء الطبي",
      description: "الصفحة التي تبحث عنها غير موجودة.",
      status: 404,
    };
  }
  const props = page.loadData ? await page.loadData() : {};

  return {
    html: render(h(page.component, props)),
    title: page.title,
    description: page.description,
    status: 200,
  };
}
