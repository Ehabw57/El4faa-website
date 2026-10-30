/**
 * Footer: server-rendered Preact component (no hooks, no client JS).
 *
 * Usage:
 *   <Footer whatsappUrl="https://wa.me/20XXXXXXXXXX" />
 *
 * Link targets and labels come from NAV_ITEMS in Navbar.jsx, so routes
 * are defined in one place. Requires the Material Symbols Outlined
 * stylesheet in the page <head>.
 */
import { NAV_ITEMS } from "./Navbar.jsx";
import { MapPin, MessageSquareText } from "lucide-preact";

const FOCUS =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

export default function Footer({ whatsappUrl = "https://wa.me/" }) {
  return (
    <footer class="bg-surface-container-low pt-space-xl pb-space-lg">
      <div class="mx-auto flex max-w-7xl flex-col gap-space-xl px-margin-mobile lg:px-margin">
        <div class="grid grid-cols-1 items-start gap-gutter md:grid-cols-12">
          <div class="flex flex-col gap-space-sm md:col-span-6">
            <p class="text-headline-sm">
              مجمع الشفاء الطبي ومسجد المدينة المنورة
            </p>
            <p class="text-body-md text-on-surface-variant">
              بإشراف جمعية أبناء عقيل الخيرية
            </p>
            <address class="flex items-center gap-space-xs text-body-sm text-on-surface-variant not-italic">
              <MapPin size={16} />
              قرية العليقات – مركز قوص – محافظة قنا
            </address>
          </div>

          <nav
            aria-labelledby="footer-nav-title"
            class="flex flex-col gap-space-sm md:col-span-3"
          >
            <h2 id="footer-nav-title" class="text-label-lg">
              أقسام المشروع
            </h2>
            <ul class="flex flex-col gap-space-xs">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <a
                    href={item.href}
                    class={`text-body-sm text-on-surface-variant transition-colors hover:text-on-surface ${FOCUS}`}
                  >
                    {item.footerLabel ?? item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div class="flex flex-col gap-space-sm md:col-span-3">
            <h2 class="text-label-lg">التواصل والاستفسار</h2>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              class={`flex gap-space-xs self-start bg-surface-container-lowest pr-space-sm pl-space-xl py-space-sm text-label-md shadow-sm transition-colors hover:bg-surface-container ${FOCUS}`}
            >
              <span
                class="material-symbols-outlined text-body-md text-primary"
                aria-hidden="true"
              >
                <MessageSquareText size={16} />
              </span>
              للاستفسار المباشر عبر واتساب
              <span class="sr-only">(يفتح في نافذة جديدة)</span>
            </a>
          </div>
        </div>

        <div class="flex flex-col items-center justify-between gap-space-sm border-t border-outline-variant pt-space-lg text-center text-body-sm text-on-surface-variant md:flex-row md:text-start">
          <p class="hidden md:block">
            مشروع وقفي تنموي لخدمة المجتمع المحلي — التبرعات العينية والمالية
            تُنسق مباشرة مع إدارة الجمعية المعتمدة
          </p>
          <p class="text-label-sm">
            جميع الحقوق محفوظة © جمعية أبناء عقيل الخيرية
          </p>
        </div>
      </div>
    </footer>
  );
}
