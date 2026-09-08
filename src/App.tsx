import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from "./components/navbar.tsx";

import Home from './pages/Home.tsx';
import Projects from './pages/Projects.tsx';
import Contact from './pages/Contact.tsx';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path="/Portfolio/" element={<Home />} />
        <Route path="/Portfolio/projects" element={<Projects />} />
        <Route path="/Portfolio/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
