import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Landing from "./components/Landing/Landing";
import "./App.css";
import Contacts from "./components/Contacts/Contacts";
import About from "./components/About/About";
import ListOfUser from "./components/shared/ListOfUser";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/landing" exact component={Landing} />
          <Route path="/contacts" exact component={Contacts} />
          <Route path="/about" exact component={About} />
          <Route path="/viewuser" exact component={ListOfUser} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
