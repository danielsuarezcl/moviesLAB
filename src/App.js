import React from "react";
import { 
  BrowserRouter as 
  Router, 
  Switch, 
  Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Watchlist } from "./components/Watchlist";
import { Watched } from "./components/Watched";
import { Add } from "./components/Add";
import NoEncontrado404 from "./components/NoEncontrado404";
import "./App.css";
import "./lib/font-awesome/css/all.min.css";
import "./components/StyledComponents"


import { GlobalProvider } from "./context/GlobalState";

// CREACIÓN DE RUTAS DE NAVEGACIÓN

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Watchlist}/>
          <Route path="/add" exact component={Add} />
          <Route path="/watched" exact component={Watched} />
          <Route path='*' component={NoEncontrado404} />
        </Switch>
      </Router>
    </GlobalProvider>
  );
}



export default App;
