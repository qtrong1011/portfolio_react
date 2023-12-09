import Navbar from "./components/navbar/navbar.component";
import Home from "./components/home/home.component"
import About from './components/about/about.component'
import Skills from './components/skills/skills.component'
import Work from './components/work/work.component'
import Contact from './components/contact/contact.componen'


function App() {
  return (
    <div className="relative">
     <Navbar />
     <Home />
     <About />
     <Skills/>
     <Work />
     <Contact />
    </div>
  );
}

export default App;
