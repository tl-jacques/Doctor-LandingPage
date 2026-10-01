import { twMerge } from "tailwind-merge";

interface EyebrowProps {
  children: React.ReactNode;
  tone?: "light" | "dark";
  /** Centraliza no desktop, com um traço de cada lado (no mobile fica alinhado à esquerda). */
  centerOnDesktop?: boolean;
  className?: string;
}

const Eyebrow: React.FC<EyebrowProps> = ({
  children,
  tone = "light",
  centerOnDesktop = false,
  className,
}) => {
  return (
    <p
      className={twMerge(
        "flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] md:text-[0.8125rem] md:tracking-[0.18em]",
        tone === "light" ? "text-bronze" : "text-bronze-light",
        centerOnDesktop && "lg:justify-center",
        className,
      )}
    >
      <span aria-hidden="true" className="h-px w-6 bg-current md:w-8" />
      {children}
      {centerOnDesktop && (
        <span
          aria-hidden="true"
          className="hidden h-px w-8 bg-current lg:block"
        />
      )}
    </p>
  );
};

export default Eyebrow;
