// menuConfig.ts
export type AnimationDirection = "left" | "right" | "top" | "bottom";

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
      {
        label: "Certified Dark Web Forensics Expert",
        href: "/certifications/dark-web-forensics",
      },
      {
        label: "Certified Drone Forensics Expert",
        href: "/certifications/drone-forensics-expert",
      },
      {
        label: "Certified Cloud Forensics Expert",
        href: "/certifications/cloud-forensics-expert",
      },
      {
        label: "Certified Windows Forensics Expert",
        href: "/certifications/windows-forensics-expert",
      },
      {
        label: "Certified Mac Forensics Expert",
        href: "/certifications/mac-forensics-expert",
      },
      {
        label: "Certified Linux Forensics Expert",
        href: "/certifications/linux-forensics-expert",
      },
      {
        label: "Certified IoT Forensics Expert",
        href: "/certifications/iot-forensics-expert",
      },
      {
        label: "Certified Mobile Forensics Expert",
        href: "/certifications/mobile-forensics-expert",
      },
      {
        label: "Computer Hacking Forensic Expert",
        href: "/certifications/computer-hacking-forensic-expert",
      },
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
    href: "/blog",
    animation: "left",
  },
  {
    label: "Contact",
    href: "/contact",
    animation: "right",
  },
];
