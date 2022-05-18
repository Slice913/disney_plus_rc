import React from 'react';
import './App.css';
import Header from './components/Header';
import Detail from './components/Detail';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
        <Routes>
            <Route path="/detail" element={<Detail/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
