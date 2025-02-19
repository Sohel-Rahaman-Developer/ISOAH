// menuConfig.ts
export type AnimationDirection = 'left' | 'right' | 'top' | 'bottom';

export interface MenuItemChild {
  label: string;
  href: string;
}

export interface MenuItem {
  label: string;
  href?: string; // If there are no children, href is required.
  animation: AnimationDirection;
  children?: MenuItemChild[];
}

export const menuItems: MenuItem[] = [
  {
    label: "Home",
    href: "/",
    animation: "left",
  },
  {
    label: "Programs",
    animation: "top",
    children: [
      { label: "Certified Mobile Forensics Expert", href: "/programs/mobile-forensics" },
      { label: "Certified Lindows Forensics Expert", href: "/programs/lindows-forensics" },
      { label: "Certified Mac Forensics Expert", href: "/programs/mac-forensics" },
      { label: "Certified Cloud Forensics Expert", href: "/programs/cloud-forensics" },
      { label: "Certified IoT Forensics Expert", href: "/programs/iot-forensics" },
      { label: "Certified Dark Web Forensics Expert", href: "/programs/dark-web-forensics" },
      { label: "Certified Linux Forensics Expert", href: "/programs/linux-forensics" },
      { label: "Computer Hacking Forensics Expert", href: "/programs/computer-hacking-forensics" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    animation: "bottom",
  },
  {
    label: "About",
    href: "/about",
    animation: "right",
  },
  {
    label: "Blogs",
    href: "/blogs",
    animation: "left",
  },
  {
    label: "Contact",
    href: "/contact",
    animation: "right",
  },
];
