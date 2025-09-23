
import './App.css'

import Hero from './component/section/herosection.jsx';
import Navbar from './component/section/navbar.jsx';
import About from './component/section/about.jsx';
import Projects from './component/section/project.jsx';
import Contact from './component/section/contact.jsx';
import Footer from './component/section/footer.jsx';
function App() {
  

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />

    </div>
    
  )
}

export default App
