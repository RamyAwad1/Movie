import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Main from './Pages/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navagation';
import Footer from './Components/Footer';



function App() {


  return (


    <Router>
       <Navbar />
       {/* <Link to="/movies" >Movies</Link> */}
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </main>
      <Footer />
    </Router>

  )
}

export default App
