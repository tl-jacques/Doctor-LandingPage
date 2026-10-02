"use client";

import { useState } from "react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineBars2, HiOutlineXMark } from "react-icons/hi2";

import logo from "/public/logo_black.png";
import { navLinks } from "@/constants";
import WhatsappLink from "@/components/WhatsappLink";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      aria-label="Principal"
      className="relative z-30 border-b border-line bg-porcelain"
      onKeyDown={(e) => {
        if (e.key === "Escape") setMenuOpen(false);
      }}
    >
      <div className="container-page flex h-[4.5rem] items-center justify-between lg:h-24">
        <a
          href="#topo"
          className="flex items-center gap-3 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-espresso"
        >
          <Image
            src={logo}
            alt=""
            className="h-9 w-auto lg:h-11"
            sizes="44px"
            priority
          />
          <span className="flex flex-col gap-0.5">
            <span className="font-serif text-[1.1875rem] leading-none text-espresso lg:text-[1.375rem]">
              Dr. Jorge Medeiros
            </span>
            <span className="text-[0.625rem] uppercase tracking-[0.18em] text-taupe lg:text-[0.6875rem]">
              Dermatologia
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-10 text-[0.9375rem] font-medium text-espresso xl:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors hover:text-bronze focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-espresso"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <WhatsappLink className="btn-pill btn-pill-dark hidden h-12 px-[1.375rem] text-[0.9375rem] md:inline-flex">
            <FaWhatsapp
              aria-hidden="true"
              className="h-[1.125rem] w-[1.125rem]"
            />
            Agendar consulta
          </WhatsappLink>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line-strong text-espresso focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-espresso xl:hidden"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <HiOutlineXMark aria-hidden="true" className="h-5 w-5" />
            ) : (
              <HiOutlineBars2 aria-hidden="true" className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      <div
        id="menu-mobile"
        hidden={!menuOpen}
        className="absolute inset-x-0 top-full border-b border-line bg-porcelain shadow-[0_18px_40px_rgba(30,25,21,0.12)] xl:hidden"
      >
        <ul className="container-page flex flex-col py-2">
          {navLinks.map((link) => (
            <li
              key={link.href}
              className="border-b border-line last:border-b-0"
            >
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex min-h-12 items-center py-3 font-serif text-2xl text-espresso focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-espresso"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="container-page pb-6">
          <WhatsappLink className="btn-pill btn-pill-dark w-full">
            <FaWhatsapp aria-hidden="true" className="h-5 w-5" />
            Agendar consulta
          </WhatsappLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
