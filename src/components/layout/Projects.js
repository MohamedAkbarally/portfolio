import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import ProjectCard from "../common/ProjectCard";
import Typography from "@material-ui/core/Typography";
import ProjectCardSkeleton from "../common/ProjectCardSkeleton";
import sanityClient from "../../client";

const styles = {
  grid: { float: "middle", textAlign: "center" },
  title: { textAlign: "left" },
};

export default function Projects({ projects, setProjects }) {
  useEffect(() => {
    if (projects == null) {
      sanityClient
        .fetch(
          `*[_type == "post"]{
      title,
      slug,
      color,
      description,
      mainImage{
        asset->{
        _id,
        url
      }
    }
  }`
        )
        .then((data) => setProjects(data))
        .catch(console.error);
    }
  }, []);

  return projects != null ? (
    <React.Fragment>
      <Grid container style={styles.grid} spacing={3}>
        {projects.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              image={project.mainImage.asset.url}
              slug={project.slug.current}
              title={project.title}
              color={project.color}
              description={project.description}
            />
          );
        })}
      </Grid>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <Grid container style={styles.grid} spacing={3}>
        <ProjectCardSkeleton></ProjectCardSkeleton>
        <ProjectCardSkeleton></ProjectCardSkeleton>
      </Grid>
    </React.Fragment>
  );
}
