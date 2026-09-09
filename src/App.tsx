import Navbar from "./components/navbar.tsx";

import AboutMe from './pages/AboutMe.tsx';
import Skills from './pages/Skills.tsx';
import Projects from './pages/Projects.tsx';
import Contact from './pages/Contact.tsx';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="aboutMe"><AboutMe /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </main>
    </>
  );
}

export default App;
