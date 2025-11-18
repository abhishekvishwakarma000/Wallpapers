import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from '../pages/about.jsx'
import Nopage from '../pages/Nopage.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={< Nopage/>} />
      </Routes>
    </BrowserRouter>
)
root.render(<App />);
