import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar'
import MainContent from './Components/MainContent'
import Footer from './Components/Footer'
import AboutMe from './Components/AboutMe'
import MyProjects from './Components/MyProjects'
import { ScrollProvider } from './Components/Assets/ScrollDisable';


function App() {
  return (
    <>
      <ScrollProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/myprojects" element={<MyProjects />} />
          </Routes>
          <Footer />
        </Router>
      </ScrollProvider>

    </>
  )

    ;
}

export default App;
