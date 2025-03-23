// DesktopMenu.tsx
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu';

import { MenuItem } from './menuConfig';
import Animated from '../Animated/Animated';

interface DesktopMenuProps {
  menuItems: MenuItem[];
  closeMenu: () => void;
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({ menuItems, closeMenu }) => {
  return (
    <div className="hidden md:flex items-center space-x-8 ho-effect">
      {menuItems.map((item, index) =>
        item.children ? (
          <Animated key={index} direction={item.animation} duration={0.6} delay={0}>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className="navbar-hover-effect text-[#ddd] font-bold bg-transparent hover:bg-white hover:text-black"
                    data-replace={item.label}
                  >
                    <span>{item.label}</span>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 py-4 md:w-80 lg:w-64 ho-effect-loop">
                      {item.children.map((child, childIndex) => (
                        <li key={childIndex}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={child.href}
                              className="navbar-hover-effect block p-2 rounded-md hover:bg-gray-200"
                              data-replace={child.label}
                              onClick={closeMenu}
                            >
                              <span>{child.label}</span>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
              <NavigationMenuIndicator />
              <NavigationMenuViewport />
            </NavigationMenu>
          </Animated>
        ) : (
          <Animated key={index} direction={item.animation} duration={0.6} delay={0}>
            <Link
              href={item.href!}
              className="navbar-hover-effect text-[#ddd] hover:text-[#ddd]"
              data-replace={item.label}
              onClick={closeMenu}
            >
              <span>{item.label}</span>
            </Link>
          </Animated>
        )
      )}
    </div>
  );
};

export default DesktopMenu;
