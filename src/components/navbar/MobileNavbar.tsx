'use client'

import React, {useState} from 'react';
import Image from "next/image";
import logoBlue from '../../../public/images/brandmark-design-blue.png';
import logoWhite from '../../../public/images/brandmark-design-white.png';
import openWhite from '../../../public/button/open-white.png';
import openBlue from '../../../public/button/open-blue.png';
import closeWhite from '../../../public/button/close-white.png';
import closeBlue from '../../../public/button/close-blue.png';

export default function MobileNavbar({
  scroll,
  handleScrollToSectionAction,
}: {
  scroll: boolean;
  handleScrollToSectionAction: (event: React.MouseEvent, sectionId: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
      <div
        className={`xl:hidden flex justify-between px-5 py-2 fixed w-full transition-colors duration-300 ${scroll ? 'bg-white z-20' : 'bg-transparent'}`}
      >
        <a href="#home" onClick={(e) => {
          handleScrollToSectionAction(e, 'home');
            setIsOpen(false);
        }} >
          {scroll ? (
            <Image src={logoBlue} alt="logo" className="size-16" width={100} height={100}/>
          ) : (
            <Image src={logoWhite} alt="logo" className="size-16" width={100} height={100}/>
          )}
        </a>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="transition-all duration-1000"
        >
          {isOpen ? (
            <Image
              src={scroll ? closeBlue : closeWhite}
              alt="close"
              className="transition-img"
              style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
              width={40} height={40}
            />
          ) : (
            <Image
              src={scroll ? openBlue : openWhite}
              alt="open"
              className="transition-img"
              style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
              width={40} height={40}
            />
          )}
        </button>
      </div>
      <ul
        className={`transition-menu fixed top-20 right-0 w-full space-y-3 p-5 text-lg ${scroll ? 'bg-white text-primary z-20' : 'bg-secondary text-white'}`}
        style={{
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.5s ease-in-out',
        }}
      >
        <li>
          <a href="#about" onClick={(e) => {
            handleScrollToSectionAction(e, 'about');
            setIsOpen(!isOpen)
          }} >
            À propos
          </a>
        </li>
          {/*<li>
          <a
              href="#projects"
               onClick={(e) => {
              handleScrollToSectionAction(e, 'projects');
              setIsOpen(!isOpen)
            }}
          >
            Nos projets
          </a>
        </li>*/}
        <li>
          <a
            href="#contact"
            onClick={(e) => {
              handleScrollToSectionAction(e, 'contact');
              setIsOpen(!isOpen)
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </header>
  );
}
