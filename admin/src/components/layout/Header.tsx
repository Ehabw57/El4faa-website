import { Menu, User } from "lucide-react";

type HeaderProps = {
  onMenuClick: () => void;
};

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="fixed left-0 right-0 top-0 z-30 flex h-16 items-center justify-between bg-surface-container-lowest/90 px-space-md shadow-nav backdrop-blur-xl lg:right-72 lg:px-space-xl">
      <div className="flex items-center gap-space-sm">
        <button
          type="button"
          onClick={onMenuClick}
          aria-label="فتح القائمة"
          className="rounded p-space-xs text-on-surface-variant hover:bg-surface-container-low lg:hidden"
        >
          <Menu size={24} />
        </button>
        <span className="text-label-md text-on-surface-variant">
          إدارة جمعية أبناء عقيل
        </span>
      </div>

      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
        <User size={18} className="text-on-primary" />
      </div>
    </header>
  );
}
