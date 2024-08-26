const Presentation = () => {
  return (
    <section
      className=" scroll-smooth baseSection bg-color-dark"
      id="apresentacao"
    >
      <div className="flex flex-col mx-auto lg:max-w-[40rem] xl:max-w-[50rem] 2xl:max-w-[60rem]">
        <div className="w-full py-3 px-2 ">
          <div className="rounded-md w-full shadow-2xl backdrop-blur-2xl px-2 py-3">
            <iframe
              className="w-full h-[20rem] md:h-[23rem] lg:h-[26rem] xl:h-[30rem] 2xl:h-[40rem] "
              src="https://www.youtube.com/embed/NkuijmYjP8Q?si=EjqKkCZVzhzYUdA9"
              title="Apresentação dermatologista"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <p className="leading-snug mt-6 font-medium xl:mt-8 xl:leading-normal text-color-1">
            <span className="font-bold text-[1.05rem]">
              Dr. Jorge Medeiros{" "}
            </span>
            é um dermatologista referência em Sobral,{" "}
            <span className="font-bold">
              especializado no tratamento de acne, psoríase, melasma e dermatite
              atópica,
            </span>{" "}
            oferecendo cuidados personalizados para melhorar a saúde da pele.
            Além disso, ele realiza{" "}
            <span className="font-bold">
              cirurgias dermatológicas para câncer de pele e remoção de sinais
            </span>
            , sempre focando na segurança e na saúde do seu paciente. Dr. Jorge
            Medeiros combina conhecimento técnico e atenção individualizada para
            proporcionar uma pele mais saudável aos seus pacientes.
          </p>
        </div>
        <button className="w-full mt-4 btn bg-color-secondary btn-primary flex items-center justify-center gap-4 shadow-md transition-[200ms] xl:mt-8 hover:cursor-pointer hover:opacity-90 hover:scale-105">
          AGENDAR CONSULTA DERMATOLÓGICA
        </button>
      </div>
    </section>
  );
};

export default Presentation;
