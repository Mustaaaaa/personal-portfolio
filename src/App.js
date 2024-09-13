import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar'
import MainContent from './Components/MainContent'
import Footer from './Components/Footer'


function App() {
  return (
    <>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<MainContent />} />
          </Routes>
          <Footer />
        </Router>

    </>
  )

    ;
}

export default App;
