import './App.css'
import { Route, Routes, useParams } from 'react-router-dom'
import { Home } from './Components/Home'
import { About } from './Components/About'
import { Footer } from './Components/Footer'
import { Hobbies } from './Components/Hobbies'
import { Navbar } from './Components/Navbar'
import { Projects } from './Components/Projects'
import { ProjectDetails } from './Components/ProjectsDetails'
import { Contact } from './Components/Contact'
import ProjectsData from './json/projects-data.json'

function App () {
  const Details = () => {
    const { name } = useParams()

    return (
      ProjectsData.map(p => p.url === name ? <ProjectDetails key={p.id} title={name} imgName={p.home_img} description={p.description} demoUrl={p.demo_link} repoUrl={p.repo_link} gallery={p.gallery} folder={p.folder_img} /> : '')
    )
  }

  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Hobbies' element={<Hobbies />} />
        <Route path='/Projects' element={<Projects />} />
        <Route path='/Projects/Details/:name' element={<Details />} />
        <Route path='/Contact/:name' element={<Contact />} />
        <Route path='*' element={<h1 className='404'>No se encontró la página</h1>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
