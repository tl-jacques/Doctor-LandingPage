import Complains from "@/sections/Complains";
import Curriculum from "@/sections/Curriculum";
import FAQ from "@/sections/FAQ";
import Header from "@/sections/Header";
import Presentation from "@/sections/Presentation";
import Work from "@/sections/Work";

export default function Home() {
  return (
    <main className="">
      <div className="">
        <Header />
        <Presentation />
        <Complains />
        <Work />
        <Curriculum />
        <FAQ />
      </div>
    </main>
  );
}
