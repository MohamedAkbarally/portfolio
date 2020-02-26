import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import Button from "@material-ui/core/Button";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Paper, Grid } from "@material-ui/core";
import MobileStepper from "@material-ui/core/MobileStepper";
import Typography from "@material-ui/core/Typography";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import MuiDialogActions from "@material-ui/core/DialogActions";
import Divider from "@material-ui/core/Divider";
import DevTag from "./DevTag";
import Fade from "@material-ui/core/Zoom";

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff"
  },
  paper: {
    flexGrow: 1,
    margin: "10%",
    position: "relative",
    maxWidth: "800pt",
    borderRadius: "7px"
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(0),
    top: theme.spacing(0),
    color: theme.palette.grey[500]
  },
  header: {
    alignItems: "center",

    height: 30,
    paddingLeft: theme.spacing(4)
  },
  stepper: {
    background: "white"
  },
  headertext: {
    fontWeight: 450,
    margin: theme.spacing(1)
  },
  grid: {
    paddingTop: 10,
    paddingBottom: 0,
    paddingLeft: 20,
    paddingRight: 20
  },
  scroll: {
    maxHeight: "70vh",
    overflowY: "auto",
    overflowX: "hidden"
  },
  img: {
    borderRadius: "3px"
  }
}));

export default function SimpleBackdrop(props) {
  const classes = useStyles();
  const theme = useTheme();
  const {
    name,
    description,
    descriptionLong,
    tags,
    images,
    app,
    codeLink
  } = props.data;
  const { open, handleToggle } = props;
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const items = tags.map((item, key) => (
    <DevTag
      key={item.icon}
      icon={item.icon}
      name={item.name ? item.name : ""}
    ></DevTag>
  ));

  return (
    <Backdrop className={classes.backdrop} open={open}>
      <Fade in={open}>
        <Paper className={classes.paper} scroll={"paper"}>
          <Typography gutterBottom className={classes.headertext} variant="h6">
            {name.toUpperCase()}
          </Typography>
          {open ? (
            <IconButton
              aria-label="close"
              className={classes.closeButton}
              onClick={handleToggle}
            >
              <CloseIcon />
            </IconButton>
          ) : null}
          <Divider />
          <div className={classes.scroll}>
            <Grid container className={classes.grid} spacing={3}>
              <Grid item md="6" xs="12">
                <div>
                  <Paper square elevation={0} className={classes.header}>
                    <Typography className={classes.headertext}>
                      {images[activeStep].label.toUpperCase()}
                    </Typography>
                  </Paper>
                  <img
                    className={classes.img}
                    src={images[activeStep].imgPath}
                    alt={images[activeStep].label}
                    width="100%"
                  />
                  <MobileStepper
                    className={classes.stepper}
                    steps={maxSteps}
                    position="static"
                    variant="text"
                    activeStep={activeStep}
                    nextButton={
                      <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                      >
                        Next
                        {theme.direction === "rtl" ? (
                          <KeyboardArrowLeft />
                        ) : (
                          <KeyboardArrowRight />
                        )}
                      </Button>
                    }
                    backButton={
                      <Button
                        size="small"
                        onClick={handleBack}
                        disabled={activeStep === 0}
                      >
                        {theme.direction === "rtl" ? (
                          <KeyboardArrowRight />
                        ) : (
                          <KeyboardArrowLeft />
                        )}
                        Back
                      </Button>
                    }
                  />
                </div>
              </Grid>
              <Grid item md="6" xs="12">
                <Typography gutterBottom className={classes.headertext}>
                  DESCRIPTION
                </Typography>
                {descriptionLong ? descriptionLong : description}
                <br />
                <br />
                {items}
              </Grid>
            </Grid>
          </div>
          <Divider />
          <MuiDialogActions>
            <Button
              onClick={() => window.open(app.link, "_blank", "resizable=yes")}
            >
              {app.helperText}
            </Button>
            <Button
              color="primary"
              onClick={() => window.open(codeLink, "_blank", "resizable=yes")}
            >
              view source code
            </Button>
          </MuiDialogActions>
        </Paper>
      </Fade>
    </Backdrop>
  );
}
