"use client"; // Ensure this file is treated as a client component

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoCall, IoMenu, IoClose } from 'react-icons/io5'; // Import call, menu, and close icons

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false); // State to control mobile menu

  const toggleMenu = () => {
    setMenuOpen(prev => !prev); // Toggle the menu state
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroSection = document.getElementById('home');
      const servicesSection = document.getElementById('services');
      const projectsSection = document.getElementById('projects');
      const contactSection = document.getElementById('contact');

      // Check if the sections exist before accessing their offsetTop properties
      if (contactSection && scrollY >= contactSection.offsetTop) {
        setActiveSection('contact');
      } else if (projectsSection && scrollY >= projectsSection.offsetTop) {
        setActiveSection('projects');
      } else if (servicesSection && scrollY >= servicesSection.offsetTop) {
        setActiveSection('services');
      } else if (heroSection) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="bg-transparent fixed top-0 left-0 w-full flex items-center py-4 px-6 z-50">
      {/* Logo */}
      <div className="logo">
        <Image 
          src="/logo.png" 
          alt="Company Logo" 
          width={80} 
          height={80} 
          className="hidden md:block" // Visible on larger screens
        />
        <Image 
          src="/logo.png" 
          alt="Company Logo" 
          width={50} 
          height={50} 
          className="md:hidden" // Visible only on mobile devices
        />
      </div>

      {/* Desktop nav links */}
      <div className="nav-links ml-auto hidden md:flex items-center space-x-6">
        <Link href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}>Home</Link>
        <Link href="#services" className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}>Services</Link>
        <Link href="#projects" className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}>About</Link>
        <Link href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>Contact</Link>
        <Link href="tel:+8801818247192" className="nav-link-mobile hidden md:flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 rounded-full text-white font-bold text-lg transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600">
          <IoCall className="mr-2 text-white" /> +880 1818247192
        </Link>
      </div>

      {/* Mobile menu toggle button and call button */}
      <div className="md:hidden flex items-center ml-auto">
        {/* Mobile call button */}
        <Link href="tel:+8801818247192" className="nav-link-mobile flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 rounded-full text-white font-bold text-lg transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 mr-4 nav-link-mobile-small">
          <IoCall className="mr-2 text-white" /> +880 1818247192
        </Link>
        {/* Menu icon */}
        <div onClick={toggleMenu}>
          {menuOpen ? <IoClose size={30} color="white" /> : <IoMenu size={30} color="white" />}
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`nav-links-mobile md:hidden absolute top-full left-1/2 transform -translate-x-1/2 w-full max-w-xs sm:max-w-sm md:max-w-md text-white flex flex-col items-center space-y-4 py-4 transition-all duration-500 ease-in-out ${
          menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        } z-50 backdrop-blur-custom`}
      >
        {/* Navigation Links */}
        <Link
          href="#home"
          className={`nav-link text-lg ${activeSection === 'home' ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          Home
        </Link>
        <Link
          href="#services"
          className={`nav-link text-lg ${activeSection === 'services' ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          Services
        </Link>
        <Link
          href="#projects"
          className={`nav-link text-lg ${activeSection === 'projects' ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          About
        </Link>
        <Link
          href="#contact"
          className={`nav-link text-lg ${activeSection === 'contact' ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
