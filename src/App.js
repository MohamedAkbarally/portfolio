import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import NavBar from "./components/common/NavBar";
import Projects from "./components/layout/Projects";
import AboutMe from "./components/layout/AboutMe";
import Contact from "./components/layout/Contact";
import CV from "./components/layout/CV";
import { withStyles } from "@material-ui/core/styles";
import { MyProvider } from "./Provider";
import axiosRetry from "axios-retry";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

axiosRetry(axios, {
  retries: 10,
  retryDelay: (retryCount) => {
    return retryCount * 1000;
  },
});

const styles = (theme) => ({
  root: {
    padding: 24,
    marginLeft: "279px",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0px",
      marginRight: "0px",
    },
  },
});
var isNav = true;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { AboutMe: "", Projects: [], Credentials: [] };
  }

  componentDidMount() {
    axios
      .all([
        axios.get(`https://portfolio-progress-mohamed.herokuapp.com/about`),
        axios.get(`https://portfolio-progress-mohamed.herokuapp.com/projects`),
        axios.get(
          "https://portfolio-progress-mohamed.herokuapp.com/credentials"
        ),
      ])
      .then(
        axios.spread((about_data, project_data, credentials_data) => {
          this.setState({ AboutMe: about_data.data.Description });
          this.setState({ Projects: project_data.data });
          this.setState({ Credentials: credentials_data.data });
        })
      );
  }

  render() {
    const { classes } = this.props;

    return (
      <MyProvider>
        <Router>
          <div className="App">
            <NavBar isNav={true} />
            <div className={classes.root}>
              <Switch>
                <Route
                  exact
                  path="/projects"
                  component={() => (
                    <Projects
                      card={this.state.Card}
                      toggleNav={this.toggleNav}
                      projects={this.state.Projects}
                    />
                  )}
                />
                <Route exact path="/contact" component={Contact} />
                <Route
                  exact
                  path="/cv"
                  component={() => <CV credentials={this.state.Credentials} />}
                />
                <Route
                  exact
                  path="/about"
                  component={() => <AboutMe text={this.state.AboutMe} />}
                />
                <Redirect from="/" to="/projects" />
              </Switch>
            </div>
          </div>
        </Router>
      </MyProvider>
    );
  }
}

export default withStyles(styles)(App);
