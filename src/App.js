import React from "react";
import { CssBaseline, Typography, AppBar, Card, CardActions, CardContent, CardMedia, Grid, Toolbar, Container, Button } from "@material-ui/core";
// import { StylesProvider } from '@material-ui/core/styles';

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  }
}));

function App() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6">Felans Bakery</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
              Felans Bakery
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Welcome to my Bakery, please look around at some of my edible art and if you like what you see you can reach out to me and I will make a custom cake to meet your needs.
            </Typography>
            <div className={classes.button}>
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
      </main>
    </> 
  );
}

export default App;
