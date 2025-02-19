// MobileMenu.tsx
import Link from 'next/link';
import { useState } from 'react';
import { MenuItem } from './menuConfig';

interface MobileMenuProps {
  menuItems: MenuItem[];
  closeMenu: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ menuItems, closeMenu }) => {
  // Track open submenus using a record keyed by menu item label
  const [openSubMenus, setOpenSubMenus] = useState<Record<string, boolean>>({});

  return (
    <div className="px-2 pt-2 pb-3 space-y-1">
      {menuItems.map((item, index) =>
        !item.children ? (
          <Link
            key={index}
            href={item.href!}
            className="block px-3 py-2 rounded-md text-base font-medium text-[#fefefe] hover:text-[#000319] hover:bg-gray-50"
            onClick={closeMenu}
          >
            {item.label}
          </Link>
        ) : (
          <div key={index} className="space-y-1">
            <button
              onClick={() =>
                setOpenSubMenus((prev) => ({
                  ...prev,
                  [item.label]: !prev[item.label],
                }))
              }
              className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-[#fefefe] hover:text-[#000319] hover:bg-gray-50 focus:outline-none"
            >
              {item.label}
              <svg
                className={`h-5 w-5 transform transition-transform ${
                  openSubMenus[item.label] ? 'rotate-180' : 'rotate-0'
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openSubMenus[item.label] && (
              <div className="pl-4">
                {item.children?.map((child, childIndex) => (
                  <Link
                    key={childIndex}
                    href={child.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-[#fefefe] hover:text-[#000319] hover:bg-gray-50"
                    onClick={closeMenu}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        )
      )}
    </div>
  );
};

export default MobileMenu;
