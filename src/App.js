import React from "react";
import { CssBaseline } from "@material-ui/core";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import { Parallax } from "react-parallax";
import parallaxImage from "./images/cupcakes-outside-square.jpg";
// import { StylesProvider } from '@material-ui/core/styles';

import useStyles from "./appStyles";

function App() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Navbar classes={classes} />
      <main>
        {/* <img src={parallaxImage} alt="sample" /> */}
        <Parallax
          bgImage={parallaxImage}
          bgImageAlt="Cupcakes outside"
          strength={600}
          blur="2"
          
        >
          <Landing classes={classes} />
        </Parallax>
        <Cards classes={classes} />
      </main>
      <Footer classes={classes} />
    </>
  );
}

export default App;

// https://www.npmjs.com/package/react-parallax
