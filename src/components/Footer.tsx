import React from 'react';
import logo from '../../public/logo/logo-footer.png';
import Image from "next/image";

function Footer() {
  return (
    <section className="bg-white">
      <Image src={logo} alt="logo" className="mx-auto py-4" width={320} height={320}/>
    </section>
  );
}

export default Footer;
