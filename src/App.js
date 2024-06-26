import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from "./components/Footer";
import About from "./components/About";
import Projects from "./components/Projects";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path ="/" exact component={Home} />
          <Route path ="/about" component={About} />
          <Route path ="/projects" component={Projects} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  )
}

export default App;
