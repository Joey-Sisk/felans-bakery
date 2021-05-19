import React from "react";
import {
  CssBaseline,
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Toolbar,
  Container,
  Button,
} from "@material-ui/core";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
// import { StylesProvider } from '@material-ui/core/styles';

import useStyles from "./appStyles";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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
        <Landing classes={classes} />
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card}  xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterCottom cariant="h5">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card, you can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <Footer classes={classes} />
    </>
  );
}

export default App;
