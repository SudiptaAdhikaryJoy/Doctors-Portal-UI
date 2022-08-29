import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Navbar from './Pages/Shared/Navbar';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="contact" element={<Contact />} />        
      </Routes>
    </div>
  );
}

export default App;
