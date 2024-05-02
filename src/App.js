import './App.css';
import React from 'react';
import Navbar from './compohome/nav';
import Home from './compohome/Home';
import Footer from './footer';
import { BrowserRouter as  Router, Route, Routes } from 'react-router-dom';
import CadastroForm from './compohome/cadastro';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<CadastroForm />} />
            </Routes>
            <Footer />
        </header>
      </div>
    </Router>
  );
}

export default App;
