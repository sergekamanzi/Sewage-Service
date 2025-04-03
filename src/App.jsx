import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import Contact from './components/Contact/contact';
import Home from './pages/Home/home';

function App() {
  return (
    <>
      {/* Navbar is present on all pages */}
      <Navbar />
      
      {/* Main content changes based on route */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes here for other pages like Why Us, Services, etc. */}
      </Routes>
      
      {/* Contact is present on all pages */}
      <Contact />
    </>
  );
}

export default App;