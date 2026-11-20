import { NavLink, useNavigate } from "react-router-dom";
import {
  Hospital,
  HardHat,
  Images,
  LayoutGrid,
  ListChecks,
  LogOut,
  Megaphone,
} from "lucide-react";

const navItems = [
  { to: "/dashboard", label: "لوحة الملخص", icon: LayoutGrid },
  { to: "/needs", label: "الاحتياجات الحالية", icon: ListChecks },
  { to: "/stages", label: "مراحل التنفيذ", icon: HardHat },
  { to: "/news", label: "الأخبار والتحديثات", icon: Megaphone },
  { to: "/media", label: "مكتبة الصور", icon: Images },
];

const linkBase =
  "flex items-center gap-space-sm rounded px-space-md py-space-sm text-label-lg transition-colors";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const navigate = useNavigate();

  function handleLogout() {
    // مؤقت: في تاسك الـ auth هنا هننده logout من الـ service
    onClose();
    navigate("/login");
  }

  return (
    <>
      {/* الخلفية المعتمة، بتظهر على الموبايل بس لما القايمة تتفتح */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-inverse-surface/40 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-72 flex-col justify-between bg-surface-container-lowest shadow-nav transition-transform lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col">
          <div className="flex flex-col gap-space-xs p-space-lg">
            <div className="flex items-center gap-space-sm">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded bg-primary-container">
                <Hospital size={20} className="text-on-primary-container" />
              </div>
              <div className="flex min-w-0 flex-col">
                <h1 className="truncate text-label-lg leading-tight text-on-surface">
                  مجمع الشفاء الطبي
                </h1>
                <span className="truncate text-label-sm text-on-surface-variant">
                  ومسجد المدينة المنورة
                </span>
              </div>
            </div>
            <div className="mt-space-xs">
              <span className="inline-flex items-center rounded bg-surface-container px-2 py-0.5 text-label-sm text-on-surface-variant">
                لوحة الإدارة
              </span>
            </div>
          </div>

          <nav
            className="mt-space-sm flex flex-col gap-space-xs px-space-md"
            aria-label="التنقل الرئيسي"
          >
            {navItems.map(({ to, label, icon: ItemIcon }) => (
              <NavLink
                key={to}
                to={to}
                onClick={onClose}
                className={({ isActive }) =>
                  `${linkBase} ${
                    isActive
                      ? "bg-primary-container text-on-primary-container"
                      : "text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface"
                  }`
                }
              >
                <ItemIcon size={20} />
                <span>{label}</span>
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="p-space-md">
          <button
            type="button"
            onClick={handleLogout}
            className={`${linkBase} w-full text-on-surface-variant hover:bg-error-container hover:text-on-error-container`}
          >
            <LogOut size={20} />
            <span>تسجيل الخروج</span>
          </button>
        </div>
      </aside>
    </>
  );
}
