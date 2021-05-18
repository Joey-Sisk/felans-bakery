import React from "react";
import { Typography } from "@material-ui/core";

export default function Footer(props) {
  return (
    <footer className={props.classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        Felans Bakery
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary">
        This website created by{" "}
        <a href="https://joeysiskportfolio.netlify.app/">Joey Sisk</a>.
      </Typography>
    </footer>
  );
}
