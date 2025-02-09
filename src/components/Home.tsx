'use client'

import React from 'react';

function Home() {
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
    <section
      id="home"
      className="bg-bgHome bg-no-repeat bg-left bg-contain xl:flex flex-col items-end"
    >
      <div className="text-white p-5 pt-20 xl:px-20 xl:py-40 xl:w-1/2">
        <h2 className="text-lg xl:text-2xl 3xl:text-3xl">
          NexThink - Votre solution informatique innovante
        </h2>
        <p className="xl:text-justify mt-5">
          <b>Nexthink</b> est une solution informatiques spécialisée dans le
          développement et la gestion <br /> de l&#39;expérience numérique des
          employés.
        </p>
        <div className="flex justify-end gap-4">
          <a
            href="#about"
            onClick={(event) => handleScrollToSectionAction(event, 'about')}
            className="bg-blue-600 rounded-md mt-5 text-xs text-center text-white px-3 py-2 xl:py-2 xl:text-base"
          >
            En savoir plus
          </a>
          <a
            href="#contact"
            onClick={(event) => handleScrollToSectionAction(event, 'contact')}
            className="bg-blue-600 rounded-md mt-5 text-xs text-center text-white px-3 py-2 xl:py-2 xl:text-base"
          >
            Nous contacter
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
