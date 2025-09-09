import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Cv from './pages/Cv.jsx';
import Contact from './pages/Contact.jsx';
import Layout from './components/Layout.jsx';  // structure principale (Header/Footer)
import NoFound from './pages/NoFound.jsx';
import SecretPage from './pages/SecretPage.jsx';
import Projects from './pages/Project.jsx';

function Router({ darkMode, toggleTheme }) {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home darkMode={darkMode} toggleTheme={toggleTheme} /></Layout>} />
      <Route path="/cv" element={<Layout><Cv /></Layout>} />
      <Route path="/contact" element={<Layout><Contact /></Layout>} />
      <Route path="/projects" element={<Layout><Projects /></Layout>} />
      <Route path="*" element={<NoFound />} />
      {/*<Route path="/secret" element={<SecretPage />} />*/}
    </Routes>
  );
}

export default Router;