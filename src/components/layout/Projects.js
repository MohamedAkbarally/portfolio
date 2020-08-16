import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import ProjectCard from "../common/ProjectCard";
import Typography from "@material-ui/core/Typography";
import InfoCard from "../common/InfoCard";
import { MyContext } from "../../Provider";

const styles = {
  grid: { float: "middle", textAlign: "center" },
  title: { textAlign: "left" },
};

export default function Projects(props) {
  return (
    <MyContext.Consumer>
      {(context) => (
        <React.Fragment>
          {context.state.card === -1 ? (
            <React.Fragment>
              <Typography style={styles.title} variant="h6" gutterBottom>
                Programming
              </Typography>
              <Grid container style={styles.grid} spacing={3}>
                {props.projects.map((project, index) => {
                  return project.Type == "Programming" ? (
                    <ProjectCard
                      cardClick={(val) => context.setCard(val)}
                      data={project}
                      hel={index}
                      key={index}
                    />
                  ) : (
                    <React.Fragment></React.Fragment>
                  );
                })}
              </Grid>
              <br></br>
              <Typography style={styles.title} variant="h6" gutterBottom>
                Miscellaneous
              </Typography>

              <Grid container style={styles.grid} spacing={3}>
                {props.projects.map((project, index) => {
                  return project.Type == "Miscellaneous" ? (
                    <ProjectCard
                      cardClick={(val) => context.setCard(val)}
                      data={project}
                      hel={index}
                      key={index}
                    />
                  ) : (
                    <React.Fragment></React.Fragment>
                  );
                })}
              </Grid>
            </React.Fragment>
          ) : (
            <InfoCard
              cardClick={(val) => context.setCard(val)}
              data={props.projects[context.state.card]}
            />
          )}
        </React.Fragment>
      )}
    </MyContext.Consumer>
  );
}
