import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import DevTag from "./DevTag";
import Carousel from "./Carousel";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

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

export default function InfoCard(props) {
  const classes = useStyles();
  const { Title, Description, Color, buttons, slides, Icons } = props.data;

  return (
    <div>
      <div className={classes.toolbar}>
        <AppBar position="static" style={{ backgroundColor: Color }}>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={() => props.cardClick(-1)}
            >
              <ArrowBackIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {Title}
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <br></br>

      <Grid container>
        <Grid item md={12}>
          <Typography variant="h6" className={classes.title}>
            Description
          </Typography>
          <Typography variant="body" className={classes.title}>
            {Description}
          </Typography>
          <br></br>
          {Icons ? (
            Icons.split(",").map((opt) => (
              <DevTag
                name={opt.split("|")[1]}
                icon={opt.split("|")[0]}
              ></DevTag>
            ))
          ) : (
            <div></div>
          )}

          <br></br>
          <br></br>
        </Grid>
        <Divider variant="middle" />

        <Grid item md={12}>
          <Carousel slides={slides} className={classes.carousel}></Carousel>
        </Grid>
      </Grid>

      <Box display="flex" flexDirection="row-reverse" p={1} m={1}>
        {buttons.map((opt) => (
          <Box p={1}>
            <Button
              href={opt.Link}
              variant="contained"
              style={{ backgroundColor: Color, color: "#fff" }}
            >
              {opt.Display}
            </Button>
          </Box>
        ))}
      </Box>
    </div>
  );
}
