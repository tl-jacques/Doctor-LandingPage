"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

import WhatsappLink from "@/components/WhatsappLink";

// Botão flutuante de agendamento: só o ícone no mobile, com rótulo no desktop.
// Fica oculto enquanto o topo ou o rodapé — que já têm botão de agendar — estão na tela.
const WhatsappButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const targets = [
      document.getElementById("topo"),
      document.querySelector("footer"),
    ].filter((el): el is HTMLElement => el !== null);
    if (targets.length === 0 || !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }
    const onScreen = new Set<Element>();
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) onScreen.add(entry.target);
        else onScreen.delete(entry.target);
      }
      setVisible(onScreen.size === 0);
    });
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <WhatsappLink
      className={twMerge(
        "fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-40 flex h-14 w-14 items-center justify-center gap-2.5 rounded-full bg-espresso text-porcelain shadow-[0_12px_32px_rgba(30,25,21,0.28)] ring-1 ring-cream/20 transition-[opacity,transform,visibility,background-color] duration-300 hover:bg-bronze focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-espresso motion-reduce:transition-none lg:bottom-8 lg:right-8 lg:w-auto lg:px-6",
        // invisible também tira o link da navegação por teclado enquanto oculto
        visible ? "visible opacity-100" : "invisible translate-y-4 opacity-0",
      )}
    >
      <FaWhatsapp aria-hidden="true" className="h-6 w-6 shrink-0" />
      <span className="sr-only lg:not-sr-only lg:text-[0.9375rem] lg:font-semibold">
        Agendar consulta
      </span>
    </WhatsappLink>
  );
};

export default WhatsappButton;
