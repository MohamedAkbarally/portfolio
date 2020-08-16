import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Certificate from "../common/Certificate";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  grid: { float: "middle", textAlign: "center" },
  title: { textAlign: "left" },
}));

export default function CV(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography className={classes.title} variant="h6" gutterBottom>
        Work Experience
      </Typography>
      <Box display="flex" flexDirection="row" p={1} m={1}>
        {props.credentials
          .filter((opt) => opt.Type == "Work")
          .map((opt) => (
            <Box p={1}>
              <Certificate
                title={opt.Title}
                desc={opt.Description}
                buttons={opt.buttons}
                type="Work"
              ></Certificate>
            </Box>
          ))}
      </Box>

      <Typography className={classes.title} variant="h6" gutterBottom>
        Formal Education
      </Typography>
      <Box display="flex" flexDirection="row" p={1} m={1}>
        {props.credentials
          .filter((opt) => opt.Type == "Formal")
          .map((opt) => (
            <Box p={1}>
              <Certificate
                title={opt.Title}
                desc={opt.Description}
                buttons={opt.buttons}
                type="Formal"
              ></Certificate>
            </Box>
          ))}
      </Box>
      <Typography className={classes.title} variant="h6" gutterBottom>
        Online Course Cerficates
      </Typography>
      <Box display="flex" flexDirection="row" p={1} m={1}>
        {props.credentials
          .filter((opt) => opt.Type == "Online")
          .map((opt) => (
            <Box p={1}>
              <Certificate
                title={opt.Title}
                desc={opt.Description}
                buttons={opt.buttons}
                type="Online"
              ></Certificate>
            </Box>
          ))}
      </Box>
    </React.Fragment>
  );
}
