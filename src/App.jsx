import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Main from './Pages/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navagation';
import Footer from './Components/Footer';
import Movies from './Pages/Movies';
import MovieDetails from './Pages/MovieDetails';



function App() {


  return (


    <Router>
       <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
        </Routes>
      </main>
      <Footer />
    </Router>

  )
}

export default App
