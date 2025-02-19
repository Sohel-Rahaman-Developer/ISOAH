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
    <div className="hidden md:flex items-center space-x-8">
      {menuItems.map((item, index) =>
        item.children ? (
          <Animated key={index} direction={item.animation} duration={0.6} delay={0}>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-white bg-transparent hover:bg-white hover:text-black">
                    {item.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 py-4 md:w-80 lg:w-64">
                      {item.children.map((child, childIndex) => (
                        <li key={childIndex}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={child.href}
                              className="block p-2 rounded-md hover:bg-gray-200"
                              onClick={closeMenu}
                            >
                              {child.label}
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
              href={item.href!} // Use non-null assertion because href must exist if no children.
              className="text-white hover:text-white"
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          </Animated>
        )
      )}
    </div>
  );
};

export default DesktopMenu;
