import Navbar from "@/components/Navbar";
import StructuredData from "@/components/StructuredData";
import WhatsappButton from "@/components/WhatsappButton";
import Complains from "@/sections/Complains";
import Curriculum from "@/sections/Curriculum";
import Featured from "@/sections/Featured";
import FAQ from "@/sections/FAQ";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Presentation from "@/sections/Presentation";
import Work from "@/sections/Work";

export default function Home() {
  return (
    <>
      {/* Aparece ao navegar pelo teclado: pula o menu direto para o conteúdo */}
      <a
        href="#conteudo"
        className="btn-pill btn-pill-dark sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:h-12 focus:px-6"
      >
        Pular para o conteúdo
      </a>
      <header>
        <Navbar />
      </header>
      <main id="conteudo" tabIndex={-1} className="focus:outline-none">
        <Hero />
        <Presentation />
        <Complains />
        <Work />
        <Featured />
        <Curriculum />
        <FAQ />
      </main>
      <Footer />
      <WhatsappButton />
      <StructuredData />
    </>
  );
}
