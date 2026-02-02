import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import News from './pages/News';

// Scroll To Top component to handle route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Wrapper for Navbar to access router context
const ConditionalNavbar = () => {
  const location = useLocation();
  return <Navbar isHome={location.pathname === '/'} />;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ConditionalNavbar />
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
