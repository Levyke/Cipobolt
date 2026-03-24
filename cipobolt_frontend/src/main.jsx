import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CardDetails from './components/CardDetails.jsx'
import NewCipo from './components/NewCipo.jsx'
import NewMarka from './components/NewMarka.jsx'
import EditCipo from './components/EditCipo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/:id' element={<CardDetails/>}/>
        <Route path='/newCipo' element={<NewCipo/>}/>
        <Route path='/newMarka' element={<NewMarka/>}/>
        <Route path='/edit/:id' element={<EditCipo/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
