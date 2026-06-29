import Home from "@/components/home/home";
import About from "@/components/about/about";
import Experience from "@/components/experience/experience";
import Work from "@/components/work/work";
import Contact from "@/components/contact/contact";

export default function page() {
  return (
    <>
      <Home />
      <About />
      <Experience />
      <Work />
      <Contact />
    </>
  );
}