import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Festivals from './pages/Festivals'
import Gallery from './pages/Gallery'
import Poojas from './pages/Poojas'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<About/>} path="/about"/>
        <Route element={<Contact/>} path="/contact"/>
        <Route element={<Festivals/>} path="/festivals"/>
        <Route element={<Gallery/>} path="/gallery"/>
        <Route element={<Poojas/>} path="/poojas"/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
