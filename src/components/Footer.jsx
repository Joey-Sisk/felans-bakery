import React from "react";
import { Typography } from "@material-ui/core";

export default function Footer(props) {
  return (
    <footer className={props.classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        Felan's Bakery
      </Typography>
      <Typography variant="subtitle1" align="center">
        A website created by{" "}
        <a href="https://joeysiskportfolio.netlify.app/" className={props.classes.footerLink}>Joey Sisk</a>.
      </Typography>
    </footer>
  );
}
