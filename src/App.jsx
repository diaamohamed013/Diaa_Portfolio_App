import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import NavBar from "./Components/NavBar/NavBar";
import NotFound from './Components/NotFound/NotFound';
import Works from './Components/Works/Works';
import GoToTop from './Components/GoToTop/GoToTop';



function App() {
  return (
    <>
      <GoToTop />
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='home' element={<Home />}></Route>
        <Route path='works' element={<AnimatePresence> <Works /> </AnimatePresence>}>
        </Route>
        <Route path='aboutMe' element={<About />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
