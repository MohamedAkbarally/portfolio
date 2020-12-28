import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/common/NavBar";
import Projects from "./components/layout/Projects";
import Project from "./components/layout/Project";
import AboutMe from "./components/layout/AboutMe";
import Contact from "./components/layout/Contact";
import CV from "./components/layout/CV";
import { makeStyles } from "@material-ui/core/styles";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 24,
    position: "relative",
    marginLeft: "279px",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0px",
      marginRight: "0px",
    },
  },
}));

function App() {
  const classes = useStyles();

  const [projects, setProjects] = useState(null);
  const [project, setProject] = useState(null);
  const [about, setAbout] = useState(null);
  const [certificates, setCertificates] = useState(null);

  return (
    <Router>
      <div>
        <NavBar isNav={true} />
        <div className={classes.root}>
          <Switch>
            <Route
              exact
              path="/projects"
              component={() => (
                <Projects projects={projects} setProjects={setProjects} />
              )}
            />
            <Route
              exact
              path="/project/:slug"
              component={() => (
                <Project
                  project={project}
                  setProject={setProject}
                  projects={projects}
                />
              )}
            />

            <Route exact path="/contact" component={Contact} />
            <Route
              exact
              path="/cv"
              component={() => (
                <CV
                  certificates={certificates}
                  setCertificates={setCertificates}
                />
              )}
            />
            <Route
              exact
              path="/about"
              component={() => <AboutMe about={about} setAbout={setAbout} />}
            />
            <Redirect from="/" to="/projects" />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
