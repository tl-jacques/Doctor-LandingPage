import Image from "next/image";

import logoHapVida from "@/assets/logo-hapvida-2048.png";

interface HapvidaBadgeProps {
  className?: string;
}

// Selo "Atendimento particular e pelo convênio Hapvida" (topo e seção Sobre)
const HapvidaBadge: React.FC<HapvidaBadgeProps> = ({ className }) => (
  <div className={className}>
    <Image
      src={logoHapVida}
      alt="Hapvida"
      className="h-9 w-9 shrink-0 object-contain lg:h-11 lg:w-11"
      sizes="44px"
    />
    <p className="text-sm leading-snug text-[#3E3731]">
      Atendimento particular e pelo convênio{" "}
      <strong className="font-semibold text-espresso">Hapvida</strong>
    </p>
  </div>
);

export default HapvidaBadge;
