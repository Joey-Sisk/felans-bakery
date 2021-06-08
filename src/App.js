import React from "react";
import { CssBaseline } from "@material-ui/core";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import { Parallax } from "react-parallax";
import topParallaxImage from "./images/cupcakes-outside-square.jpg";
import botParallaxImage from "./images/thin-cut-cake.jpg";
// import { StylesProvider } from '@material-ui/core/styles';

import useStyles from "./appStyles";

function App() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      {/* <Navbar classes={classes} /> */}
      <main className={classes.mainBackground}>
        <Landing classes={classes} />
        <Parallax
          bgImage={topParallaxImage}
          bgImageAlt="Cupcakes outside"
          strength={250}
          // blur="3"
        >
          <div style={{ height: "350px" }}></div>
        </Parallax>
        <Cards classes={classes} />
      </main>
      <Parallax
        bgImage={botParallaxImage}
        bgImageAlt="Wedding cake"
        strength={250}
        // blur="3"
        className={classes.mainBackground}
      >
        <div style={{ height: "350px" }}></div>
        
      </Parallax>
      <Contact classes={classes} />
      <Footer classes={classes} />
    </>
  );
}

export default App;

// https://www.npmjs.com/package/react-parallax

// https://formspree.io/f/xbjqovab
