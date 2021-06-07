import React from "react";
import { Typography, Container, Grid, Button } from "@material-ui/core";

export default function Landing(props) {
  return (
    <div className={props.classes.landingContainer}>
      <Container maxWidth="sm" gutterBottom>
        <Typography
          className={props.classes.landingTitle}
          variant="h2"
          align="center"
          gutterBottom
        >
          Felans Bakery
        </Typography>
        <Typography
          className={props.classes.landingText}
          variant="h5"
          align="center"
          paragraph
        >
          Welcome to my Bakery, please look around at some of my edible art and
          if you like what you see you can reach out to me and I will make a
          custom cake to meet your needs.
        </Typography>
        <div className={props.classes.buttonContainer}>
          <Grid container spacing={2} justify="center">
            {/* <Grid item> */}
              <Button variant="contained" className={props.classes.buttons}>
                Contact Me
              </Button>
            {/* </Grid>
            <Grid item>
              <Button variant="contained" className={props.classes.buttons}>
                Social Media
              </Button>
            </Grid> */}
          </Grid>
        </div>
      </Container>
    </div>
  );
}
