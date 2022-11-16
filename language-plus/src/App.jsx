
import React from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Cursos from './components/pages/Cursos'
import Cadastro from './components/pages/Cadastro'
import Sobre from './components/pages/Sobre'


function App() {


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={< Home />} /> {/* rota para a página incial */}
          <Route path='/cursos' element={< Cursos />} /> {/* rota para a página dos cursos */}
          <Route path='/cadastro' element={< Cadastro />} /> {/* rota para a página de cadastro */}
          <Route path='/sobre' element={< Sobre />} /> {/* rota para a página sobre */}
        </Routes>
      </Router>
    </>
  )
}

export default App
