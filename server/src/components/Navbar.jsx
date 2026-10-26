const links = [
  { href: "/", label: "الرئيسية" },
  { href: "/about", label: "عن المشروع" },
  { href: "/contact", label: "تواصل معنا" },
];

export default function Navbar({ currentPath = "/" }) {
  return (
    <header class="border-b border-gray-200 bg-white">
      <nav
        aria-label="التنقل الرئيسي"
        class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4"
      >
        <a href="/" class="flex items-center gap-3" aria-label="الصفحة الرئيسية">
          <span class="grid size-11 place-items-center rounded-xl bg-surface-tint text-xl font-bold text-white">
            ش
          </span>
          <span>
            <span class="block font-bold text-emerald-900">
              مجمع الشفاء الطبي
            </span>
            <span class="block text-sm text-gray-600">
              ومسجد المدينة المنورة
            </span>
          </span>
        </a>

        <div class="flex flex-wrap items-center gap-3 text-sm sm:gap-5">
          {links.map((link) => {
            const active = currentPath === link.href;

            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                class={
                  active
                    ? "font-bold text-emerald-800"
                    : "text-gray-600 hover:text-emerald-700"
                }
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
