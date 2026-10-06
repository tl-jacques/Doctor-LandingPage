import type { Metadata } from "next";
import Image from "next/image";
import { HiArrowLeft } from "react-icons/hi2";

import logo from "/public/logo_black.png";
import Eyebrow from "@/components/Eyebrow";
import WhatsappLink from "@/components/WhatsappLink";

export const metadata: Metadata = {
  // O Next já marca páginas 404 como noindex
  title: "Página não encontrada | Dr. Jorge Medeiros",
};

export default function NotFound() {
  return (
    <main className="flex min-h-svh flex-col bg-porcelain text-espresso">
      <div className="border-b border-line">
        <div className="container-page flex h-[4.5rem] items-center lg:h-24">
          <a
            href="/"
            className="flex items-center gap-3 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-espresso"
          >
            <Image
              src={logo}
              alt=""
              className="h-9 w-auto lg:h-11"
              sizes="44px"
            />
            <span className="font-serif text-[1.1875rem] leading-none lg:text-[1.375rem]">
              Dr. Jorge Medeiros
            </span>
          </a>
        </div>
      </div>

      <div className="container-page flex flex-1 flex-col justify-center gap-6 py-20 lg:gap-8">
        <Eyebrow>Erro 404</Eyebrow>
        <h1 className="heading-display max-w-[40rem] text-[3.125rem] md:text-[4.5rem] xl:text-[5.5rem]">
          Página <em className="italic text-bronze">não encontrada.</em>
        </h1>
        <p className="max-w-[32.5rem] text-[1.0625rem] leading-relaxed text-taupe md:text-xl">
          O endereço pode ter mudado ou não existe mais. Volte ao início ou fale
          direto com a equipe para agendar sua consulta.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
          <a href="/" className="btn-pill btn-pill-dark">
            <HiArrowLeft
              aria-hidden="true"
              className="h-[1.125rem] w-[1.125rem]"
            />
            Voltar para o início
          </a>
          <WhatsappLink className="btn-pill btn-pill-outline">
            Agendar pelo WhatsApp
          </WhatsappLink>
        </div>
      </div>
    </main>
  );
}
