import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Components/Home'
import { About } from './Components/About'
import { Footer } from './Components/Footer'
import { Hobbies } from './Components/Hobbies'
import { Projects } from './Components/Projects'
import { Navbar } from './Components/Navbar'

function App () {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Home />} />
        <Route path='/Hobbies' element={<Hobbies />} />
        <Route path='/Projects' element={<Projects />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
