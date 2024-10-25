import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import About from './Components/About.jsx';
import Contact from './Components/Contact.jsx';
import Joke from './Components/Joke.jsx';

import { Routes, Route, BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/protfolioapp" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/joke" element={<Joke />} /> */}
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
