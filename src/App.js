import { Router } from "express";
import React from "react";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path ="/" exact component={Home} />
          <Route path ="/about" component={About} />
          <Route path ="/projects" component={Projects} />
        </Switch>
        <Footer/>
      </div>
    </Router>
  )
}

export default App;
