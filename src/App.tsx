import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import BuildBreakSplit from "./sections/BuildBreakSplit";
import TechStack from "./sections/TechStack";
import HawkProject from "./sections/HawkProject";
import Projects from "./sections/Projects";
import VibeCoding from "./sections/VibeCoding";
import Journey from "./sections/Journey";
import MicrosoftSecurity from "./sections/MicrosoftSecurity";
import CyberLab from "./sections/CyberLab";
import Dashboard from "./sections/Dashboard";
import Timeline from "./sections/Timeline";
import Certifications from "./sections/Certifications";
import GithubCta from "./sections/GithubCta";
import ResumeCta from "./sections/ResumeCta";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="antialiased">
      <Nav />
      <main>
        <Hero />
        <About />
        <BuildBreakSplit />
        <TechStack />
        <HawkProject />
        <Projects />
        <VibeCoding />
        <Journey />
        <MicrosoftSecurity />
        <CyberLab />
        <Dashboard />
        <Timeline />
        <Certifications />
        <GithubCta />
        <ResumeCta />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
