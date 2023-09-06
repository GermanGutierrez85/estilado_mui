import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar";
import Home from "../components/Home";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";

export default function RouterPrincipal() {
  return (
    <Router>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<Contact />}/>
        </Routes>
    </Router>
  )
}
