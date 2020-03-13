import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ProjectCard from "./ProjectCard";
import HelpmeImage from "./help.png";
import RTYImage from "./reddit.png";

const useStyles = makeStyles(theme => ({
  grid: { float: "middle", textAlign: "center" }
}));

const projects = [
  {
    name: "helpme.lk",
    image: HelpmeImage,
    description:
      "An website for hiring cleaner, drivers and other daily services to your house. The application was made using react and redux on the front end, and express and node on the backend.",
    bgColor: "#3945bb",
    images: [
      {
        label: "Booking a worker",
        imgPath: "./helpscrn.png"
      },
      {
        label: "Accepting the booking",
        imgPath:
          "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60"
      },
      {
        label: "Job in progress",
        imgPath:
          "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80"
      },
      {
        label: "Creating an account",
        imgPath:
          "https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60"
      }
    ],
    descriptionLong:
      "An website for hiring cleaner, drivers and other daily services to your house. The application was made using react and redux on the front end, and express and node on the backend.",
    tags: [
      { icon: "react-original", name: "React" },
      { icon: "mongodb-plain", name: "MongoDB" },
      { icon: "heroku-original", name: "Heroku" },
      { icon: "android-plain", name: "Android Studio" },
      { icon: "amazonwebservices-original", name: "AWS" }
    ],
    app: {
      link: "http://www.helpme.lk",
      helperText: "view website"
    },
    codeLink: "http://www.github.com"
  },
  {
    name: "RedditToYoutube",
    image: RTYImage,
    description:
      "A tool created using python for creating high production videos from random submissions on Reddit's AMA forum. The program uses the moviepy library and amazon's Polly API",
    bgColor: "#d11929",
    images: [
      {
        label: "Example Video",
        imgPath: "./reddit.gif"
      }
    ],
    descriptionLong:
      "A tool created using python used to created high production video from random submission on Reddit's Ask Me Anything forum. The program makes use of the moviepy library and amazon's Polly API",
    tags: [
      { icon: "python-plain", name: "Python" },

      { icon: "amazonwebservices-original", name: "AWS" }
    ],
    app: {
      link: "https://github.com/MohamedAkbarally/RedditToYoutube",
      helperText: ""
    },
    codeLink: "https://github.com/MohamedAkbarally/RedditToYoutube"
  }
];

export default function Projects() {
  const classes = useStyles();

  return (
    <Grid container className={classes.grid} spacing={3}>
      {projects.map(function(project, index) {
        return <ProjectCard data={project} key={index} />;
      })}
    </Grid>
  );
}
