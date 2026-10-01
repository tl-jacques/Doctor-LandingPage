import { twMerge } from "tailwind-merge";

interface EyebrowProps {
  children: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
}

const Eyebrow: React.FC<EyebrowProps> = ({
  children,
  tone = "light",
  className,
}) => {
  return (
    <p
      className={twMerge(
        "flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] md:text-[0.8125rem] md:tracking-[0.18em]",
        tone === "light" ? "text-bronze" : "text-bronze-light",
        className,
      )}
    >
      <span aria-hidden="true" className="h-px w-6 bg-current md:w-8" />
      {children}
    </p>
  );
};

export default Eyebrow;
