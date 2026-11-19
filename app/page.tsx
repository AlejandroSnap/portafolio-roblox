import Home from "@/components/home/home";
import About from "@/components/about/about";
import Experience from "@/components/experience/experience";
import Work from "@/components/work/work";
import WorkCollection from "@/components/work/workCollection";
import Contact from "@/components/contact/contact";
import { work } from "@/data/work";

export default function Page() {
  return (
    <>
      <Home />
      <Work />
      <Experience />
      <WorkCollection items={work} />
      <About />
      <Contact />
    </>
  );
}
