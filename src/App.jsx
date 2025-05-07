import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Main from './Pages/Main'


function App() {


  return (


    <Router>
      {/* <Navbar /> */}
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </Router>

  )
}

export default App
