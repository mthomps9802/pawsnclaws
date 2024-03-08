
import './App.css';
import React from "react"
import Navbar from "./Navbar/NavbarElements"
import{
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import Home from "./pages"
import About from "./pages/aboutus"
import Donate from "./pages/donate"
import HowItWorks from "./pages/howitworks"
import Contact from "./pages/contactus"
import Rehome from "./pages/rehome"
import Adopt from "./pages/adopt"



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home /> } />
        <Route exact path="/adopt" element={<Adopt /> } />
        <Route exact path="/rehome" element={<Rehome /> } />
        <Route exact path="/aboutus" element={<About /> } />
        <Route exact path="/donate" element={<Donate /> } />
        <Route exact path="/howitworks" element={<HowItWorks /> } />
        <Route exact path="/contactus" element={<Contact /> } />
      </Routes>
    </Router>
    
  );
}

export default App;
