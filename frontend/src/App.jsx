import React from 'react'
import { Routes,Route } from 'react-router'
import Home from './pages/Home'
import CreatePage from './pages/CreatePage'
import NoteDetailPage from './pages/NoteDetailPage'
import { toast } from 'react-hot-toast'
const App = () => {
  return (
    <div>
      <button className='btn btn-block'>click</button>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/create' element={<CreatePage/>}></Route>
        <Route path='/note/:id' element={<NoteDetailPage/>}></Route>
      </Routes>
    </div>
  )
}

export default App
