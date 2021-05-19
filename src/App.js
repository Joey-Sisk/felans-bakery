import React from "react";
import {
  CssBaseline,
} from "@material-ui/core";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
// import { StylesProvider } from '@material-ui/core/styles';

import useStyles from "./appStyles";

function App() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Navbar />
      <main>
        <Landing classes={classes} />
        <Cards classes={classes} />
      </main>
      <Footer classes={classes} />
    </>
  );
}

export default App;
