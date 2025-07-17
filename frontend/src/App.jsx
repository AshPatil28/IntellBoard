import React from 'react'
import { Routes,Route } from 'react-router'
import Home from './pages/Home'
import CreatePage from './pages/CreatePage'
import NoteDetailPage from './pages/NoteDetailPage'
import { toast } from 'react-hot-toast'
const App = () => {
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#00FF9D40_100%)]"/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/create' element={<CreatePage/>}>CreatePage</Route>
        <Route path='/notes/:id' element={<NoteDetailPage/>}>NoteDetailPage</Route>
      </Routes>
    </div>
  )
}

export default App
