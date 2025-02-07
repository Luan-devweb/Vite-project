
import './App.css'
import Button from './componrnts/Button/button'
import Header from './componrnts/header/header'
import Profile from './componrnts/profile/profile'
import Pofile from './componrnts/profile/profile'
import Comentario from './pages/comentarios/comentario'
import Contato from './pages/contato/contato'

import Fotos from './pages/fotos/fotos'
import Home from './pages/home/homs'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'







function App() {
  
  
  return (
   
   <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Home/>} />
        <Route path='/contato' element= {<Contato/>} />
        <Route path='/fotos' element= {<Fotos/>} />
        <Route path='/comentarios' element= {<Comentario/>} />
        
        
     </Routes>
   </BrowserRouter>
    
  )
}

export default App
