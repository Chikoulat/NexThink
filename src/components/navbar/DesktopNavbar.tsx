'use client'

import React from 'react';
import Image from "next/image";
import logoBlue from '../../../public/images/brandmark-design-blue.png';
import logoWhite from '../../../public/images/brandmark-design-white.png';

export default function DesktopNavbar({
  scroll,
  handleScrollToSectionAction,
}: {
  scroll: boolean;
  handleScrollToSectionAction: (event: React.MouseEvent, sectionId: string) => void;
}) {
  return (
    <header
      className={`navbarMobile hiddenDesktop xl:navbar px-5 py-2 fixed w-full transition-colors duration-300 ${scroll ? 'bg-white text-primary z-50' : 'bg-transparent text-white'}`}
    >
      <a href="#home" onClick={(e) => handleScrollToSectionAction(e, 'home')}>
        {scroll ? (
          <Image src={logoBlue} alt="logo" width={100} height={100}/>
        ) : (
          <Image src={logoWhite} alt="logo" width={100} height={100}/>
        )}
      </a>
      <ul className="flex items-center gap-10">
        <li>
          <a href="#about" onClick={(e) => handleScrollToSectionAction(e, 'about')}>
            À propos
          </a>
        </li>
        {/*<li>
          <a
              href="#projects"
              onClick={(e) => handleScrollToSectionAction(e, 'projects')}
          >
            Nos projets
          </a>
        </li>*/}
        <li>
          <a
            href="#contact"
            onClick={(e) => handleScrollToSectionAction(e, 'contact')}
          >
            Contact
          </a>
        </li>
      </ul>
    </header>
  );
}
