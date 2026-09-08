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
        <Route path="/Protfolio/" element={<Home />} />
        <Route path="/Protfolio/projects" element={<Projects />} />
        <Route path="/Protfolio/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
