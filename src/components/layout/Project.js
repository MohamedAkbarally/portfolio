import {
  AppBar,
  Button,
  CircularProgress,
  Container,
  CssBaseline,
  IconButton,
  makeStyles,
  Slide,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import sanityClient from "../../client";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Body from "./Body";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
  },
  paper: {
    margin: "auto",

    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 2, 0),
  },
  toolbar: {
    marginTop: -24,
    marginLeft: -24,
    marginRight: -24,
    textAlign: "left",
  },
  menuButton: {
    color: "#fff",
    marginRight: 16,
  },
  icon: {
    marginRight: 10,
  },
}));

const loading = (
  <div
    style={{
      position: "absolute",
      left: "50%",
      top: "50vh",
      transform: "translate(-50%,-50%)",
    }}
  >
    <CircularProgress color="default" style={{ color: "#888" }} />
  </div>
);

export default function Project(props) {
  let { slug } = useParams();
  const { project, setProject } = props;
  const classes = useStyles();

  useEffect(() => {
    if (project == null || project[0].slug.current != slug) {
      sanityClient
        .fetch(`*[_type == "post" && slug.current == "${slug}"]`)
        .then((data) => setProject(data))
        .catch(console.error);
    }
  }, []);

  let color = "#ccc";
  let title = "N/A";
  let body = [];
  let button = [];

  if (project != null && project[0].slug.current == slug) {
    color = project[0].color;
    title = project[0].title;
    body = project[0].body;
    button = project[0].buttonlink;
  }

  return (
    <div
      stlye={{
        backgroundColor: "#fff",
      }}
    >
      <div className={classes.toolbar}>
        <AppBar
          elevation={0}
          style={{ backgroundColor: color, position: "sticky" }}
        >
          <Toolbar>
            <Link to="/projects">
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <ArrowBackIcon />
              </IconButton>
            </Link>
            <Typography variant="h6" className={classes.title}>
              {title}
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <div style={{ marginRight: -24, marginLeft: -24, marginBottom: -24 }}>
        {project == null || project[0].slug.current != slug ? (
          loading
        ) : (
          <Body body={body} color={color} button={button} />
        )}
      </div>
    </div>
  );
}
