import Router from "./Router";
import { useEffect, useState } from 'react';

function App() {
  // Mode clair - Mode sombre
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('mode');
    const isDark = savedMode === 'mode-dark';
    setDarkMode(isDark);
    document.body.classList.add(isDark ? 'mode-dark' : 'mode-white');
    document.body.classList.remove(isDark ? 'mode-white' : 'mode-dark');
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);

    const classToAdd = newMode ? 'mode-dark' : 'mode-white';
    const classToRemove = newMode ? 'mode-white' : 'mode-dark';

    document.body.classList.replace(classToRemove, classToAdd);
    localStorage.setItem('mode', classToAdd);
  };

  return <Router darkMode={darkMode} toggleTheme={toggleTheme} />;
}


export default App;
