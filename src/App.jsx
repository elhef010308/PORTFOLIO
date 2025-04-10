import Router from "./Router";

function App() {
  return (
    <div>
      <Router />
    </div>
  );
}

export default App;


// Ajouter la fonction ToggleTheme ici pour modifier mode sombre mode clair
/*
  import { useState } from 'react';   
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };
*/

// Ajouter une fonction setLanguage
// setLanguage('fr') ou setLanguage('en')