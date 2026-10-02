import Image from "next/image";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

import logoWhite from "@/assets/logo_white.png";
import { contact, instagramLink } from "@/constants";
import WhatsappLink from "@/components/WhatsappLink";

const NewTab = () => <span className="sr-only"> (abre em uma nova aba)</span>;

const linkClass =
  "text-cream transition-colors hover:text-bronze-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream";

const labelClass =
  "text-[0.6875rem] uppercase tracking-[0.16em] text-mist lg:text-xs";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      aria-labelledby="rodape-title"
      className="bg-espresso pt-[4.5rem] text-cream lg:pt-28"
    >
      <div className="container-page">
        <div className="flex flex-col gap-7 border-b border-espresso-line pb-12 lg:flex-row lg:items-end lg:justify-between lg:gap-20 lg:pb-[4.5rem]">
          <h2
            id="rodape-title"
            className="heading-display max-w-[47.5rem] text-5xl md:text-6xl xl:text-[5rem]"
          >
            Agende sua consulta{" "}
            <em className="italic text-bronze-light">em Sobral.</em>
          </h2>
          <WhatsappLink className="btn-pill btn-pill-light shrink-0 lg:h-16 lg:px-8 lg:text-[1.0625rem]">
            <FaWhatsapp aria-hidden="true" className="h-5 w-5" />
            Tenho interesse
          </WhatsappLink>
        </div>

        <address className="grid gap-9 py-10 not-italic md:grid-cols-3 md:gap-12 lg:py-14">
          <div className="flex flex-col gap-2.5 lg:gap-3">
            <span className={labelClass}>Endereço</span>
            <a
              href={contact.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`${linkClass} text-[0.9375rem] leading-relaxed lg:text-base`}
            >
              {contact.clinic}
              <br />
              {contact.street}
              <br />
              {contact.city}
              <span className="sr-only">
                {" "}
                (ver no mapa, abre em uma nova aba)
              </span>
            </a>
          </div>

          <div className="flex flex-col gap-2.5 lg:gap-3">
            <span className={labelClass}>Agendamentos</span>
            <WhatsappLink
              className={`${linkClass} self-start font-serif text-3xl leading-tight lg:text-[2.125rem]`}
            >
              {contact.phone}
            </WhatsappLink>
            <span className="text-sm text-mist">
              WhatsApp · Particular e Hapvida
            </span>
          </div>

          <div className="flex flex-col gap-2.5 lg:gap-3">
            <span className={labelClass}>Instagram</span>
            <a
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`${linkClass} flex items-center gap-2.5 self-start text-[0.9375rem] lg:text-base`}
            >
              <FaInstagram aria-hidden="true" className="h-5 w-5" />
              {contact.instagramHandle}
              <NewTab />
            </a>
          </div>
        </address>

        <div className="flex flex-col gap-3.5 border-t border-espresso-line pb-8 pt-6 text-[0.8125rem] text-mist md:flex-row md:items-center md:justify-between lg:pb-9 lg:pt-7 lg:text-sm">
          <div className="flex items-center gap-3">
            <Image src={logoWhite} alt="" sizes="32px" className="h-8 w-auto" />
            <span>Dr. Jorge Medeiros · Dermatologia</span>
          </div>
          <a
            href={contact.developerLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-mist transition-colors hover:text-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream"
          >
            © {year} · Desenvolvido por{" "}
            <strong className="font-semibold text-cream">
              {contact.developerName}
            </strong>
            <NewTab />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
