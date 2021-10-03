import React from 'react';
import About from "./router/About";
import Home from "./router/Home";
import MovieDetails from './router/MovieDetails';
import Navigation from './components/Navigation';
import {BrowserRouter as Roter, Route} from "react-router-dom";

function App() {
  return (
    <Roter>
      <Navigation/>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/movie-details" component={MovieDetails}/>
    </Roter>
  );
}

export default App;