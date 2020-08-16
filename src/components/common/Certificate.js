import React from "react";
import CertR from "../../images/CertificateR.svg";
import CertB from "../../images/CertificateB.svg";
import CertY from "../../images/CertificateG.svg";
import Dialog from "./CertificateDialog";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  cert: { width: 100, cursor: "pointer" },
  div: { width: 110 },
}));

export default function Certificate(props) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  var Cert;
  if (props.type === "Work") Cert = CertR;
  if (props.type === "Online") Cert = CertY;
  if (props.type === "Formal") Cert = CertB;

  return (
    <div className={classes.div}>
      <img
        src={Cert}
        alt="certificate"
        className={classes.cert}
        onClick={() => setOpen(true)}
      ></img>
      <br></br>
      <Typography className={classes.title} variant="body" gutterBottom>
        {props.title}
      </Typography>
      <Dialog
        open={open}
        handleClose={handleClose}
        title={props.title}
        desc={props.desc}
        buttons={props.buttons}
      ></Dialog>
    </div>
  );
}
