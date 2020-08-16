import React from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import PhoneIcon from "@material-ui/icons/Phone";
import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";

const useStyles = makeStyles((theme) => ({
  margin: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  card: {
    marginTop: "0px",
    padding: theme.spacing(3),

    borderRadius: "7px",

    float: "middle",
    textAlign: "left",
  },
  phoneCard: {
    marginTop: theme.spacing(1),

    float: "middle",
    textAlign: "center",
    padding: theme.spacing(3),
  },
  phoneText: {
    verticalAlign: "middle",
  },
  phoneIcon: {
    verticalAlign: "middle",
    marginBottom: "3px",
    marginRight: "10px",
  },
  Snackbar: {
    maxWidth: "400px",

    [theme.breakpoints.down("xs")]: {
      marginLeft: "0px",
      marginRight: "15px",

      maxWidth: "100%",
    },

    float: "middle",
    width: "100%",
  },
}));

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export default function AboutMe() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen2(false);
    setOpen(false);
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmit = (e) => {
    fetch("/contact", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...values }),
    })
      .then(() => setOpen(true))
      .catch((error) => setOpen2(true));

    e.preventDefault();
  };

  return (
    <div>
      <Paper className={classes.card} elevation="0" variant="outlined">
        <Typography variant="h6">Email Contact Form</Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs="12" md="6">
              <FormControl fullWidth className={classes.margin}>
                <InputLabel htmlFor="standard-adornment-amount">
                  Name
                </InputLabel>
                <Input
                  required
                  type="text"
                  minlength="3"
                  name="name"
                  value={values.name}
                  onChange={handleChange("name")}
                />
              </FormControl>
            </Grid>
            <Grid item xs="12" md="6">
              <FormControl fullWidth className={classes.margin}>
                <InputLabel htmlFor="standard-adornment-amount">
                  Email Address
                </InputLabel>
                <Input
                  required
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange("email")}
                />
              </FormControl>
            </Grid>
          </Grid>
          <FormControl fullWidth className={classes.margin}>
            <InputLabel htmlFor="standard-adornment-amount">Message</InputLabel>
            <Input
              name="message"
              required
              value={values.message}
              multiline
              rows="4"
              onChange={handleChange("message")}
            />
          </FormControl>
          <FormControl fullWidth className={classes.margin}>
            <Button type="submit" color="primary" variant="contained">
              SEND
            </Button>
          </FormControl>
        </form>
      </Paper>
      <Paper className={classes.phoneCard} elevation="0" variant="outlined">
        <Typography className={classes.phoneText} variant="h6">
          <PhoneIcon className={classes.phoneIcon}></PhoneIcon>
          <a
            style={{ textDecoration: "inherit", color: "inherit" }}
            href="tel:+61481994955"
          >
            +61 (481) 994 955
          </a>
        </Typography>
      </Paper>
      <Snackbar
        className={classes.Snackbar}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <Alert
          className={classes.Snackbar}
          onClose={handleClose}
          severity="success"
          variant="filled"
        >
          Email Sent Successfully!
        </Alert>
      </Snackbar>
      <Snackbar
        className={classes.Snackbar}
        open={open2}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <Alert
          className={classes.Snackbar}
          onClose={handleClose}
          severity="error"
          variant="filled"
        >
          Error Sending Email!
        </Alert>
      </Snackbar>
    </div>
  );
}
