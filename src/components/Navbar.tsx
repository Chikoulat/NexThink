'use client'

import React, { useEffect, useState } from 'react';
import DesktopNavbar from './navbar/DesktopNavbar';
import MobileNavbar from './navbar/MobileNavbar';

export default function Navbar() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToSectionAction = (
    event: React.MouseEvent,
    sectionId: string
  ) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header>
      <DesktopNavbar
        scroll={scroll}
        handleScrollToSectionAction={handleScrollToSectionAction}
      />
      <MobileNavbar
        scroll={scroll}
        handleScrollToSectionAction={handleScrollToSectionAction}
      />
    </header>
  );
}
