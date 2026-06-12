import { useState } from 'react'
import './App.css'
import Layout from './HOC/Layout'
import Home from './pages/Home'
import About from './pages/About'
import { Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
        <Route element={<Layout/>} >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;
