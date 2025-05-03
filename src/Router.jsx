import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Cv from './pages/Cv.jsx';
import Contact from './pages/Contact.jsx';
import Layout from './components/Layout.jsx';  // structure principale (Header/Footer)
import NoFound from './pages/NoFound.jsx';

function Router({ darkMode, toggleTheme }) {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home darkMode={darkMode} toggleTheme={toggleTheme} /></Layout>} />
      <Route path="/cv" element={<Layout><Cv /></Layout>} />
      <Route path="/project" element={<Layout><Projects /></Layout>} />
      <Route path="/contact" element={<Layout><Contact /></Layout>} />
      <Route path="*" element={<NoFound />} />
    </Routes>
  );
}

export default Router;