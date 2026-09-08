import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Projects from './pages/Projects.tsx';
import Contact from './pages/Contact.tsx';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
