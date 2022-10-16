import './App.css'
import { Route, Routes, useParams } from 'react-router-dom'
import { Home } from './Components/Home'
import { About } from './Components/About'
import { Footer } from './Components/Footer'
import { Hobbies } from './Components/Hobbies'
import { Navbar } from './Components/Navbar'
import { Projects } from './Components/Projects'
import { ProjectDetails } from './Components/ProjectsDetails'
import ProjectsData from './json/projects-data.json'

function App () {
  const Details = () => {
    const { name } = useParams()

    return (
      ProjectsData.map(p => p.title === name ? <ProjectDetails title={name} imgName={p.background_img} subtitle={p.subtitle} description={p.description} /> : '')
    )
  }

  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Home />} />
        <Route path='/Hobbies' element={<Hobbies />} />
        <Route path='/Projects' element={<Projects />} />
        <Route path='/Projects/Details/:name' element={<Details />} />
        <Route path='*' element={<h1 className='404'>No se encontró la página</h1>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
