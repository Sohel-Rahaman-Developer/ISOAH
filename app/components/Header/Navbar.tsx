// Navbar.tsx
/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import { menuItems } from './menuConfig';
import Animated from '../Animated/Animated';


const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [bgOpacity, setBgOpacity] = useState<number>(0);
  const [showNavbar, setShowNavbar] = useState<boolean>(true);
  const lastScrollY = useRef<number>(0);

  const toggleMenu = (): void => setIsOpen((prev) => !prev);
  const closeMenu = (): void => setIsOpen(false);

  // Handle scroll effects for background opacity and navbar visibility
  useEffect((): (() => void) => {
    const handleScroll = (): void => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 5) setBgOpacity(0);
      else if (currentScrollY >= 20) setBgOpacity(1);
      else setBgOpacity((currentScrollY - 5) / 15);

      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollY.current = currentScrollY;
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when the mobile menu is open
  useEffect((): (() => void) => {
    document.body.classList.toggle('overflow-hidden', isOpen);
    return () => document.body.classList.remove('overflow-hidden');
  }, [isOpen]);

  return (
    <nav
      className={`text-white fixed w-full z-30 transition-all duration-300 ${showNavbar ? 'top-0' : '-top-20'}`}
      style={{ backgroundColor: `rgba(0, 3, 25, ${bgOpacity})` }}
    >
      <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Animated direction="left" duration={0.6} delay={0}>
              <Link href="/" className="flex items-center text-xl font-bold" onClick={closeMenu}>
                <img src="/f.webp" className="h-10 w-10 me-3" alt="Logo" />
                <div className="text-[25px] md:text-[30px]">ForensicsHQ</div>
              </Link>
            </Animated>
          </div>

          {/* Desktop Menu */}
          <DesktopMenu menuItems={menuItems} closeMenu={closeMenu} />

          {/* Mobile Menu Toggle */}
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Offcanvas Mobile Menu */}
      <div
        className={`fixed inset-0 z-20 flex items-center justify-center transform ${
          isOpen ? 'translate-x-0' : '-translate-x-[105%]'
        } transition-transform duration-300 ease-in-out w-64`}
        id="mobile-menu"
      >
        <div className="h-[90%] w-64 bg-black-100 text-white rounded-r-2xl shadow-[0_4px_10px_#fefefe]">
          <div className="flex items-center justify-between px-4 py-4 border-b">
            <Link href="/" className="flex items-center text-xl font-bold text-[#fefefe]" onClick={closeMenu}>
              <img src="/f.webp" className="h-10 w-10 me-3" alt="Logo" />
              <div className="text-[20px] md:text-[30px]">ForensicsHQ</div>
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <MobileMenu menuItems={menuItems} closeMenu={closeMenu} />
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
