import React from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { maxWidth } from "@material-ui/system";
import PhoneIcon from "@material-ui/icons/Phone";
import NetlifyForm from "react-netlify-form";

const useStyles = makeStyles(theme => ({
  margin: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  card: {
    marginTop: "0px",
    padding: theme.spacing(3),

    borderRadius: "7px",
    maxWidth: "1400px",

    float: "middle",
    textAlign: "left"
  },
  phoneCard: {
    marginTop: theme.spacing(1),
    maxWidth: "1400px",

    float: "middle",
    textAlign: "center",
    padding: theme.spacing(3)
  },
  phoneText: {
    verticalAlign: "middle"
  },
  phoneIcon: {
    verticalAlign: "middle",
    marginBottom: "3px",
    marginRight: "10px"
  }
}));

export default function AboutMe() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <div>
      <Paper className={classes.card} elevation="0" variant="outlined">
        <Typography variant="h6">Email Contact Form</Typography>
        <NetlifyForm name="Contact Form">
          {({ loading, error, success }) => (
            <div>
              {loading && <div>Loading...</div>}
              {error && (
                <div>
                  Your information was not sent. Please try again later.
                </div>
              )}
              {success && <div>Thank you for contacting us!</div>}
              {!loading && !success && (
                <div>
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
                    <InputLabel htmlFor="standard-adornment-amount">
                      Message
                    </InputLabel>
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
                </div>
              )}
            </div>
          )}
        </NetlifyForm>
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
    </div>
  );
}
