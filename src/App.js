import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import NavTabs from "./components/NavTabs";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <Router>
      <NavTabs />
      
      <Switch>
        <Route exact path={["/", "JohnThomas"]} component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
