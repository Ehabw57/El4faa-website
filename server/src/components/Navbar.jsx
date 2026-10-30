/**
 * Navbar: server-rendered Preact component (no hooks, no client JS).
 *
 * Usage:
 *   <Navbar currentPage="medical-complex" />
 *
 * `currentPage` must match one of the `path` keys in NAV_ITEMS.
 * The mobile menu uses native <details>/<summary>, so it works without JavaScript.
 *
 * Requires in the page <head> (as in your layout):
 *   - Material Symbols Outlined stylesheet (for the "menu" icon)
 *   - The Tailwind build that includes your design-system @theme file
 */
import { Menu } from "lucide-preact";

export const NAV_ITEMS = [
  { path: "home", label: "الرئيسية", href: "/" },
  {
    path: "medical-complex",
    label: "مجمع الشفاء الطبي",
    href: "/medical-complex",
  },
  {
    path: "madina-mosque",
    label: "مسجد المدينة المنورة",
    href: "/madina-mosque",
  },
  {
    path: "execution-phases",
    label: "مراحل التنفيذ",
    href: "/execution-phases",
  },
  {
    path: "current-needs",
    label: "الاحتياجات الحالية",
    href: "/current-needs",
  },
  { path: "about", label: "عن المشروع والتواصل", href: "/about" },
];

const LINK_BASE =
  "block border-b-2 px-space-xs py-space-xs text-label-lg transition-colors " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

const LINK_ACTIVE = "border-primary font-bold text-primary";
const LINK_INACTIVE =
  "border-transparent text-on-surface-variant hover:text-on-surface";

function NavLinks({ currentPage, listClass }) {
  return (
    <ul class={listClass}>
      {NAV_ITEMS.map((item) => {
        const isActive = item.path === currentPage;
        return (
          <li key={item.path}>
            <a
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              class={`${LINK_BASE} ${isActive ? LINK_ACTIVE : LINK_INACTIVE}`}
            >
              {item.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default function Navbar({ currentPage = "home" }) {
  return (
    <header class="fixed top-0 z-1 w-full bg-surface-container-lowest shadow-sm">
      <div class="mx-auto flex h-20 items-center justify-between px-margin-mobile lg:px-margin">
        {/* Brand */}
        <a
          href="/"
          class="flex items-center gap-space-sm rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <img
            src="https://lh3.googleusercontent.com/aida/AEtjO1Vxqd_KrjFSlDjzadfk7h142giHcmF93XhcmksGoBHyWAPAt-sKy_61sem8n-U8XdvIJmNIxiWhtYVlP_IDqgR0YpIlAJw2kgVSUdArQrxAeDH6s5M4ya_lPOtHVmqG6TzvAlqu8so8fRhvtgsjlIhvmR28-IczcLMHMiWISdgpZQ7ZtYqTE-phc2e7syw08hNodo_O_sV4ZY6I-SEU8JtXumlcxO2m9fQFinWbw5cmt1OMK5yNS8kLiTs"
            alt="شعار مجمع الشفاء الطبي ومسجد المدينة المنورة"
            class="h-12 w-12 rounded-full object-cover"
          />
          <span class="flex flex-col text-start ">
            <span class="text-headline-xs md:text-headline-sm text-on-surface ">
              مجمع الشفاء الطبي ومسجد المدينة المنورة
            </span>
            <span class="text-label-sm text-on-surface-variant">
              قرية العليقات – قوص – قنا
            </span>
          </span>
        </a>

        {/* Desktop navigation */}
        <nav aria-label="التنقل الرئيسي" class="hidden lg:block">
          <NavLinks
            currentPage={currentPage}
            listClass="flex items-center gap-space-md"
          />
        </nav>

        {/* Mobile navigation (native disclosure, no JS) */}
        <details class="group lg:hidden">
          <summary
            aria-label="القائمة الرئيسية"
            class="cursor-pointer list-none items-center justify-center rounded-lg text-on-surface hover:bg-surface-dim "
          >
            <Menu size={28} aria-hidden="true" />
          </summary>
          <nav
            aria-label="التنقل الرئيسي (جوال)"
            class="absolute inset-x-0 top-full border-outline-variant bg-surface-container-lowest px-margin-mobile py-space-md shadow-md"
          >
            <NavLinks
              currentPage={currentPage}
              listClass="flex flex-col gap-space-xs"
            />
          </nav>
        </details>
      </div>
    </header>
  );
}
