import React from 'react';
import DesktopAbout from './about/DesktopAbout';
import MobileAbout from './about/MobileAbout';
import cards from '../data/about.json';

export default function About() {
  return (
    <section id="about" className="py-4 space-y-5">
        <h1 className="text-secondary text-center text-4xl font-semibold py-4 uppercase xl:text-6xl">
            {' '}
         Nos services{' '}
      </h1>
      <DesktopAbout cards={cards}/>
      <MobileAbout cards={cards}/>
    </section>
  );
}
