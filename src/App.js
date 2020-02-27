import React from "react";
import "./App.css";
import NavBar from "./components/layout/NavBar";
import Projects from "./components/layout/Projects";
import AboutMe from "./components/layout/AboutMe";
import Contact from "./components/layout/Contact";
import { makeStyles } from "@material-ui/core/styles";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
    marginLeft: "279px",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0px",
      marginRight: "0px"
    },
    maxWidth: "1000pt"
  }
}));

function App() {
  const classes = useStyles();

  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className={classes.root}>
          <Switch>
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/contact" component={AboutMe} />
            <Route exact path="/about" component={Contact} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
