import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Layout from './components/Layout.jsx';  // structure principale (Header/Footer)

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
    </Routes>
  );
}

export default Router;