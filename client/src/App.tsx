import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Chatroom from './components/chatroom/Chatroom'
import Homepage from './components/Homepage/Homepage'

function App() {
  

  return (
    <BrowserRouter>
        <main>
          <Routes>
            <Route path='/' element={ <Homepage /> }/>
            <Route path='/chat' element={ <Chatroom /> }/>
          </Routes>
        </main>
    </BrowserRouter>
  )
}

export default App
