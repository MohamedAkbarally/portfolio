import React, { useState } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import RedditGIF from "../../images/reddit.gif";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    width: "100%",
  },
  image: {
    width: "50vw",
  },

  box: {
    borderRadius: 7,
    marginTop: 4,
    marginBottom: 4,
  },
  box2: {
    width: "50vw",
    minHeight: (window.innerWidth * 0.5) / 1.76,
  },
}));

export default function Carousel(props) {
  const classes = useStyles();
  const { slides } = props;
  const length = slides.length;
  const [count, setCount] = useState(1);
  const [load, setLoad] = useState(false);

  function nextSlide() {
    nextSlide = count + 1;
    if (nextSlide > length) nextSlide = length;
    setCount(nextSlide);
  }

  function previousSlide() {
    nextSlide = count - 1;
    if (nextSlide < 1) nextSlide = 1;
    setCount(nextSlide);
  }

  return length == 0 ? (
    <div></div>
  ) : (
    <div className={classes.root}>
      <Typography variant="h6" className={classes.title}>
        Image Reel
      </Typography>
      <Typography variant="caption text" gutterBottom>
        Image {count}: {slides[count - 1].Title}
      </Typography>
      <br></br>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        p={0}
        m={0}
        bgcolor="grey.300"
        className={classes.box}
      >
        <Box p={0}>
          <IconButton
            aria-label="delete"
            disabled={count == 1}
            onClick={previousSlide}
          >
            <ArrowBackIcon className={classes.arrow} />
          </IconButton>
        </Box>
        <Box p={1} className={classes.box2}>
          <img
            onLoad={() => {
              setLoad(true);
            }}
            src={slides[count - 1].Image.url}
            className={classes.image}
          ></img>
        </Box>
        <Box p={1}>
          <IconButton
            disabled={count == length}
            aria-label="delete"
            onClick={nextSlide}
          >
            <ArrowForwardIcon className={classes.arrow} />
          </IconButton>
        </Box>
      </Box>
      <Typography variant="subtitle2" gutterBottom>
        {count} out of {length}
      </Typography>
    </div>
  );
}
