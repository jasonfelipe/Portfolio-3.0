import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";






const App = () => (
  <Router>
    <div>
      <Navbar />
      <Wrapper>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/contact' component={Contact} />
      </Switch>
      </Wrapper>
      <Footer />
    </div>
  </Router>

)
export default App;
