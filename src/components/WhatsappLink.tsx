"use client";

import { whatsappLink } from "@/constants";
import { gtag_report_conversion } from "@/constants/gtm";

interface WhatsappLinkProps {
  className?: string;
  children: React.ReactNode;
}

const WhatsappLink: React.FC<WhatsappLinkProps> = ({ className, children }) => {
  return (
    <a
      href={whatsappLink}
      onClick={() => gtag_report_conversion()}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
      <span className="sr-only"> (abre o WhatsApp em uma nova aba)</span>
    </a>
  );
};

export default WhatsappLink;
