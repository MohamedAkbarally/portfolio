import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ProjectCard from "./ProjectCard";
import HelpmeImage from "./Layer 5.png";

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
        imgPath:
          "https://techcrunch.com/wp-content/uploads/2018/01/giphy1.gif?w=711"
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
