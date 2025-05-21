import Blogs from "../../pages/home/Blogs";
import Contact from "../../pages/home/Contact";
import Projects from "../../pages/home/Projects";
import Skill from "../../pages/home/Skill";
import Footer from "../../pages/shared/Footer";
import Banner from "../../pages/home/Banner";

export default function HomePage() {
  return (
    <main className=" sm:px-4 md:px-6 py-10 space-y-10">
      <Banner />
      <Skill />
      <Projects />
      <Contact />
      <Blogs />
      <Footer />
    </main>
  );
}
