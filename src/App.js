import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Movie from "./components/Movie";
import Navbar from "./components/Navbar";
import Error from "./components/Error";
import { AppProvider } from "./context";

const App = () => {
  return (
    <AppProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/movies/:id" component={Movie} />
            <Route component={Error} />
          </Switch>
        </div>
      </Router>
    </AppProvider>
  );
};

export default App;
