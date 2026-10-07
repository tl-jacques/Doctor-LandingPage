import { mainComplains } from "@/constants";
import Eyebrow from "@/components/Eyebrow";

const Complains = () => {
  return (
    <section
      id="principais-queixas"
      aria-labelledby="queixas-title"
      className="bg-porcelain pb-[4.5rem] pt-20 text-espresso lg:pb-[7.5rem] lg:pt-32"
    >
      <div className="container-page flex flex-col gap-10 lg:gap-16">
        <div className="reveal flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-20">
          <div className="flex flex-col gap-5">
            <Eyebrow>Tratamentos</Eyebrow>
            <h2
              id="queixas-title"
              className="heading-display max-w-[40rem] text-[2.75rem] leading-none md:text-[3.5rem] xl:text-[4rem]"
            >
              Principais queixas <em className="italic">dos meus pacientes</em>
            </h2>
          </div>
          <p className="max-w-[25rem] text-base leading-relaxed text-taupe lg:text-[1.0625rem]">
            Cada pele tem uma história. Estas são as condições que mais trazem
            pacientes ao consultório — todas com tratamento e acompanhamento.
          </p>
        </div>

        {/* Mobile: lista com divisórias. Tablet/desktop: grade com bordas entre as células. */}
        <ol className="border-t border-line md:grid md:grid-cols-2 md:border-l lg:grid-cols-5">
          {mainComplains.map((item, index) => (
            <li
              key={item.title}
              className="reveal flex gap-4 border-b border-line py-5 md:min-h-[15.625rem] md:flex-col md:gap-3.5 md:border-r md:px-7 md:pb-9 md:pt-8 lg:px-5 xl:px-7"
            >
              <span
                aria-hidden="true"
                className="w-6 shrink-0 pt-1.5 text-xs font-semibold tracking-[0.06em] text-bronze md:w-auto md:pt-0 md:text-[0.8125rem] md:tracking-[0.08em]"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-col gap-1.5 md:gap-3.5">
                <h3 className="font-serif text-[1.625rem] leading-[1.05] md:text-[1.75rem] xl:text-[1.875rem]">
                  {item.title}
                </h3>
                <p className="text-sm leading-[1.55] text-taupe">{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Complains;
