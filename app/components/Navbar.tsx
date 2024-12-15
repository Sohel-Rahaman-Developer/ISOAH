/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect, useRef } from 'react';
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
} from "@/components/ui/navigation-menu";
import Animated from './Animated/Animated';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSubMenu, setIsOpenSubMenu] = useState(false); // State for mobile submenu
  const [bgOpacity, setBgOpacity] = useState(0); // State for background opacity
  const [showNavbar, setShowNavbar] = useState(true); // State for navbar visibility
  const lastScrollY = useRef(0); // Ref to store the last scroll position

  // Function to toggle the offcanvas menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to close the menu when a link is clicked
  const closeMenu = () => {
    setIsOpen(false);
    setIsOpenSubMenu(false); // Also close submenu if open
  };

  // Effect to handle scroll and update background opacity and navbar visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Update background opacity
      if (currentScrollY <= 5) {
        setBgOpacity(0);
      } else if (currentScrollY >= 20) {
        setBgOpacity(1);
      } else {
        setBgOpacity((currentScrollY - 5) / 15); // Linear interpolation between 5px and 20px
      }

      // Determine scroll direction and set navbar visibility
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        // Scrolling down and scrolled more than 50px
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }

      // Update lastScrollY
      lastScrollY.current = currentScrollY;
    };

    // Initial check in case the user is already scrolled
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Effect to manage body overflow when the offcanvas menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden'); // Clean up on unmount
    };
  }, [isOpen]);

  return (
    <nav
      className={`text-white fixed w-full z-30 transition-all duration-300 ${showNavbar ? 'top-0' : '-top-20' // Adjust '-top-20' based on navbar height
        }`}
      style={{ backgroundColor: `rgba(0, 3, 25, ${bgOpacity})` }} // Updated to #000319 with opacity
    >

      <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Animated direction="left" duration={0.6} delay={0}>
              <Link
                href="/"
                className="flex items-center text-xl font-bold text-white"
                onClick={closeMenu}
              >
                <img src="/f.webp" className='h-10 w-10 me-3' alt="" /> <div className='text-[25px] md:text-[30px] '>ForensicsHQ</div>
              </Link>
            </Animated>
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Animated direction="left" duration={0.6} delay={0}>
              <Link href="/" className="text-white hover:text-white">
                Home
              </Link>
            </Animated>
            <Animated direction="top" duration={0.6} delay={0}>
              <Link href="/about" className="text-white hover:text-white">
                About
              </Link>
            </Animated>
            {/* Dropdown Menu for Services */}
            <Animated direction="bottom" duration={0.6} delay={0}>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-white bg-transparent hover:bg-white hover:text-black">
                      Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-4 md:w-80 lg:w-64">
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/services/web-development"
                              className="block p-2 rounded-md hover:bg-gray-100"
                            >
                              Web Development
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/services/mobile-development"
                              className="block p-2 rounded-md hover:bg-gray-100"
                            >
                              Mobile Development
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/services/seo"
                              className="block p-2 rounded-md hover:bg-gray-100"
                            >
                              SEO Optimization
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              href="/services/ui-ux-design"
                              className="block p-2 rounded-md hover:bg-gray-100"
                            >
                              UI/UX Design
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
                <NavigationMenuIndicator />
                <NavigationMenuViewport />
              </NavigationMenu>
            </Animated>
            <Animated direction="right" duration={0.6} delay={0}>
              <Link href="/contact" className="text-white hover:text-white">
                Contact
              </Link>
            </Animated>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-black-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Offcanvas Mobile Menu */}
      <div
        className={`fixed inset-0 z-20 flex items-center justify-center transform ${isOpen ? 'translate-x-0' : '-translate-x-[105%]'
          } transition-transform duration-300 ease-in-out w-64`}
        id="mobile-menu"
      >
        <div  className="h-[90%] w-64 bg-black-100 text-white rounded-r-2xl shadow-[0_4px_10px_#fefefe]">
          <div className="flex items-center justify-between px-4 py-4 border-b">
            <Link
              href="/"
              className="flex items-center text-xl font-bold text-[#fefefe]"
              onClick={closeMenu}
            >
                <img src="/f.webp" className='h-10 w-10 me-3' alt="" /> <div className='text-[20px] md:text-[30px] '>ForensicsHQ</div>

            </Link>
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-[#fefefe] hover:text-[#000319] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Close main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-[#fefefe] hover:text-[#000319] hover:bg-gray-50"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-[#fefefe] hover:text-[#000319] hover:bg-gray-50"
              onClick={closeMenu}
            >
              About
            </Link>
            {/* Mobile Dropdown for Services */}
            <div className="space-y-1">
              <button
                onClick={() => setIsOpenSubMenu(!isOpenSubMenu)}
                className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-[#fefefe] hover:text-[#000319] hover:bg-gray-50 focus:outline-none"
              >
                Services
                <svg
                  className={`h-5 w-5 transform transition-transform ${isOpenSubMenu ? 'rotate-180' : 'rotate-0'
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
              {isOpenSubMenu && (
                <div className="pl-4">
                  <Link
                    href=""
                    className="block px-3 py-2 rounded-md text-base font-medium text-[#fefefe] hover:text-[#000319] hover:bg-gray-50"
                    onClick={closeMenu}
                  >
                    Web Development
                  </Link>
                  <Link
                    href=""
                    className="block px-3 py-2 rounded-md text-base font-medium text-[#fefefe] hover:text-[#000319] hover:bg-gray-50"
                    onClick={closeMenu}
                  >
                    Mobile Development
                  </Link>
                  <Link
                    href=""
                    className="block px-3 py-2 rounded-md text-base font-medium text-[#fefefe] hover:text-[#000319] hover:bg-gray-50"
                    onClick={closeMenu}
                  >
                    SEO Optimization
                  </Link>
                  <Link
                    href=""
                    className="block px-3 py-2 rounded-md text-base font-medium text-[#fefefe] hover:text-[#000319] hover:bg-gray-50"
                    onClick={closeMenu}
                  >
                    UI/UX Design
                  </Link>
                </div>
              )}
            </div>
            <Link
              href=""
              className="block px-3 py-2 rounded-md text-base font-medium text-[#fefefe] hover:text-[#000319] hover:bg-gray-50"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </div>
        </div>

      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-10 bg-black opacity-50"
          onClick={toggleMenu}
          aria-hidden="true"
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
