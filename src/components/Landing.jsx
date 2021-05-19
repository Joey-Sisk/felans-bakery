import React from "react";
import { Typography, Container, Grid, Button } from "@material-ui/core";

export default function Landing(props) {

  return (
    <div className={props.classes.container}>
      <Container maxWidth="sm">
        <Typography
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Felans Bakery
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Welcome to my Bakery, please look around at some of my edible art and
          if you like what you see you can reach out to me and I will make a
          custom cake to meet your needs.
        </Typography>
        <div className={props.classes.buttons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button variant="contained" color="primary">
                Contact Me
              </Button>
              <Button variant="outlined" color="primary">
                Social Media
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}
