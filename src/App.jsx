import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

//Components
import NavBar from './Components/NavBar';
import EditForm from './Components/EditForm';
import CreateForm from './Components/CreateForm';

//Views
import Home from './Pages/Home';
import Index from './Pages/Index';
import ShowPage from './Pages/ShowPage';
import Error from './Pages/Error';



function App() {
  return (
    <>
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/index" element={<Index/>}/>
        <Route path="/:id" element={<ShowPage/>}/>
        <Route path="/create" element={<CreateForm/>}/>
        <Route path="/:id/edit" element={<EditForm/>}/>
        <Route path="/notfound" element={<Error />}/>
      </Routes>
    </Router>
      
    </>
  )
}

export default App
